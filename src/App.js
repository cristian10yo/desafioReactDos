/*import logo from './logo.svg';*/
import './App.css';
import ItemDetailCointainer from './components/ItemDetailContainer/ItemDetailContainer';

import NavBar from './components/NavBar/NavBar';
import CartWidget from './CartWidget';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import CartVacio from './components/CartVacio';
//4 importar y renderizar el Provider
import CartContextProvider from './context/cartContext';


function App() {
  return (
<CartContextProvider>
    <BrowserRouter>
    
      <header className="App-header">
      <NavBar tituloNav="FALSYCOMMERCE"/>
      <CartWidget/>
      </header>

      <Routes>
      
      <Route path="/" element ={<ItemListContainer greeting = "Bienvenido a la FalsyTienda" />}/>
      
      <Route path="/detalle/:id" element ={<ItemDetailCointainer/>}/>
      
      <Route path="/categoria/:cat" element={<ItemListContainer/>}/>

      <Route path="/cart" element={<CartVacio/>}/>
      
    
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
