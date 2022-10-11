
import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";



function CartView(){
    //const {cartruta} =useParams();
    const context = useContext(cartContext);
    const {cart} = context;
    const {removeAll,getTotalItemsInCart} = useContext (cartContext)
    /*let carritoVacio = true;
if (carritoVacio) { 
return <div> 
    tu carrito esta vacio
       </div>
}*/
    let styleH1={color:"green", textDecoration:"underline"}
return (
    <div>
        <h1 style= {styleH1}>Este es tu Carrito</h1>
        <h2>El total de items en tu carrito es: {getTotalItemsInCart ()}</h2>
        <h3>Tus Productos hasta el momento son:
     {cart.map (item => 
        <>
        <h3>Nombre del Producto:{item.title}</h3>
        <p>El precio es:{item.price}</p>
        <p>La cantidad de {item.title} es :{item.count}</p>
        </>
        )}
        </h3>
        <button onClick= {removeAll}>Eliminar el carrito</button>
    </div>

)
}

export default CartView;