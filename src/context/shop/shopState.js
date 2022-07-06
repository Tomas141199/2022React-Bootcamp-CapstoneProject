import { useReducer } from "react";
import ShopContext from "./shopContext";
import ShopReducer from "./shopReducer";
import {
  ADD_PRODUCT,
  UPDATE_QUANTITY,
  DELETE_ITEM,
} from "./../../types/shop/index";

const ShopState = (props) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(ShopReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  };

  const updateQuantity = (product) => {
    dispatch({
      type: UPDATE_QUANTITY,
      payload: product,
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  };

  return (
    <ShopContext.Provider
      value={{ cart: state.cart, addToCart, updateQuantity, deleteItem }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopState;
