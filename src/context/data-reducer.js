export function reducer(state, action) {
  switch (action.type) {
    case "LOAD_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload.map((item) => ({
          ...item,
          inCart: false,
          inWishlist: false,
          count: 0
        }))
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: [
          ...state.wishList,
          ...state.productList
            .filter((item) => item._id === action.payload._id)
            .map((item) => ({ ...item, inWishlist: true }))
        ],
        productList: state.productList.map((item) =>
          item._id === action.payload._id ? { ...item, inWishlist: true } : item
        ),
        cartList: state.cartList.map((item) =>
          item._id === action.payload._id ? { ...item, inWishlist: true } : item
        )
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item._id !== action.payload._id
        ),
        productList: state.productList.map((item) =>
          item._id === action.payload._id ? { ...item, inWishlist: false } : item
        ),
        cartList: state.cartList.map((item) =>
          item._id === action.payload._id ? { ...item, inWishlist: false } : item
        )
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cartList: [
          ...state.cartList,
          ...state.productList
            .filter((item) => item._id === action.payload._id)
            .map((item) => ({ ...item, inCart: true, count: 1 }))
        ],
        productList: state.productList.map((item) =>
          item._id === action.payload._id ? { ...item, inCart: true } : item
        ),
        wishList: state.wishList.map((item) =>
          item._id === action.payload._id ? { ...item, inCart: true } : item
        )
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: state.cartList.filter(
          (item) => item._id !== action.payload._id
        ),
        productList: state.productList.map((item) =>
          item._id === action.payload._id ? { ...item, inCart: false } : item
        ),
        wishList: state.wishList.map((item) =>
          item._id === action.payload._id ? { ...item, inCart: false } : item
        )
      };

    case "INCREMENT_COUNT":
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item._id === action.payload._id
            ? { ...item, count: item.count + 1 }
            : item
        )
      };

    case "DECREMENT_COUNT":
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item._id === action.payload._id
            ? { ...item, count: item.count > 1 ? item.count - 1 : item.count }
            : item
        )
      };

    case "SORT_BY":
      return {
        ...state,
        listManipulation: { ...state.listManipulation, sortBy: action.payload }
      };

    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        listManipulation: {
          ...state.listManipulation,
          outOfStock: !state.listManipulation.outOfStock
        }
      };

    case "FAST_DELIVERY":
      return {
        ...state,
        listManipulation: {
          ...state.listManipulation,
          fastDelivery: !state.listManipulation.fastDelivery
        }
      };

    case "TOOGLE_NAV_MENU":
      return {
        ...state,
        navToggle: !state.navToggle
      };

    case "TOOGLE_NAV_S_IDEBAR_MENU":
      return {
        ...state,
        navS_idebarToggle: !state.navS_idebarToggle
      };

    default:
      return state;
  }
}
