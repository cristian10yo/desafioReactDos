import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { FaBeer } from 'react-icons/fa';
import {IoIosAirplane} from "react-icons/io";



function CartWidget (){

    const { getTotalItemsInCart } = useContext(cartContext);
    
    /*const {cart} = useContext(cartContext);*/

    return(
<div>
    <p>
"HOLA soy el CartWidget" <FaBeer /> <IoIosAirplane/>
</p>
<span>{getTotalItemsInCart()}</span>
</div>
    )
}

export default CartWidget;
