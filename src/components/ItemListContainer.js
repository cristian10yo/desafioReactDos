import React,{useEffect, useState} from "react";
import Card from "./Card/Card";
import {useParams} from "react-router-dom"
import {getMockItems, getItemsByCategory} from "../services/firestore";




function ItemListContainer(){
let [data,setData] = useState([])
const [isLoading, setIsLoading] = useState (true)
const {cat} = useParams()

useEffect (()=>{
    setData ([]);
    setIsLoading (true);
        if (cat=== undefined){
    getMockItems().then ((respuestaDatos)=>setData (respuestaDatos) )
    .finally (() => setIsLoading (false));
        } else{
    getItemsByCategory(cat).then ((respuestaDatos)=>setData (respuestaDatos) )
    .finally (() => setIsLoading (false))
        }
    },
    [cat]
    );

return (
    <div>
{isLoading && <h3>Cargando...</h3>}

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
