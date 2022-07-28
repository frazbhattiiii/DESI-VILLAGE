import * as React from "react";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/userSlice/userActions";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import GreenButton from "../Buttons/GreenButton";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import KeyIcon from "@mui/icons-material/Key";

const StyledButton = styled(Button);

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

export default function ProfileForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showNPassword, setShowNPassword] = useState(false);
  const dispatch = useDispatch();
  const { error, register } = useSelector((state) => state.user);

  const [noEdit, setNoEdit] = useState(true);
  const [noEditPassword, setNoEditPassword] = useState(true);

  const ProfileSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      npassword: "",
    },
    validationSchema: ProfileSchema,
    onSubmit: (e) => {
      //  toast ( `⌚ Email is sending kindly wait...` );
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: "bold",
          mx: 5,
          fontFamily: "Arial",
          color: "#1ac073",
        }}
      >
        Personal Infromation
        <IconButton
          aria-label="edit"
          onClick={() => {
            noEdit ? setNoEdit(false) : setNoEdit(true);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="edit"
          onClick={() => {
            noEditPassword ? setNoEditPassword(false) : setNoEditPassword(true);
          }}
        >
          <KeyIcon />
        </IconButton>
      </Typography>

      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack
            spacing={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{ width: "60%" }}
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <TextField
                label="Your name"
                fullWidth
                disabled={noEdit}
                {...getFieldProps("name")}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
            </Stack>

            <Stack
              sx={{ width: "60%" }}
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <TextField
                label="Contact"
                disabled={noEdit}
                fullWidth
                {...getFieldProps("contact")}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
            </Stack>

            <Stack
              spacing={3}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              animate={animate}
              sx={{ width: "60%" }}
            >
              <TextField
                fullWidth
                disabled={true}
                type="email"
                label="Email address"
                {...getFieldProps("email")}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                disabled={noEditPassword}
                type={showPassword ? "text" : "password"}
                label="Current Password"
                {...getFieldProps("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <Icon
                          icon={
                            showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />

              <TextField
                disabled={noEditPassword}
                type={showNPassword ? "text" : "password"}
                label="New Password"
                {...getFieldProps("npassword")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowNPassword((prev) => !prev)}
                      >
                        <Icon
                          icon={
                            showNPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
            </Stack>

            <Stack
              sx={{ width: "60%" }}
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <TextField
                disabled={noEdit}
                multiline
                rows={4}
                label="Address"
                fullWidth
                {...getFieldProps("contact")}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
            </Stack>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={animate}
            >
              <GreenButton loading={isSubmitting} text="Update Profile" />
            </Box>
          </Stack>
        </Form>
      </FormikProvider>
    </>
  );
}
