import React, { createContext, useReducer } from 'react';
import { CartReducer } from '../Global/CartReducer';
//import ProductReducer from './ProductsContext';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(CartReducer,
    {
      shoppingCart: [],
      totalPrice: 0,
      qty: 0
    }
  )

  return (
    <div>
      <CartContext.Provider value={{ ...cart, dispatch }}>
        {props.children}
      </CartContext.Provider>
    </div>
  )
}

export default CartContextProvider
