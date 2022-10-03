import "./styleItemDetail.css"
import {Link} from "react-router-dom";
import ItemCount from "../ItemCount";
import CartVacio from "../CartVacio";

function ItemDetail (props){
    
    let estadoCart = false;
    
    function handleAddToCart(count){
      alert (`agregaste al carrito ${count}`);
      {if (estadoCart!==false) {handleCart()}
      /*agregar funcion para cuando cambie al estado true, del itemdetail*/
    }

    function handleCart (){
<CartVacio/>}
    }

    let {price,title,img,detail,stock}=props;
    return(
    <div className ="card">
    <div className ="card-img">
    <img src={img} alt="card img"></img>
    </div>
    <div className ="card-detail">
    <h3>{title}</h3>
    <p>{detail}</p>
    <h4>${price}</h4>
    <p>el stock es:{stock}</p>
    {estadoCart ===false? <ItemCount stock={props.stock} onAddToCart={handleAddToCart} /> : <button onClick= {handleCart}>finalizar compra</button>}
    </div> 
        
   
   
    </div>
    )
    }

    export default ItemDetail;