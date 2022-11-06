import React, { useContext } from "react";
import { FaBeer } from 'react-icons/fa';
import {IoIosAirplane} from "react-icons/io";
import { cartContext } from "../../context/cartContext";
import "./cartWidget.css";

function CartWidget (){

    const { getTotalItemsInCart } = useContext(cartContext);
    
    /*const {cart} = useContext(cartContext);*/

    return(
<div className="cartClass">
    <p>
"HOLA soy el CartWidget"  <IoIosAirplane/><IoIosAirplane/><IoIosAirplane/><IoIosAirplane/><FaBeer /> 
</p>
<span>EL TOTAL DE TUS ITEMS EN EL CARRITO ES DE: {getTotalItemsInCart()}</span>
</div>
    )
}

export default CartWidget;