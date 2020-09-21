import React, { useState } from "react";
import "./Login.css";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import { createBrowserHistory } from "history";
import Axios from "axios";
import data from "../../data/constants";
import { LogoRestaurantIcon, MailIcon, LockIcon } from "../../utils/iconsFactory";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = createBrowserHistory();

  if (props.token) {
    history.push("/");
    window.location.reload();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    Axios.post(data.baseUrl + "api/admin/users/login", {
      email,
      password,
    })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.admin);

        props.setToken(res.data.token);
        props.setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };

  const changeEmail = (e) => {
    const email = e.target.value;

    setEmail(email);
  };

  const changePassword = (e) => {
    const password = e.target.value;

    setPassword(password);
  };

  return (
    <div className="linear-background">
      <div
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <LogoRestaurantIcon />
        <div className="login-title mb-5">LOGIN</div>
        <div className="login-card my-5">
          <div className=" d-flex  align-items-center input-forms">
            <InputGroup className="mb-3 login-input mt-5">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <MailIcon/>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={changeEmail}
                type="email"
                name="email"
                placeholder="email"
                required
                //className="form-control"
                aria-label="Email"
                className="login-input"
              />
            </InputGroup>
            <InputGroup className="mb-3 login-input">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <LockIcon/>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Wachtwoord"
                className="login-input"
                onChange={changePassword}
                type="password"
                placeholder="placeholder"
                name="password"
                required
              />
            </InputGroup>
          </div>
          <div className="d-flex">
            <input type="checkbox" className="input-checkbox ml-5 mt-3" />
            <div className="checkbox-text mt-3 ml-3">Keep me</div>
          </div>
          <div className=" d-flex align-items-center justify-content-center mt-5">
            <button
              className="login-button"
              style={{ marginBottom: "20px" }}
              onClick={handleSubmit}
            >
              Login
          </button>
          </div>
        </div>
        <a href="/reset_password" className="password-forgot mb-5">
          Forgot password?
      </a>
        <div className="footer-text">© 2020 Restaurant</div>
      </div>
    </div>
  );
};
export default LoginPage;
