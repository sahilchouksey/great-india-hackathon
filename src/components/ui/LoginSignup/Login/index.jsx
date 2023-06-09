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
  const [password, onPasswordChange, passwordError] = useInput("", (val) =>
    passwordValidator(val)
  );

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.head}`}>
        <h2>To continue Login into our web</h2>
      </div>
      <div>
        <form>
          <div className={`${styles.Margin}`} id="Mail">
            {emailError}
            <Input
              label="Email Address"
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={onEmailChange}
              placeholder="Email address"
            ></Input>
          </div>
          <div className={`${styles.Margin}`} id="Mail">
            {passwordError}
            <Input
              label="Enter Password"
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="Enter Password"
            ></Input>
            {/* <label className="label">Password</label>
            <input
              className={`${styles.input}`}
              name="password"
              value={first.password}
              onChange={onChange}
              placeholder="Password"
            ></input> */}
          </div>
          <button type="submit" className={`${styles.Margin}`} id="Log">
            LOGIN
          </button>
          <hr className={`${styles.Margin}`}></hr>
          <div className={`${styles.Margin}`} id="">
            Don't have an account
          </div>
          <div
            onClick={() => navigate(ROUTES.register)}
            className={`${styles.Margin}`}
            id="Sign"
          >
            SIGN UP
          </div>
        </form>
      </div>
    </div>
  );
}
