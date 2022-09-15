import React from "react"

function ItemCount (){

    const [clickCount,setClickCount] = React.useState (0)

    function handleClick (){
    setClickCount (clickCount+1)
    }


    return(
<div>
    <button onClick={handleClick}>clickeame</button>
    <h4>hiciste click {clickCount} cantidad de veces</h4>
</div>
    )
};

export default ItemCount;