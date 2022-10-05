import React, {useState, useContext} from "react";
import "./styleItemDetail.css"
import {Link} from "react-router-dom";
import ItemCount from "../ItemCount";
import CartVacio from "../CartVacio";
import { cartContext } from "../../context/cartContext";


function ItemDetail ({item}){
    const [isInCart, setIsInCart] = useState (false);
  
    //const {addItem} = useContext (cartContext);

    function handleAddToCart(count){
      setIsInCart(true)
      //addItem (item,count)
  
    }

    //let {price,title,img,detail,stock}=props;*/
    return(
    <div className ="card">
    <div className ="card-img">
    <img src={item.img} alt="card img"></img>
    </div>
    <div className ="card-detail">
    <h3>{item.title}</h3>
    <p>{item.detail}</p>
    <h4>${item.price}</h4>
    <p>el stock es:{item.stock}</p>
    {
      (isInCart===false)? <ItemCount stock={item.stock} onAddToCart={handleAddToCart}/>: <p>---</p>
    }
    
    </div> 
        
   
   
    </div>
    )
    }

    export default ItemDetail;