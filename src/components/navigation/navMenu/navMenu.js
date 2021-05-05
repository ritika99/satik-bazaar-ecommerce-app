import {useData} from "../../../context/data-context";
import "./nav-menu.css";

export function NavMenu() {
  const { data, dispatch } = useData();
  return (
    <div className={data.navToggle ? "nav-menu-btn open" : "nav-menu-btn"} onClick={() => dispatch({type: "TOOGLE_NAV_MENU"})}>
      <div className="nav-menu-burger"></div>
    </div>
  );
}
