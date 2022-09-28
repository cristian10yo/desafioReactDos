import "./styleCard.css"
import {Link} from "react-router-dom";

function Card(props){
    let {price,title,img,detail,id}=props;
    const urlDetalle= `/detalle/${id}`
    return(
    <div className ="card">
    <div className ="card-img">
    <img src={img} alt="card img"></img>
    </div>
    <div className ="card-detail">
    <h3>{title}</h3>
    <p>{detail}</p>
    <h4>${price}</h4>
    </div> 
        
    <Link to={urlDetalle}>
    <button>Ver mas</button>
    </Link>
    </div>
    )
    }

    export default Card;