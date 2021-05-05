import { useData } from "../../context/data-context";
import { WishlistItem} from "./wishlistItem";
import { EmptyWishlist} from "./emptyWishlist";

export function Wishlist() {
  const { data } = useData();

  return (
    <div className="container-inside margin-top container-flex">
      {data.wishList.length>0 ? data.wishList.map((item) => {
        return (
            <WishlistItem wishlistItem={item} key={item.id}/>
        );
      }): <EmptyWishlist />}
    </div>
  );
}
