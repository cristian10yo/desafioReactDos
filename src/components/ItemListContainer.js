{/*import React,{useEffect, useState} from "react";
import Card from "./Cards/Card";
import getMockItems from "./MockData";


function ItemListContainer(){
let [data,setData] = useState([])

useEffect (
    ()=>{
    getMockItems().then ((respuestaDatos)=>setData (respuestaDatos) );
   
    },
    []
    );

return (
    <div>
     <div className="main container">
      {data.map((item)=>{
        return(
            <Card
            key={item.id}
            price={item.price}
            img={item.img}
            detail={item.detail}
            stock={item.stock}
            />
        )
      })}
  </div>
 </div>
 )
}



export default ItemListContainer;*/}
