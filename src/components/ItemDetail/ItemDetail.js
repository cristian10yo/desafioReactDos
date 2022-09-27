import "./styleItemDetail.css"

function ItemDetail (props){
    let {price,title,img,detail}=props;
    return(
    <div className ="cardDetail">
    <div className ="cardimg">
    <img src={img} alt="card img"></img>
    </div>
    <div className ="card-detail">
    <h3>{title}</h3>
    <p>{detail}</p>
    <h4>${price}</h4>
    </div> 
        
    
    <button>Ver mas</button>
    </div>
    )
    }

    export default ItemDetail;