import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebaseUtil.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { connect } from "react-redux";
import FormInput from "../form-input/FormInput";
import Button from "../custom-button/Button";
import "./signIn.scss";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error("Error during sign in:", error.message, error.code);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSignInWithGoogle = async () => {
    if (signIn) return;
    setSignIn(true);
    try {
      const result = await signInWithGoogle();
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setSignIn(false);
    }
  };

  useEffect(() => {
    if (props.currentUser) {
      console.log("popo");
      navigate("/");
    }
  }, [props.currentUser, navigate]);
  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          type="email"
          handleChange={handleChange}
          value={email}
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          handleChange={handleChange}
          value={password}
        />
        <div className="sign-in-buttons">
          <Button type="submit">Sign In</Button>
          <Button
            onClick={handleSignInWithGoogle}
            disabled={signIn}
            isGoogleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(SignIn);
