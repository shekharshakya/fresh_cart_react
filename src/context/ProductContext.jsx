import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";
import axios from "axios";

const ProductContext = createContext();

const API = "https://dummyjson.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  category: [],
  productData: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const ProductData = async (url) => {
    dispatch({ type: "is Loading" });
    try {
      const response = await axios.get(url);
      const data = await response.data.products;
      console.log(data);
      dispatch({ type: "is Product data Load", payload: data });
    } catch (error) {
      dispatch({ type: "is Error" });
    }
  };

  const GetProductDeatils = async (url) => {
    dispatch({ type: "is Loading" });
    try {
      const response = await axios.get(url);
      const detailedData = await response.data;
      console.log(detailedData);
      dispatch({ type: "is Product data Load", payload: detailedData });
    } catch (error) {
      dispatch({ type: "is Error" });
    }
  };

  useEffect(() => {
    ProductData(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, GetProductDeatils }}>
      {children}
    </ProductContext.Provider>
  );
};

const GlobalProuctContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, GlobalProuctContext };
