import CartWidget from "../../CartWidget";
import "./NavBar.css"

function NavBar (props){
    return(
    <div className="div-nav-bar">
<h1 className="titulo-nav-bar"> <CartWidget/> {props.tituloNav}</h1>
<ul>
    <li>Inicio</li>
    <li>Bebidas</li>
    <li>Auriculares</li>
    <li>Smart TV</li>
</ul>
    </div>
    );
}

export default NavBar;