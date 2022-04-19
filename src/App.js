
import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import ItemListContainer from './components/ItemListContainer';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/CartContext';

import Cart from './components/Cart';










function App() {



 
  return (
    <div className="App"> 
    <CartProvider>
    <BrowserRouter>

    

<Navbar/>
 

 <Routes>

   <Route path='/' element={<ItemListContainer/> }/>
   
   <Route path='/category/:categoryId' element={<ItemListContainer/> }/>
   <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />

   <Route path= '/cart' element={<Cart/>}/>
   





   
  
  <Route path='*' element={<h1>Error 404</h1>}/>

 </Routes>

 
  

  
  

  


  

  
  
  

  
  

</BrowserRouter>
    </CartProvider>
    
    </div>
    
  );
}


export default App;
