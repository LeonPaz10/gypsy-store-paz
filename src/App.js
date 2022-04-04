
import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import ItemListContainer from './components/ItemListContainer';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';









function App() {
  return (
    <div className="App">
    <BrowserRouter>

    

    <Navbar/>
     

     <Routes>

       <Route path='/' element={<ItemListContainer/> }/>
       
       <Route path='/category/:categoryId' element={<ItemListContainer/> }/>
       <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
       





       
      
      <Route path='*' element={<h1>Error 404</h1>}/>
 
     </Routes>

     
      

      
      

      


      

      
      
      

      
      
    
    </BrowserRouter>
    </div>
    
  );
}


export default App;
