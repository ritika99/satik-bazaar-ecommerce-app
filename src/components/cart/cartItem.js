import { useData } from "../../context/data-context";
import { calculateDiscount } from "../products/calculateDiscount";

export function CartItem({ cartItem }) {
  const { dispatch } = useData();

  const addToWishlistAndRemoveHandler = (cartItem) => {
    !cartItem.inWishlist &&
      dispatch({ type: "ADD_TO_WISHLIST", payload: cartItem });
    dispatch({ type: "REMOVE_FROM_CART", payload: cartItem });
  };

  return (
    <div className="card-horizontal card-dismiss" key={cartItem.id}>
      <div className="card-header">
        <img
          className="card-horizontal-image"
          src={cartItem.image}
          alt="Cart item"
        />
        <span
          className="icon-cross"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: cartItem })
          }
        >
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
      <div className="card-horizontal-description">
        <div className="card-horizontal-text">
          <h3>{cartItem.name}</h3>
          <small>
            MRP:{" "}
            <strong>
              ₹{calculateDiscount(cartItem.price, cartItem.discount)}{" "}
            </strong>
            <span className="text-colored">({cartItem.discount}% off)</span>
          </small>
        </div>
        <div className="card-button">
          <button
            className="btn btn-outlined"
            onClick={() =>
              dispatch({ type: "INCREMENT_COUNT", payload: cartItem })
            }
          >
            <i className="fas fa-plus"></i>
          </button>
          <p className="para-text-md">{cartItem.count}</p>
          <button
            className="btn btn-outlined"
            onClick={() =>
              dispatch({ type: "DECREMENT_COUNT", payload: cartItem })
            }
          >
            <i className="fas fa-minus"></i>
          </button>
          <button
            className="btn btn-primary"
            onClick={() => addToWishlistAndRemoveHandler(cartItem)}
          >
            Move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
