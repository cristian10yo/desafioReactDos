import React from "react";

function ItemCount ({stock,onAddToCart}){
    const [count,setCount] = React.useState(0)

    function handleAdd() {
        if (count < parseInt(stock)) {setCount(count + 1);}
    }
    function handleSubstract() {
        if (count >0 ) {setCount(count - 1);}
    }


    return(
<div>
    <button onClick={handleSubstract}>-</button>
    <span>{count}</span>
    <button onClick={handleAdd}>+</button>

    <button onClick= {()=>onAddToCart(count)}>Agregar al carrito</button>
</div>
    )
};
export default ItemCount;