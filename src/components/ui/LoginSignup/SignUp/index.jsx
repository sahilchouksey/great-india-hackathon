import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.scss";

import { ROUTES } from "../../../../routes/data";
import useInput from "../../../../hooks/useInput";
import Input from "../../Input";

export default function SignUp() {
  const [first, setFirst] = useState({ Name: "", email: "", password: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    setFirst({ ...first, [e.target.name]: e.target.name });
  };

  const nameValidator = (value) => {
    if (value <= 1) {
      return "Invalid username";
    }
    return "";
  };
  const [Name, onNameChange, userNameError, onNameBlur] = useInput("", (val) =>
    nameValidator(val)
  );

  const emailValidator = (value) => {
    if (value.length <= 4) {
      return "Invalid email";
    }
    return "";
  };
  const [email, onEmailChange, emailError, onEmailBlur] = useInput("", (val) =>
    emailValidator(val)
  );

  const passwordValidator = (value) => {
    if (value.length <= 8) {
      return "Invalid password";
    }
    return "";
  };
  const [password, onPasswordChange, passwordError, onPasswordBlur] = useInput(
    "",
    (val) => passwordValidator(val)
  );

  const confPasswordValidator = (value) => {
    if (value.length <= 8) {
      return "Invalid password";
    }
    return "";
  };
  const [conf_password, onconfPasswordChange, PasswordError, onpasswordBlur] =
    useInput("", (val) => confPasswordValidator(val));
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.head}`}>
        <h2>SignUp our Web Page</h2>
      </div>
      <div className={`${styles.form}`}>
        <form>
          <div className={`${styles.User_name}`}>
            <Input
              label="Enter Your Name"
              labelClasses={`${styles.User_name_label}`}
              className={styles["in_userName"]}
              type="text"
              name="User Name"
              value={Name}
              onChange={onNameChange}
              placeholder="Enter your name"
            ></Input>
            {userNameError}
          </div>
          <div className={`${styles.mail}`}>
            <Input
              label="Email Address"
              labelClasses={`${styles.email_label}`}
              className={styles["in_mail"]}
              type="email"
              name="email"
              value={email}
              onChange={onEmailChange}
              placeholder="Email address"
            ></Input>
            {emailError}
          </div>
          <div className={`${styles.password}`}>
            <Input
              label="Enter Password"
              labelClasses={`${styles.password_label}`}
              className={styles["in_password"]}
              type="password"
              name="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="Enter Password"
            ></Input>
            {passwordError}
          </div>

          <div className={`${styles.conf_password}`}>
            <Input
              label="Confirm Password"
              labelClasses={`${styles.conf_password_label}`}
              className={styles["in_conf_password"]}
              type="password"
              name="password"
              value={conf_password}
              onChange={onconfPasswordChange}
              placeholder="Confirm Your Password"
            ></Input>
            {PasswordError}
          </div>
          <div
            onClick={() => navigate(ROUTES.register)}
            className={`${styles.signUp}`}
          >
            SIGN UP
          </div>
        </form>
      </div>
    </div>
  );
}
