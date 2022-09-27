import React,{useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail";


import { getSingleItem } from "../MockData";


function ItemDetailContainer(){
    let [data,setData] = useState({})
    
    useEffect (
        ()=>{
        getSingleItem().then ((respuestaDatos)=>setData (respuestaDatos) );
       
        },
        []
        );
    
    return (
        <div>
         <div className="main container">
            {/*<ItemDetail data={data}/>*/}
            
          {/*<h1>{data.title}</h1>
          <h2>${data.price}</h2>
          <h3>{data.detail}</h3>
    <div>{data.img}</div>*/}

            
                <ItemDetail
                key={data.id}
                price={data.price}
                img={data.img}
                detail={data.detail}
                stock={data.stock}
                />
            
          
      </div>
     </div>
     )
    }
    
    
    
    export default ItemDetailContainer;
    