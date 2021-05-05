import { useNavigate } from "react-router";
import emptyCartImage from "../../assets/emptyCart.svg";

export function EmptyCart() {
  const navigate = useNavigate();
  return(
    <div className="container-inside margin-top container-flex-column">
      <img className="img-md" src={emptyCartImage} alt="Empty cart"/>
      <h1 className="text-colored">Cart is empty!</h1>
      <button className="btn btn-primary" onClick={() => navigate("/products")}>Shop Now</button>
    </div>
  )
}