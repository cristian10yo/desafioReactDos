
import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { createBuyOrder } from "../services/firestore";
import CheckoutForm from "./CheckoutForm/CheckoutForm";


function CartView(){
    //const {cartruta} =useParams();
    const context = useContext(cartContext);
    /*const {cart} = context;*/
    const {cart,removeAll,getTotalItemsInCart,getTotalPrice} = useContext (cartContext)

let carritoVacio = cart.length === 0;

if (carritoVacio) { 
return <div> 
   TU CARRITO ESTÁ VACIO...
       </div>
}



    let styleH1={color:"green", textDecoration:"underline"}
return (
    <div>
        <h1 style= {styleH1}>Este es tu Carrito</h1>
        <h2>El total de items en tu carrito es: {getTotalItemsInCart ()} y el precio total es: {getTotalPrice ()}</h2>
        <h3>Tus Productos hasta el momento son:
     {cart.map (item => 
        <>
        <h4>Nombre del Producto:{item.title}</h4>
        <p>El precio es:{item.price}</p>
        <p>La cantidad de {item.title} es :{item.count}</p>
        </>
        )}
        </h3>
    
        <h3>el total de tu compra es $ {getTotalPrice()}</h3>
        <CheckoutForm/>

       
    </div>

)

}

export default CartView;