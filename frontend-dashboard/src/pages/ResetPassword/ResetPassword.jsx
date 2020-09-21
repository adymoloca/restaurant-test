import React, { useState } from "react";
import "./ResetPassword.css";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import { createBrowserHistory } from "history";
import Axios from "axios";
import data from "../../data/constants";
import { LogoRestaurantIcon, GreyMailIcon } from "../../utils/iconsFactory";

const ResetPasswordPage = (props) => {
  const [email, setEmail] = useState("");
  const history = createBrowserHistory();

  if (props.token) {
    history.push("/");
    window.location.reload();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter an email");
      return;
    }

    Axios.post(data.baseUrl + "api/admin/login", {
      email,
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

  return (
    <div className="linear-background">
      <div
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <LogoRestaurantIcon />
        <div className="login-title mb-5">Forgot Password?</div>
        <div className="login-card my-5">
          <div className=" d-flex  align-items-center input-forms">
            <InputGroup className="mb-3 login-input mt-5">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <GreyMailIcon/>
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
          </div>
          <div className=" d-flex align-items-center justify-content-center mt-5">
            <button
              className="reset-password-button"
              style={{ marginBottom: "20px" }}
              onClick={handleSubmit}
            >
              Reset Password
          </button>
          </div>
        </div>
        <a href="/login" className="login mb-5">
          Back to sign in
      </a>
        <div className="footer-text">© 2020 Restaurant</div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;