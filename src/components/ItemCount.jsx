import React from "react";
import { FaSwatchbook } from "react-icons/fa";

function ItemCount (props){
    const [count,setCount] = React.useState(props.initial)

    function handleAdd (){
        //solo sumar si la cantidad no excede el stock
        setCount (count+1)
    }

    function handleSubstract (){
        //solo restar si el numero es 0
        setCount (count-1)
    }

    return(
<div>
    <button onClick={handleSubstract}>-</button>
    <span>{count}</span>
    <button onClick={handleAdd}>+</button>
</div>
    )
};
export default ItemCount;