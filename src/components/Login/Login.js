import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import useFirebase from "../../hooks/useFirebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
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
            value="Login"
            className="btn btn-block create-account"
          />
        </div>
        <br />
      </form>
      <div className="social-media">
        <h5>Sign up with social media</h5>
        <div className="social-icons">
          <Link to="/">
            <i className="icon-social-facebook" title="Facebook"></i>
          </Link>
          <Link to="">
            <button
              onClick={handleGoogleSignIn}
              className="icon-social-google border-0"
              title="Google"
            ></button>
          </Link>
          <Link to="#">
            <i className="icon-social-twitter" title="Twitter"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
