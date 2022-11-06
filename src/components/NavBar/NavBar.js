
import "./NavBar.css";
import{Link} from "react-router-dom";
import CartWidget from "./CartWidget";



function NavBar (props){
    
    return(
<>
    <div className="div-titulo">
<h1 className="titulo-nav-bar">{props.tituloNav}</h1>
    </div>

    <div className="div-secciones">
        
<ul>

    <Link to="/"><li>Inicio</li></Link>

    <Link to="/categoria/Bluetooth"><li>Auriculares Bluetooth</li></Link>

    <Link to="/categoria/Gamer"><li>Auriculares Gamer</li></Link>

    <Link to="/categoria/Microfono"><li>Auriculares con Microfono</li></Link>
</ul>
    </div>

<CartWidget/>

    
    </>
    );
}

export default NavBar;