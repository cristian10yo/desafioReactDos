
import React, {useState, createContext} from "react";

/*importamos e inicializamos el createContext*/
const cartContext = createContext ();

/*definimos el Provider*/
export default function CartContextProvider ({children}){

    const [cart, setCart] = useState ([]);
    

function addItem (item,count){
    console.log(item,count)
if (isInCart (item.id)){

    let newCart = cart.map((itemMapeo)=>{
        if(itemMapeo.id === item.id) {
        //let newItem = itemMapeo;
        //newItem.count += count
        itemMapeo.count += count
        return itemMapeo;
    }
    else
     return itemMapeo
})
setCart (newCart)

}else{

    let newCart = cart.map ((item)=>item)
    newCart.push ({...item, count:count})
    setCart(newCart)
    }
}

/*function getTotalItemsInCart (){
    let total=5
    cart.forEach(item=>0)
    return total
}
function getTotalItemsInCart (){
    let total=0
    cart.forEach(item=> total++)
    return total
}*/

function isInCart (id){
    let found = cart.some (item => item.id === id)
    return found;
}

    //pasamos el objeto value a los componentes hijos
    return (
        <cartContext.Provider value = {{cart, addItem, isInCart}}>{children}</cartContext.Provider>
    );
}

export {cartContext}; 