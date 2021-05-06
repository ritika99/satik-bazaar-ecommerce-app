import { useNavigate } from "react-router";

export function Signup() {
  const navigate = useNavigate();
  return (
    <div className="margin-top">
      <form className="form-box">
        <h2 class="text-centre">Sign up</h2>
        <div className="input-field">
          <input type="email" className="input-text" id="email" required />
          <label className="label-input-text" for="email">
            E-mail
          </label>
        </div>
        <div className="input-field">
          <input type="password" className="input-text" id="password" required />
          <label className="label-input-text" for="password">
            Password
          </label>
        </div>
        <div className="input-field">
          <input type="password" className="input-text" id="repassword" required />
          <label className="label-input-text" for="repassword">
            Re-type Password
          </label>
        </div>
        <button className="btn btn-primary">Sign up</button>
        <button class="btn btn-link" onClick={() => navigate("/login")}>Already have an account?<strong> Login!</strong></button>
      </form>
    </div>
  );
}
