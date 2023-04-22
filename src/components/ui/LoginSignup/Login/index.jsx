import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ROUTES } from "../../../../routes/data";

export default function Login() {
  const [first, setFirst] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    setFirst({ ...first, [e.target.name]: e.target.name });
  };
  return (
    <div className="container">
      <div className="head">
        <h2>To continue Login into our web</h2>
      </div>
      <div>
        <form>
          <div className="Margin" id="Mail">
            <label className="label">Email Address</label>
            <input
              className="input"
              type="email"
              name="email"
              value={first.email}
              onChange={onChange}
              placeholder="Email address"
            ></input>
          </div>
          <div className="Margin" id="Mail">
            <label className="label">Password</label>
            <input
              className="input"
              name="password"
              value={first.password}
              onChange={onChange}
              placeholder="Password"
            ></input>
          </div>
          <button type="submit" className="Margin" id="Log">
            LOGIN
          </button>
          <hr className="Margin"></hr>
          <div className="Margin" id="">
            Don't have an account
          </div>
          <div
            onClick={() => navigate(ROUTES.register)}
            className="Margin"
            id="Sign"
          >
            SIGN UP
          </div>
        </form>
      </div>
    </div>
  );
}
