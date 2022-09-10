/*import logo from './logo.svg';*/
import './App.css';
import ItemListCointainer from './components/itemListCointainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar tituloNav="FALSYCOMMERCE"/>
      </header>
      <ItemListCointainer greeting = "Bienvenido a la FalsyTienda" />
    </div>
  );
}

export default App;
