import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import useInput from "../../../../hooks/useInput";
import Input from "../../Input";
export default function Login() {
  const [first, setFirst] = useState({ email: "", password: "" });
  const emailValidator = (value) => {
    if (email.length <= 4) {
      return "Invalid email";
    }
    return "";
  };
  const [email, onEmailChange, emailError, onEmailBlur] = useInput("");
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
          <div onClick={() => navigate("SignUp")} className="Margin" id="Sign">
            SIGN UP
          </div>
        </form>
      </div>
    </div>
  );
}
