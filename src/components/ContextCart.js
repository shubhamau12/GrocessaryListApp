import React, { useContext} from "react";
import './cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './item';
import {products} from './product';
import { CartContext } from "./cart";
const ContexCart = () => {
   const {item , clearCart ,totalItem} = useContext(CartContext);

   if(item.length === 0)
   {
       return <>
      
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" ></img>
          <h3>Continue Shopping...</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart"></img>
          <p>{totalItem}</p>
        </div>
    </header>
      <section className="main-cart-section">
          <h1>Shopping Cart...</h1>
          <p className="total-items">Hi, You have <span className="total-items-count">{totalItem}</span> items in Shopping cart</p>
          <div className="cart-items">
              <div className="cart-items-container">
              <Scrollbars >

                {
                  item.map((curItem) => {
                       return <Item key={curItem.id} {...curItem}/>
                  })
                }
                
                
                 </Scrollbars>
              </div>
          </div>
      </section>

       </>
   }

    return (
        <>
          <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" ></img>
          <h3>Continue Shopping...</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart"></img>
          <p>{totalItem}</p>
        </div>
    </header>
      <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">You have <span className="total-items-count">{totalItem}</span> items in Shopping cart</p>
          <div className="cart-items">
              <div className="cart-items-container">
              <Scrollbars >

                {
                  item.map((curItem) => {
                       return <Item key={curItem.id} {...curItem}/>
                  })
                }
                
                
                 </Scrollbars>
              </div>
          </div>

          <div className="card-total">
            <button className="clear-cart" onClick={clearCart}> Clear Cart</button>
          </div>
      </section>
        </>
    );
}

export default ContexCart;