import React,{useEffect, useState} from "react";
import Card from "./Card/Card";
import {useParams} from "react-router-dom"
import getMockItems, {getItemsByCategory} from "./MockData";

function ItemListContainer(){
let [data,setData] = useState([])
const {cat} = useParams()

useEffect (()=>{
        if (cat=== undefined){
    getMockItems().then ((respuestaDatos)=>setData (respuestaDatos) );
        } else{
    getItemsByCategory(cat).then ((respuestaDatos)=>setData (respuestaDatos) );
        }
    },
    [cat]
    );

return (
    <div>
     <div className="main container">
      {data.map((item)=>{
        return(
            <Card
            key={item.id}
            id={item.id}
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



export default ItemListContainer;
