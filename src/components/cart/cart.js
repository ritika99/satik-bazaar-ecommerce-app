import { useAuth } from "../../context/auth-context";
import { useData } from "../../context/data-context";
import {CartItem} from "./cartItem";
import { EmptyCart } from "./emptyCart";

export function Cart() {
  const { data } = useData();
  const {currUser} = useAuth();

  return (
    <div className="container-inside margin-top">
      {data.cartList.length>0 ? data.cartList.map((item) => {
        return (
          <CartItem cartItem={item} key={item.id}/>
        );
      }): <EmptyCart />}
    </div>
  );
}
