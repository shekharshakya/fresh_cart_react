import { createContext, useContext, useEffect, useReducer } from "react";
import { GlobalProuctContext } from "./ProductContext";
import reducer from "../reducer/ProductFilterReducer";

const ProductFilterContext = createContext();

const initialState = {
  filterData: [],
  allFilterData: [],
  selectFilterValue: "",
  selectedFilterData: [],
};

const ProductFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { productData } = GlobalProuctContext();

  const SelectValue = () => {
    dispatch({ type: "select value" });
  };

  useEffect(() => {
    dispatch({ type: "load Filter Data", payload: productData });
  }, [productData]);

  useEffect(() => {
    dispatch({ type: "Selected Value Filter Data", payload: productData });
  }, [state.selectFilterValue]);

  return (
    <ProductFilterContext.Provider value={{ ...state, SelectValue }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

const GlobalProuctFilter = () => {
  return useContext(ProductFilterContext);
};

export { ProductFilterContext, ProductFilterProvider, GlobalProuctFilter };
