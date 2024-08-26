import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebaseUtil.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import FormInput from "../form-input/FormInput";
import Button from "../custom-button/Button";
import "./signIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      signIn: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSignInWithGoogle = async (e) => {
    if (this.state.signIn) return;
    this.setState({ signIn: true });
    console.log(this.state.signIn);
    try {
      const result = await signInWithGoogle();
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ signIn: false });
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}
          />
          <div className="sign-in-buttons">
            <Button type="submit">Sign In</Button>
            <Button
              onClick={this.handleSignInWithGoogle}
              disabled={this.state.signIn}
              isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
