import { useData } from "../../context/data-context";
import "./sideNav.css";

export function SideNav() {
  const { data, dispatch } = useData();
  return (
    <div className={data.navSidebarToggle ? "nav-sidebar open" : "nav-sidebar"}>
      <ul className="list">
        <li>
          <h4 className="sidebar-heading">Sort By</h4>
        </li>
        <li>
          <label className="para-text-md">
            <input
              type="radio"
              className="input-radio"
              name="sortBy"
              checked={
                data.listManipulation.sortBy &&
                data.listManipulation.sortBy === "SORT_PRICE_DESC"
              }
              onChange={() => {
                dispatch({ type: "SORT_BY", payload: "SORT_PRICE_DESC" });
              }}
            />
            Price: High To low
          </label>
        </li>
        <li>
          <label className="para-text-md">
            <input
              type="radio"
              className="input-radio"
              name="sortBy"
              checked={
                data.listManipulation.sortBy &&
                data.listManipulation.sortBy === "SORT_PRICE_ASC"
              }
              onChange={() => {
                dispatch({ type: "SORT_BY", payload: "SORT_PRICE_ASC" });
              }}
            />
            Price: Low To High
          </label>
        </li>
        <li>
          <h4 className="sidebar-heading">Availabilty</h4>
        </li>
        <li>
          <label className="para-text-md">
            <input
              type="checkbox"
              checked={data.listManipulation.outOfStock}
              onChange={() => {
                dispatch({ type: "INCLUDE_OUT_OF_STOCK" });
              }}
            />
            Include out of stock
          </label>
        </li>
        <li>
          <label className="para-text-md">
            <input
              type="checkbox"
              checked={data.listManipulation.fastDelivery}
              onChange={() => {
                dispatch({ type: "FAST_DELIVERY" });
              }}
            />
            Fast delivery
          </label>
        </li>
      </ul>
    </div>
  );
}
