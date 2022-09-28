/*import logo from './logo.svg';*/
import './App.css';
import ItemCountDos from './components/ItemCountDos';
import ItemDetailCointainer from './components/ItemDetailContainer/ItemDetailContainer';

import NavBar from './components/NavBar/NavBar';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';


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
      {/*<ItemCountDos/>*/}
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
