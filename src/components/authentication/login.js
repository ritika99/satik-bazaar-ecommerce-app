import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../context/auth-context";

export function Login() {
  const {
    isUserLoggedIn,
    loginUserWithCredentials
  } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginClickHandler = (e) => {
    e.preventDefault();
    loginUserWithCredentials(email, password);
  };

  if (isUserLoggedIn) {
    navigate(state?.from ? state.from : "/");
  }

  return (
    <div className="margin-top">
      <form className="form-box" onSubmit={loginClickHandler}>
        <h2 className="text-centre">Login</h2>
        <div className="input-field">
          <input
            type="email"
            className="input-text"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label-input-text" htmlFor="email">
            E-mail
          </label>
        </div>
        <div className="input-field">
          <input
            type="password"
            className="input-text"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="label-input-text" htmlFor="password">
            Password
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
        <button className="btn btn-link" onClick={() => navigate("/signup")}>
          Don't have an account?<strong> Sign up!</strong>
        </button>
        <button
          className="btn btn-link"
          onClick={() => navigate("/password/forgot")}
        >
          Forgot Password?
        </button>
      </form>
    </div>
  );
}
