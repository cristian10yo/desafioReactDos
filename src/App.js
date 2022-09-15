/*import logo from './logo.svg';*/
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListCointainer from './components/itemListCointainer';
import NavBar from './components/NavBar/NavBar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar tituloNav="FALSYCOMMERCE"/>
      </header>
      <ItemListCointainer greeting = "Bienvenido a la FalsyTienda" />
      <ItemCount/>
    </div>
  );
}

export default App;
