import React from "react";
import Button from "../Button/Button";
import ItemCount from "../ItemCount";
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
<Button>

</Button>
<ItemCount initial={1} stock={3}/>



        </div>
    )
}

export default Card;