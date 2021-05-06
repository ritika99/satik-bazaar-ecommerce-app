import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";
import { NavMenu } from "./navMenu/navMenu";
import logo from "../../assets/satik-logo.png";
import { useAuth } from "../../context/auth-context";

export function Navigation() {
  const { data, dispatch } = useData();
  const {currUser} = useAuth();
  return (
    <nav className="nav nav-fixed">
      <div className="nav-container container-inside">
        <div className="nav-left">
          <div className="nav-brand">
            <NavMenu />
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <div
            className={data.navToggle ? "nav-menu open" : "nav-menu"}
            onClick={() => dispatch({ type: "TOOGLE_NAV_MENU" })}
          >
            <ul
              className={data.navToggle ? "list" : "list list-inline"}
              onClick={() => dispatch({ type: "TOOGLE_NAV_MENU" })}
            >
              <li className="nav-pill colored-list inline-list">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-pill colored-list inline-list">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-right">
          <ul className="list list-inline">
            <li className="nav-pill colored-list inline-list">
              <div className="icon-badge-notification">
                <Link to="wishlist" className="nav-link">
                  <i className="fas fa-heart"></i>
                </Link>
                {data.wishList.length > 0 ? (
                  <span className="badge-status notification">
                    {data.wishList.length}
                  </span>
                ) : null}
              </div>
            </li>
            <li className="nav-pill colored-list inline-list">
              <div className="icon-badge-notification">
                <Link to="cart" className="nav-link">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
                {data.cartList.length > 0 ? (
                  <span className="badge-status notification">
                    {data.cartList.length}
                  </span>
                ) : null}
              </div>
            </li>
            <li className="nav-pill colored-list inline-list">
              <span className="nav-icon nav-pill">
                <Link to="profile" className="nav-link">
                  <i className="fas fa-user-circle"></i>
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
