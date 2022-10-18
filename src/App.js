/*import logo from './logo.svg';*/
import './App.css';
import ItemDetailCointainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
//4 importar y renderizar el Provider
import CartContextProvider from './context/cartContext';
import CartView from './components/CartView';
import Checkout from './components/Checkout/Checkout';
import { exportDataToFirestore } from './services/firestore';


function App() {
exportDataToFirestore ();

  return (
<CartContextProvider>
  <button onClick={exportDataToFirestore}>Enviar datos al firestore</button>
    <BrowserRouter>
    
      <header className="App-header">
        
      <NavBar tituloNav="FALSYCOMMERCE"/>
     
      </header>

      <Routes>
      
      <Route path="/" element ={<ItemListContainer greeting = "Bienvenido a la FalsyTienda" />}/>
      
      <Route path="/detalle/:id" element ={<ItemDetailCointainer/>}/>
      
      <Route path="/categoria/:cat" element={<ItemListContainer/>}/>

      <Route path="/cart" element={<CartView/>}/>
      
      
      <Route path="/checkout/:orderid" element={<Checkout />} />
    
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
