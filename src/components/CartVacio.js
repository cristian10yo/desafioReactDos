import {useParams} from "react-router-dom"


function CartVacio(){
    const {cart} =useParams();

return (
    <div>Este es tu Carrito</div>
)
}

export default CartVacio;