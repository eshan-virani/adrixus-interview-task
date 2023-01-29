import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Form,
  Input,
  LoginHeader,
  Label,
  InputDiv,
  ForgotPass,
  LoginButton,
  BottomContent,
  ErrorMsg,
} from "./styles";

const SIGN_IN = gql`
  mutation SigninUser($login: signin) {
    SignIn(logindata: $login) {
      authtoken
      user {
        name
      }
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [UserSignIn] = useMutation(SIGN_IN, {
    onError(error) {
      setErrorMsg(error.message);
    },
    onCompleted(data) {
      setTimeout(() => {
        localStorage.setItem("authtoken", data.SignIn.authtoken);
        localStorage.setItem("userName", data.SignIn.user.name);
        navigate("/home");
      }, 2000);
    },
  });

  const login = (e) => {
    e.preventDefault();
    UserSignIn({
      variables: {
        login: loginData,
      },
    });
  };
  return (
    <Card>
      <LoginHeader>Log in</LoginHeader>
      <ErrorMsg>{errorMsg}</ErrorMsg>
      <Form onSubmit={login}>
        <InputDiv>
          <Label>Email</Label>
          <Input
            placeholder="Name"
            name="email"
            type="email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          ></Input>
        </InputDiv>
        <InputDiv>
          <Label>Password</Label>
          <Input
            placeholder="Name"
            name="password"
            type="password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          ></Input>
          <ForgotPass>Forgot Password ?</ForgotPass>
        </InputDiv>
        <InputDiv>
          <LoginButton>Log in</LoginButton>
        </InputDiv>
      </Form>
      <BottomContent>
        Don’t have an account? <Link to="/register"> Register</Link>{" "}
      </BottomContent>
    </Card>
  );
};

export default Login;
