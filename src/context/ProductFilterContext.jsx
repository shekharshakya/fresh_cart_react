import { createContext, useContext, useEffect, useReducer } from "react";
import { GlobalProuctContext } from "./ProductContext";
import reducer from "../reducer/ProductFilterReducer";

const ProductFilterContext = createContext();

const initialState = {
  filterData: [],
  allFilterData: [],
};

const ProductFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { productData } = GlobalProuctContext();

  useEffect(() => {
    dispatch({ type: "load Filter Data", payload: productData });
    console.log(productData);
  }, [productData]);

  return (
    <ProductFilterContext.Provider value={state}>
      {children}
    </ProductFilterContext.Provider>
  );
};

const GlobalProuctFilter = () => {
  return useContext(ProductFilterContext);
};

export { ProductFilterContext, ProductFilterProvider, GlobalProuctFilter };
