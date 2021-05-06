import { useNavigate } from "react-router";
import imageHolder from "../../assets/image-holder.jpg";

export function Collection({heading, collection}) {
  const navigate = useNavigate();
  return(<div className="container-inside container-flex-column">
  <h3 className="heading-main text-centered">{heading}</h3>
  <div className="container-flex">
    {collection.map((item) => (
      <div className="card-overlay-btn banner box-shadow-hover" key={item}>
        <button
          className="btn btn-outlined btn-sm banner-btn"
          onClick={() => navigate("/products")}
        >
          {item}
        </button>
        <img className="img-square" src={imageHolder} alt="Banner" />
      </div>
    ))}
  </div>
</div>)
}