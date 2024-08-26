import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import "./authPage.scss";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;
