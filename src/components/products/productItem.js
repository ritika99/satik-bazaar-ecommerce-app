import { useNavigate } from "react-router";
import { useAuth } from "../../context/auth-context";
import { useData } from "../../context/data-context";
import { calculateDiscount } from "./calculateDiscount";

export function ProductItem({ product }) {
  const { dispatch } = useData();
  const { isUserLoggedIn } = useAuth();
  const navigate = useNavigate();

  const addToWishListHandler = (product) => {
    isUserLoggedIn
      ? dispatch({
          type: product.inWishlist ? "REMOVE_FROM_WISHLIST" : "ADD_TO_WISHLIST",
          payload: product
        })
      : navigate("/login");
  };

  const addToCartHandler = (product) => {
    isUserLoggedIn
      ? product.inCart
        ? navigate("/cart")
        : dispatch({ type: "ADD_TO_CART", payload: product })
      : navigate("/login");
  };

  return (
    <div className="card-vertical card-vertical-badge" key={product.id}>
      <div className="card-header">
        <img className="card-image" src={product.image} alt={product.id} />
        {product.special ? (
          <span className="card-badge">{product.special}</span>
        ) : null}
      </div>
      <div className="card-content">
        <div className="card-text">
          <h3>{product.name}</h3>
          <small>
            MRP:{" "}
            <strong>
              ₹{calculateDiscount(product.price, product.discount)}{" "}
            </strong>
            <span className="text-stricked">₹{product.price}</span>
            <span className="text-colored">({product.discount}% off)</span>
          </small>
        </div>
        <div className="card-badge-group">
          {product.fastDelivery ? (
            <span className="badge badge-outlined badge-round">
              Fast Delivery
            </span>
          ) : null}
          {product.offer ? (
            <span className="badge badge-outlined badge-round">
              {product.offer}
            </span>
          ) : null}
        </div>
        <div className="card-button">
          <button
            className={
              product.inWishlist
                ? "btn btn-text-primary btn-solid"
                : "btn btn-text-primary"
            }
            onClick={() => addToWishListHandler(product)}
          >
            <i className="far fa-heart"></i>
          </button>
          <button
            className={product.inStock? "btn btn-primary": "btn btn-primary card-inactive"}
            onClick={() => addToCartHandler(product)}
          >
            {product.inStock ? (product.inCart ? "Go to cart" : "Add to cart") : "Out of stock"}
          </button>
        </div>
      </div>
    </div>
  );
}
