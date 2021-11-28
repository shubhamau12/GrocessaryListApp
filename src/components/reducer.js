import React from "react";

const reducer =(state , action) =>{
    if(action.type === "REMOVE_ITEM")
    {
        return{
            ...state,
            item:state.item.filter((curEle) =>{
                return curEle.id != action.payload;
            })
        }
    }

    if(action.type === "CLEAR_CART")
    {
        return { ...state , item: [] };
    }

    if(action.type === "INCREMENT")
    {
        let updatedCart = state.item.map((curEle) =>{
           if(curEle.id === action.payload)
           {
            return { ...curEle, quantity:curEle.quantity + 1};
           }
           return curEle;
        })

        return {...state, item:updatedCart}
      
    }
   
    // decrement

    if(action.type === "DECREMENT")
    {
        let updatedCart = state.item.map((curEle) =>{
           if(curEle.id === action.payload)
           {
            return { ...curEle, quantity:curEle.quantity - 1};
           }
           return curEle;
        }).filter((curEle) => {
            return curEle.quantity != 0;
        });

        return {...state, item:updatedCart}
      
    }

   if(action.type === "GET_TOTAL"){
       let {totalItem} = state.item.reduce((accum , curVal) => {
           let {quantity} = curVal;
           accum.totalItem += quantity;
           return accum;
       }, {
           totalItem: 0,
       });
       return { ...state , totalItem }
   }


   if(action.type === "PURCHASED")
   {
       let updatedCart = state.item.map((curEle) =>{
          if(curEle.id === action.payload)
          {
           return { ...curEle, isSoldout:!curEle.isSoldout};
          }
          return curEle;
       });

       return {...state, item:updatedCart}
     
   }


    return  state;
    
};

export default reducer;