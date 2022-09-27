/*import logo from './logo.svg';*/
import './App.css';
import ItemCountDos from './components/ItemCountDos';
import ItemDetailCointainer from './components/ItemDetailContainer/ItemDetailContainer';

import NavBar from './components/NavBar/NavBar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar tituloNav="FALSYCOMMERCE"/>
      </header>
      {/*<ItemListContainer greeting = "Bienvenido a la FalsyTienda" />*/}
      <ItemDetailCointainer/>
      {/*<ItemCountDos/>*/}
    </div>
  );
}

export default App;
