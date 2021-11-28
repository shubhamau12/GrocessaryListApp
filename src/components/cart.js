import React, {createContext, useEffect, useReducer, useState } from "react";
import './cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './item';
import {products} from './product';
import ContexCart from "./ContextCart";
import reducer from "./reducer";
import react from "react";
export const CartContext = createContext();


const  intialState={
   item : products,
   totalAmount : 0,
   totalItem :0

};
const Cart = () =>{
//const [item , setItem]=useState(products);
const [state , dispatch ] =useReducer(reducer , intialState);

const removeItem = (id) =>{
  // to delete ind item
  return dispatch({
    type:"REMOVE_ITEM",
    payload : id
  });
};

//clear cart

const clearCart = () =>{
         return dispatch({
           type:"CLEAR_CART"
         });
}

// increment the item

const increment = (id) =>{
       return dispatch({
         type:"INCREMENT",
         payload: id
       });
}

const purchasedItem = (id) =>{
  return dispatch({
    type:"PURCHASED",
    payload: id
  });

}

const decrement = (id) => {
  return dispatch({
    type:"DECREMENT",
    payload: id
  });
}

// we will use the useEffect to update the data
useEffect(() => {
  dispatch({type:"GET_TOTAL"})
}, [state.item]);

   return ( 
          <React.Fragment>
          <CartContext.Provider  value={{ ...state, removeItem,clearCart ,increment ,decrement , purchasedItem}}>
          <ContexCart />
          </CartContext.Provider>
        
    </React.Fragment>
   )

}

export default Cart;