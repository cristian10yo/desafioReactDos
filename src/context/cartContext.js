
import React, {useState, createContext} from "react";

/*importamos e inicializamos el createContext*/
const cartContext = createContext ();

/*definimos el Provider*/
export default function CartContextProvider ({children}){

    const [cart, setCart] = useState ([]);
    

function addItem (item,count){

/*if (isInCart (item.id)){

}else{*/
console.log(item,count)
    let newCart = cart.map ((item)=>item)
    newCart.push ({...item, count:count})
    setCart(newCart)
    //}
}

function getTotalItemsInCart (){
    let total=5
    cart.forEach(item=>0)
    return total
}

/*function isInCart (){
    let found = cart.some (item => item.id === id)
    return found;
}*/

    //pasamos el objeto value a los componentes hijos
    return (
        <cartContext.Provider value = {{cart, addItem}}>{children}</cartContext.Provider>
    )
}

export {cartContext}; 