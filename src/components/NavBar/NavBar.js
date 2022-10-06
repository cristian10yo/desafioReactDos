
import "./NavBar.css";
import{Link} from "react-router-dom";
import CartWidget from "../../CartWidget";



function NavBar (props){
    
    return(
    <div className="div-nav-bar">
<h1 className="titulo-nav-bar"> <CartWidget/> {props.tituloNav}</h1>
<ul>

    <Link to="/"><li>Inicio</li></Link>

    <Link to="/categoria/Bluetooth"><li>Auriculares Bluetooth</li></Link>

    <Link to="/categoria/Gamer"><li>Auriculares Gamer</li></Link>

    <Link to="/categoria/Microfono"><li>Auriculares con Microfono</li></Link>
</ul>


    </div>
    
    );
}

export default NavBar;