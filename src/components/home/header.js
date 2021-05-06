import { useNavigate } from "react-router";
import bannerHomeImage from "../../assets/bannerHome.jpg";


export function Header() {
  const navigate = useNavigate();
  return (
    <div className="banner">
        <button
          className="btn btn-outlined btn-lg banner-btn"
          onClick={() => navigate("/products")}
        >
          Shop now
        </button>
        <button
          className="btn btn-outlined btn-rg banner-btn"
          onClick={() => navigate("/products")}
        >
          Shop now
        </button>
        <img src={bannerHomeImage} alt="Banner" />
      </div>
  )

}