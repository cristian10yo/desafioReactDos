import React, {useContext} from "react";
import { cartContext } from "./context/cartContext";
import { FaBeer } from 'react-icons/fa';
import {IoIosAirplane} from "react-icons/io";




function CartWidget (){

    const {cart} = useContext(cartContext);
//const {getTotalItemsInCart} =useContext(cartContext)
    return(
<div>
"HOLA" <FaBeer /> <IoIosAirplane/>
<span>{cart.item}</span>
</div>
    )
}

export default CartWidget;