
import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import ItemListContainer from './components/ItemListContainer';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Contacto from './components/Contacto';








function App() {
  return (
    <BrowserRouter>

    <div className="App">

    <Navbar/>
     

     <Routes>

       <Route path='/' element={<ItemListContainer/> }/>
       
       <Route path='/category/:categoryId' element={<ItemListContainer/> }/>





       <Route path='/contacto' element={<Contacto/> }/>
      
      <Route path='*' element={<h1>Error 404</h1>}/>
 
     </Routes>

     
      </div>

      
      

      


      

      
      
      

      
      
    
    </BrowserRouter>
    
  );
}


export default App;
