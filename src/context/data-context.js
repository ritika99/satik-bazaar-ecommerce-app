import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { reducer } from "./data-reducer";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, {
    cartList: [],
    wishList: [],
    productList: [],
    listManipulation: {
      sortBy: null,
      fastDelivery: false,
      outOfStock: true,
      bestSeller: false
    },
    navToggle: false,
    navSidebarToggle: false
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/products");
        dispatch({ type: "LOAD_PRODUCT_LIST", payload: data.products });
      } catch (error) {console.log(error)}
    })();
  }, []);

  const getSortedData = (productList, sortby) => {
    if (sortby === "SORT_PRICE_ASC")
      return productList.sort((a, b) => a.price - b.price);
    else if (sortby === "SORT_PRICE_DESC")
      return productList.sort((a, b) => b.price - a.price);
    return productList;
  };

  function getFilteredData(productList, filterType) {
      return productList.filter(item => filterType.fastDelivery ? item.fastDelivery : true).filter(item => filterType.outOfStock ? true : item.inStock);
  }

  const sortedData = getSortedData(data.productList, data.listManipulation.sortBy);

  const filteredData = getFilteredData(sortedData, data.listManipulation
  );

  return (
    <DataContext.Provider value={{ data, productList: filteredData, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
