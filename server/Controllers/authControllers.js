const {errorHandler} = require("../utils/dbErrorHandling");
const fetch = require("node-fetch");
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const User = require('../Models/User');
const {validationResult} = require("express-validator");
const nodemailer = require('nodemailer');
const bcrypt = require("bcryptjs")

const message = (token, subject_email) => {
    return (
      `Dear User, \n\n` +
      `This Email is for ${subject_email}\n\n` +
      `The Account activation link is: \n\n `+
      `${process.env.CLIENT_URL}/users/activate/${token}`+
      "\n\n This is a auto-generated email. Please do not reply to this email.\n\n" +
      "Regards\n" +
      "Desi Village Team\n\n"
    );
};

exports.registerController = async (req, res) => {

    const { name, email, password } = req.body;
    console.log(email)
     const user = await User.findOne({ email})
     console.log(user)   
     if (user) {
          res.status(400).json({
            message: "Email already exists"
          });
        } else {
          const encryptedPassword = await bcrypt.hash(password, 10);
          const token = jwt.sign(
            {
              name,
              email,
              encryptedPassword
            },
            process.env.JWT_ACCOUNT_ACTIVATION,
            {
              expiresIn: '5m'
            }
          );
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: `${process.env.EMAIL_ADDRESS}`,
              pass: `${process.env.EMAIL_PASSWORD}`,
            },
          });
          const email_subject = "Desi Village Account Activation";
          const email_message = message(token, email_subject);
      
          const mailOptions = {
            from: `"Desi Village Team"<${process.env.EMAIL_ADDRESS}>`,
            to: `${email}`,
            subject: email_subject,
            text: email_message,
          };
          try{
            await transporter.sendMail(mailOptions);
            res.status(201).json({
                message: `Email has been sent to ${email}`
            })
    
          }catch(err){
           res.status(400).json({
                message: "Email has not been sent due to some technical reason"
            })

          }
        
      }
    
}
exports.activationController = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        console.log('Activation error');
        return res.status(401).json({
          errors: 'Expired link. Signup again'
        });
      } else {
        const { name, email, encryptedPassword } = jwt.decode(token);
        

        console.log(email);
        const user = new User({
          name,
          email,
          password: encryptedPassword,
        });
        user.save((err, user) => {
          if (err) {
            console.log('Save error', errorHandler(err));
            return res.status(401).json({
              errors: errorHandler(err)
            });
          } else {
            return res.json({
              success: true,
              message:'Account activated successfully'});
          }
        });
      }
    });
  } else {
    return res.json({
      message: 'error happening please try again'
    });
  }
};
