import React,{useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../MockData";
import {useParams} from "react-router-dom"



function ItemDetailContainer(){
    const [data,setData] = useState({});
    const [error,setError] = useState(false);
 
    const {id} =useParams();

    useEffect (()=>{
        getSingleItem(id).then ((respuestaDatos)=>setData (respuestaDatos) )
       .catch ((errormsg) => {
        setError (errormsg.message);
       });
        }, [id]);

        if (!data.title){
            return(
            <>
            {error? (<div>
                <h2>ERROR OBTENIENDO LOS DATOS</h2>
                <p>{error}</p>
            </div>) : (<h3>Cargando...</h3>)

            }
            
            </>
            )
        }
    
    return (
        <div>
         <div className="main container">
         
<ItemDetail item={data}/>
            
          
      </div>
     </div>
     )
    }
    
    
    
    export default ItemDetailContainer;
    