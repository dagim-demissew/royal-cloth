import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { emailSIgnUpStart } from "../../redux/user/user-actions";
import FormInput from "../form-input/FormInput";
import Button from "../custom-button/Button";
import "./signUp.scss";

const SignUp = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("PassWords don't match!");
      return;
    }
    try {
      console.log(displayName, email, password);
      dispatch(emailSIgnUpStart({displayName, email, password}));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account.</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
