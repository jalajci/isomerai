import React from "react";
import { Grid, Paper, Link } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./login.scss";
import MyButton from "../../themeComponents/button";
import InputBox from "../../themeComponents/formTypes";

const Login = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string().min(6).required("Password must be atleast of 6 characters"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    props.resetForm();
  };
  const emailProps = {
      name:"email",
      type:"text",
      className:"inputStyle",
      label:"Email",
      error: "email"
  }
  const passwordProps = {
      name: "password",
      type: "password",
      className:"inputStyle",
      label:"Password",
      error: "password"
  }
  const buttonProps = {
      type: "submit",
      className: "btnStyle",
      color: "primary"
  }
  const textAreaProps = {
    label: "empty textarea"
  }
  return (
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid className="upperGridStyle">Space for LOGO</Grid>
        <h2>Login</h2>
        <p>Use your credentials to login below.</p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <InputBox emailProps={emailProps}/>
              <InputBox passwordProps={passwordProps}/>
              <Grid className="lowerGridStyle">
                <Link href="#" underline="none" className="linkStyle">
                  Forgot Password?
                </Link>
                <MyButton attributes={buttonProps} />
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Login;
