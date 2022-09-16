import React from "react";
import { FaSwatchbook } from "react-icons/fa";

function ItemCount (props){
    const [count,setCount] = React.useState(props.initial)

    function handleAdd() {
        if (count < props.stock) {setCount(count + 1);}
    }
    function handleSubstract() {
        if (count > 0) {setCount(count - 1);}
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