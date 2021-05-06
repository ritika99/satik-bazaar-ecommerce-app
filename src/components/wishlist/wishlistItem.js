import { useData } from "../../context/data-context";
import { calculateDiscount } from "../products/calculateDiscount";

export const WishlistItem = ({ wishlistItem }) => {
  const { dispatch } = useData();

  const addToCartAndRemoveHandler = (wishlistItem) => {
    dispatch({
      type: wishlistItem.inCart ? "INCREMENT_COUNT" : "ADD_TO_CART",
      payload: wishlistItem
    });
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: wishlistItem });
  };

  return (
    <div
      className="card-vertical card-vertical-badge card-dismiss"
      key={wishlistItem.id}
    >
      <div className="card-header">
        <img
          className="card-image"
          src={wishlistItem.image}
          alt={wishlistItem.id}
        />
        <span
          className="icon-cross"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_WISHLIST", payload: wishlistItem })
          }
        >
          <i className="fas fa-times"></i>
        </span>
        {wishlistItem.special ? (
          <span className="card-badge">{wishlistItem.special}</span>
        ) : null}
      </div>
      <div className="card-content">
        <div className="card-text">
          <h3>{wishlistItem.name}</h3>
          <small>
            MRP:{" "}
            <strong>
              ₹{calculateDiscount(wishlistItem.price, wishlistItem.discount)}{" "}
            </strong>
            <span className="text-stricked">₹{wishlistItem.price}</span>
            <span className="text-colored">({wishlistItem.discount}% off)</span>
          </small>
        </div>
        <div className="card-badge-group">
          {wishlistItem.fastDelivery ? (
            <span className="badge badge-outlined badge-round">
              Fast Delivery
            </span>
          ) : null}
          {wishlistItem.offer ? (
            <span className="badge badge-outlined badge-round">
              {wishlistItem.offer}
            </span>
          ) : null}
        </div>
        <div className="card-button">
          <button
            className={wishlistItem.inStock? "btn btn-primary": "btn btn-primary card-inactive"}
            onClick={() => addToCartAndRemoveHandler(wishlistItem)}
          >
            {wishlistItem.inStock ? "Move to cart" : "Out of stock"}
          </button>
        </div>
      </div>
    </div>
  );
};
