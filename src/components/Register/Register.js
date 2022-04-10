import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="registration-form">
      <form>
        <div className="form-icon">
          <span>
            <i className="icon icon-user"></i>
          </span>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            id="username"
            placeholder="User Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control item"
            id="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Register"
            className="btn btn-block create-account"
          />
        </div>
        <br />
        <div className="form group">
          <button className="btn btn-danger">Forget Password</button>
        </div>
      </form>
      <div className="social-media">
        <h5>Sign up with social media</h5>
        <div className="social-icons">
          <Link to="/">
            <button
              className="icon-social-facebook border-0"
              title="Facebook"
            ></button>
          </Link>
          <Link to="/home">
            <button
              className="icon-social-google border-0"
              title="Google"
            ></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
