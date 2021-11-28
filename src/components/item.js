import React, { useContext } from "react";
import { CartContext } from "./cart";

const Item = ({description,title,price,img,quantity,id,isSoldout}) => {
  
    const {removeItem , increment , decrement,purchasedItem}=useContext(CartContext );
    return(
        <React.Fragment>
          <div className="items-info" onClick={() =>purchasedItem(id)} > 
          
                       <div className="product-img">
                         <img src={img} alt="img"></img>
                       </div>
                       <div className={`title ${isSoldout?"sold-red":""}`} >
                         <h2>{title}</h2>
                         <p>{description}</p>
                       </div>
                 
                   <div className="add-minus-quantity">
                   <i class="fa fa-minus" onClick={(e) => {e.stopPropagation();decrement(id)}} ></i>
                   <input type="text" placeholder={quantity} name="" id=""></input>
                   <i class="fa fa-plus add" onClick={ (e) =>{e.stopPropagation();increment(id)}} ></i>
                   </div>
                   <div className="price">
                      <h3>{price}</h3>
                   </div>

                   <div className="remove-item">
                   <i class="fa fa-trash-alt remove" onClick={ (e)=>{e.stopPropagation();removeItem(id) }}></i>
                   </div>
                 </div>
              <hr></hr>
              <hr></hr>
        </React.Fragment>
    );

}
export default Item;