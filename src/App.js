
import './App.css';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel'
import ItemListContainer from './components/ItemListContainer';
import Cont from './components/ItemCount';
import ItemCount from './components/ItemCount';




function App() {
  return (
    <div className="App">

      
      <Navbar/>

      <ItemListContainer/>

      <Carrusel/>

      <ItemCount/>

      
      

      
      
    
    </div>
    
  );
}


export default App;
