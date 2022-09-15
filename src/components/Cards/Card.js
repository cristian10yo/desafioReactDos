import React from "react";
import "./styleCard.css"
function Card (props){
    let {img,title,detail,price} = props;
    return(
        <div className="card">
            <div className="card-img">
                <img src={img} alt="descripcion"></img>
            </div>
            <div className="card-detail">
                <h3>{title}</h3>
                <p>{detail}</p>
                <h4>${price}</h4>
            </div>


        </div>
    )
}

export default Card;