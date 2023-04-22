import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { ROUTES } from "../../../../routes/data";
import useInput from "../../../../hooks/useInput";
import Input from "../../Input";


export default function Login() {
  const [first, setFirst] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    setFirst({ ...first, [e.target.name]: e.target.name });
  };

  const emailValidator = (value) => {
    if (email.length <= 4) {
      return "Invalid email";
    }
    return "";
  };
  const [email, onEmailChange, emailError, onEmailBlur] = useInput("", (val) =>
    emailValidator(val)
  );

  const passwordValidator = (value) => {
    if (password.length <= 8) {
      return "Invalid password";
    }
  };
  const [password, onPasswordChange, passwordError, onPasswordBlur] = useInput(
    "",
    (val) => passwordValidator(val)
  );

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.head}`}>
        <h2>To continue Login into our web</h2>
      </div>
      <div className={`${styles.form}`}>
        <form>
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
          <button type="submit" className={`${styles.login}`}>
            LOGIN
          </button>
          <hr className={`${styles.Margin}`}></hr>
          <div className={`${styles.doHaveAcc}`}>Don't have an account</div>
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
