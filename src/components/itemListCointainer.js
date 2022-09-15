import Card from "./Cards/Card";


function ItemListCointainer (props){
    return(
        <div>
<div>Greeting: {props.greeting}</div>

<div className="main container">
    <Card
    price={100}
    title={"Producto1"}
    detail={"esta es la primera card"}
    img={""}
    />
</div>

        </div>
    )
}

export default ItemListCointainer;