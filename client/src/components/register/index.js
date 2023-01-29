import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Form,
  Input,
  LoginHeader,
  Label,
  InputDiv,
  LoginButton,
  BottomContent,
  ErrorMsg,
} from "./styles";
import { useMutation, gql } from "@apollo/client";

const SIGN_UP = gql`
  mutation SignupUser($newdata: signup) {
    token: SignupUser(signupdata: $newdata) {
      authtoken
    }
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [userSignUp, { loading }] = useMutation(SIGN_UP, {
    onError(error) {
      setErrorMsg(error.message);
    },
    onCompleted(data) {
      setTimeout(() => {
        localStorage.setItem("authtoken", data.token.authtoken);
        localStorage.setItem("userName", registerData.name);
        navigate("/home");
      }, 2000);
    },
  });

  const signup = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPass) {
      setErrorMsg("Password and Confirmed oassword must be same!");
    } else {
      userSignUp({
        variables: {
          newdata: {
            email: registerData.email,
            name: registerData.name,
            password: registerData.password,
          },
        },
      });
    }
  };

  return (
    <Card>
      <LoginHeader>Registration</LoginHeader>
      <ErrorMsg>{errorMsg}</ErrorMsg>

      <Form onSubmit={signup}>
        <InputDiv>
          <Label>Name</Label>
          <Input
            placeholder="Enter Name"
            name="name"
            type="text"
            onChange={(e) =>
              setRegisterData({ ...registerData, name: e.target.value })
            }
          ></Input>
        </InputDiv>
        <InputDiv>
          <Label>Email</Label>
          <Input
            placeholder="Enter Email"
            type="email"
            name="email"
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          ></Input>
        </InputDiv>
        <InputDiv>
          <Label>Password</Label>
          <Input
            placeholder="Enter Password"
            name="password"
            type="password"
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          ></Input>
        </InputDiv>
        <InputDiv>
          <Label>Confirm Password</Label>
          <Input
            placeholder="Enter Password"
            name="confirmPass"
            type="password"
            onChange={(e) =>
              setRegisterData({ ...registerData, confirmPass: e.target.value })
            }
          ></Input>
        </InputDiv>

        <InputDiv>
          <LoginButton>Sign up</LoginButton>
        </InputDiv>
      </Form>
      <BottomContent>
        Already have an account? <Link to="/login"> Login</Link>{" "}
      </BottomContent>
    </Card>
  );
};

export default Register;
