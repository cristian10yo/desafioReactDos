import {useParams} from "react-router-dom";
import React,{useContext} from "react";
import { cartContext } from "../context/cartContext";


function CartVacio(){
    const {cartruta} =useParams();
    const {cart} = useContext(cartContext)

return (
    <div>Este es tu Carrito {cart.lenght}</div>
)
}

export default CartVacio;