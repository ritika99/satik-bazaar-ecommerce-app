import { Login } from "./login";
import { Signup } from "./singup";
import { ForgotPassword } from "./forgotPassword";
import profileImage from "../../assets/profileImage.svg";
import { useNavigate } from "react-router";

export function Profile() {
  const navigate = useNavigate();
  return (
    <div className="container-inside margin-top container-flex-column">
      <img className="img-md" src={profileImage} alt="Profile" />
      <h1 className="text-colored">Hi, Guest!</h1>
      <button className="btn btn-primary" onClick={() => navigate("/products")}>
        Shop Now
      </button>
    </div>
  );
}
