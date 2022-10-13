import React,{useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../../services/firestore";
import {useParams} from "react-router-dom";
import { Waveform } from '@uiball/loaders';


function ItemDetailContainer(){
    const [data,setData] = useState({});
    const [error,setError] = useState(false);
    const [isLoading,setIsLoading] = useState (true);

    const {id} =useParams();

    useEffect (()=>{
        getSingleItem(id).then ((respuestaDatos)=>setData (respuestaDatos) )
       .catch ((errormsg) => {
        setError (errormsg.message);
       })
       .finally (() => setIsLoading (false))
        }, [id]);

        if (isLoading){
            return(
            <>
            {error? (<div>
                <h2>ERROR OBTENIENDO LOS DATOS</h2>
                <p>{error}</p>
            </div>) : (<Waveform 
 size={80}
 lineWeight={3.5}
 speed={1} 
 color="yellow" 
/>)

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
    