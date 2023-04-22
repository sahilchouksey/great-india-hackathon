import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { ROUTES } from "../../../../routes/data";

export default function Login() {
  const [first, setFirst] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    setFirst({ ...first, [e.target.name]: e.target.name });
  };
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.head}`}>
        <h2>To continue Login into our web</h2>
      </div>
      <div>
        <form>
          <div className={`${styles.Margin}`} id="Mail">
            <label className="label">Email Address</label>
            <input
              className={`${styles.input}`}
              type="email"
              name="email"
              value={first.email}
              onChange={onChange}
              placeholder="Email address"
            ></input>
          </div>
          <div className={`${styles.Margin}`} id="Mail">
            <label className="label">Password</label>
            <input
              className={`${styles.input}`}
              name="password"
              value={first.password}
              onChange={onChange}
              placeholder="Password"
            ></input>
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
