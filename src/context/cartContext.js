
import React, {useState, createContext} from "react";

/*importamos e inicializamos el createContext*/
const cartContext = createContext ();

/*definimos el Provider*/
export default function CartContextProvider ({children}){
    const [cart, setCart] = useState ([]);
    

function addItem (item,count){
if (isInCart (item.id)){

    let newCart = cart.map((itemMapeo)=>{
        if(itemMapeo.id === item.id) {
        //let newItem = itemMapeo;
        //newItem.count += count
        itemMapeo.count += count
        return itemMapeo;
    }
    else return itemMapeo;
})

setCart (newCart)
}else{

    let newCart = cart.map ((item)=>item);
    newCart.push ({...item, count:count});
    setCart(newCart);
    }
}

function getTotalItemsInCart (count){
    let total= 0
    cart.forEach (item=>total++)
    return total
    
}

function getTotalPrice (){
    let totalPrice = 0
    cart.forEach (item => totalPrice += item.price*item.count);
    return totalPrice;
}

function isInCart (id){
    let found = cart.some ((item) => item.id === id)
    return found;
}

function removeAll (){
   setCart ([])
}

    //pasamos el objeto value a los componentes hijos
    return (
        <cartContext.Provider value = {{cart, addItem, isInCart, getTotalItemsInCart, removeAll, getTotalPrice }}>
            {children}
            </cartContext.Provider>
    );
}

export {cartContext}; 