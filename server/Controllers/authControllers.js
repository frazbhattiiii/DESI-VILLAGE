const { errorHandler } = require("../utils/dbErrorHandling");
const fetch = require("node-fetch");
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");
const _ = require("lodash");
const { OAuth2Client } = require("google-auth-library");
const User = require("../Models/User");
const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

const message = (token, subject_email, url) => {
  return (
    `Dear User, \n\n` +
    `This Email is for ${subject_email}\n\n` +
    `The link is attached: \n\n ` +
    url +
    "\n\n This is a auto-generated email. Please do not reply to this email.\n\n" +
    "Regards\n" +
    "Desi Village Team\n\n"
  );
};

const sendMail = async (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.EMAIL_ADDRESS}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
    },
  });
  const mailOptions = {
    from: `"Desi Village Team"<${process.env.EMAIL_ADDRESS}>`,
    to: `${email}`,
    subject: subject,
    text: message,
  };
  try {
    await transporter.sendMail(mailOptions);

    return { message: `Email has been sent to ${email}` };
  } catch (err) {
    return {
      message: "Email has not been sent due to some technical reason",
    };
  }
};

exports.registerController = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(400).json({
      message: "Email already exists",
    });
  } else {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign(
      {
        name,
        email,
        encryptedPassword,
      },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "5m",
      }
    );

    const email_subject = "Desi Village Account Activation";
    const email_message = message(
      token,
      email_subject,
      `${process.env.CLIENT_URL}/users/activate/${token}`
    );
    const email_response = await sendMail(email, email_subject, email_message);
    if (email_response.message) {
      res.status(200).json({
        message: email_response.message,
      });
    } else {
      res.status(400).json({
        message: email_response.message,
      });
    }
  }
};
exports.activationController = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        console.log("Activation error");
        res.status(401).json({
          message: "Expired link. Please try again",
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
            console.log("Save error", errorHandler(err));
            return res.status(401).json({
              errors: errorHandler(err),
            });
          } else {
            return res.json({
              success: true,
              message: "Account activated successfully",
            });
          }
        });
      }
    });
  } else {
    return res.json({
      message: "error happening please try again",
    });
  }
};
exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  // check if user exist
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({
      message: "User does not exist",
    });
  } else {
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (verifyPassword) {
      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      const { _id, name, email, role } = user;

      return res.json({
        token,
        user: {
          _id,
          name,
          email,
          role,
        },
      });
    } else {
      res.status(400).json({
        message: "Password is incorrect",
      });
    }
  }
};
exports.forgotPasswordController = async (req, res) => {
  try{
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
   return res.status(400).json({
      message: "User does not exist",
    });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });

   user.updateOne({ resetPasswordLink: token }, (err, success) => {
    if (err) {
      console.log("Error", errorHandler(err));
      return res.status(400).json({
        message: "Error",
      });
    }});
    const email_subject = "Desi Village Forgot Password";
    const url = `${process.env.CLIENT_URL}/users/password/reset/${token}`;
    const email_message = message(token, email_subject, url);
    const email_response = await sendMail(email, email_subject, email_message)
        return res.json({
      message: email_response.message,
    });
  }catch(err){
    return res.status(400).json({
      message: "Technical Error",
    });
  }
};
exports.resetPasswordController = async (req, res) => {
  const { newPassword,resetPasswordLink } = req.body;
  const encyptedPassword = await bcrypt.hash(newPassword, 10);
  try{
    if (resetPasswordLink) {
      jwt.verify(resetPasswordLink, process.env.JWT_SECRET, function(
        err,
        decoded
      ) {
        if (err) {
          return res.status(400).json({
            message: 'Expired link. Try again'
          });
        }

        User.findOne(
          {
            resetPasswordLink
          },
          (err, user) => {
            if (err || !user) {
              return res.status(400).json({
                message: 'Something went wrong. Try later'
              });
            }

            const updatedFields = {
              password: encyptedPassword,
              resetPasswordLink: ''
            };

            user = _.extend(user, updatedFields);

            user.save((err, result) => {
              if (err) {
                return res.status(400).json({
                  message: 'Error resetting user password'
                });
              }
              res.json({
                message: `Great! Now you can login with your new password`
              });
            });
          }
        );
      });
    }
  }catch(err){
    console.log(err)
    return res.status(400).json({
      message: "Technical Error",
    });
  }
  
};