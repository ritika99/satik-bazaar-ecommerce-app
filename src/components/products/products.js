import { useData } from "../../context/data-context";
import { ProductItem } from "./productItem";
import { SideNav } from "../sidenav/sideNav";
import { Filter} from "../sidenav/filter";

export function Products() {
  const { productList} = useData();

  return (
    <div className="container-inside margin-top">
    <Filter />
    <div className="grid-column-2">
      <SideNav />
      <div className="container container-flex">
        {productList.map((item) => {
          return <ProductItem product={item} key={item.id}/>;
        })}
      </div>
    </div>
    </div>
  );
}
