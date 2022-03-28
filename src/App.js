
import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';







function App() {
  return (
    <div className="App">

      
      <Navbar/>
     

      <ItemListContainer/> 

      <ItemDetailContainer/>

      

      


      

      
      
      

      
      
    
    </div>
    
  );
}


export default App;
