/*import logo from './logo.svg';*/
import './App.css';
import ItemDetailCointainer from './components/ItemDetailContainer/ItemDetailContainer';

import NavBar from './components/NavBar/NavBar';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import CartVacio from './components/CartVacio';


function App() {
  return (

    <BrowserRouter>
    
      <header className="App-header">
      <NavBar tituloNav="FALSYCOMMERCE"/>
      </header>

      <Routes>
      
      <Route path="/" element ={<ItemListContainer greeting = "Bienvenido a la FalsyTienda" />}/>
      
      <Route path="/detalle/:id" element ={<ItemDetailCointainer/>}/>
      
      <Route path="/categoria/:cat" element={<ItemListContainer/>}/>

      <Route path="/cart" element={<CartVacio/>}/>
      {/*<ItemCountDos/>*/}
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
