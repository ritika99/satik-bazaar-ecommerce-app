import { useNavigate } from "react-router";

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="margin-top">
      <form className="form-box">
        <h2 class="text-centre">Login</h2>
        <div className="input-field">
          <input type="email" className="input-text" id="email" required />
          <label className="label-input-text" for="email">
            E-mail
          </label>
        </div>
        <div className="input-field">
          <input
            type="password"
            className="input-text"
            id="password"
            required
          />
          <label className="label-input-text" for="password">
            Password
          </label>
        </div>
        <button className="btn btn-primary">Login</button>
        <button class="btn btn-link" onClick={() => navigate("/signup")}>
          Don't have an account?<strong> Sign up!</strong>
        </button>
        <button
          class="btn btn-link"
          onClick={() => navigate("/password/forgot")}
        >
          Forgot Password?
        </button>
      </form>
    </div>
  );
}
