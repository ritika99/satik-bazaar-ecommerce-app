import { useNavigate } from "react-router";
import emptyWishlistImage from "../../assets/emptyWishlist.svg";

export function EmptyWishlist() {
  const navigate = useNavigate();
  return(
    <div className="container-inside margin-top container-flex-column">
      <img className="img-md" src={emptyWishlistImage} alt="Empty cart"/>
      <h1 className="text-colored">Wishlist is empty!</h1>
      <button className="btn btn-primary" onClick={() => navigate("/products")}>Add now</button>
    </div>
  )
}