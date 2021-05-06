import { useData } from "../../context/data-context";
import "./filter.css";

export function Filter() {
  const {data, dispatch} = useData();
  console.log(data.navSidebarToggle);
  return (
    <div className="container-filter">
      <button
        className={data.navSidebarToggle ? "btn btn-primary" : "btn btn-outlined"}
        onClick={() => dispatch({ type: "TOOGLE_NAV_SIDEBAR_MENU" })}
      >
        <i className="fas fa-filter"></i>
        <span> Filter</span>
      </button>
    </div>
  );
}
