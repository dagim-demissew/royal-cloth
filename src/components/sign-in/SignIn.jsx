import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user-actions";
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
    const { emailSignInStart } = props;
    console.log(email, password);

    emailSignInStart(email, password );
  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };


  useEffect(() => {
    if (props.currentUser) {
      navigate("/");
    }
  }, [props.currentUser, navigate]);

  const { googelSignInStart } = props;
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
          <Button type="submit" disabled={signIn}>
            Sign In
          </Button>
          <Button
            type="button"
            onClick={googelSignInStart}
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

const mapDispatchToProps = (dispatch) => ({
  googelSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
