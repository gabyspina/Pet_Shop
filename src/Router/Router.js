import React from 'react'
import  {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

// views

import Home from '../views/Home/Home';
import Food from '../views/Food/Food';
import Accesorios from '../views/Accesorios/Accesorios';
import Galery from '../views/Galery/Galery';
import Cart from '../views/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
                  
          <Header/>
          <NavBar/>
          <Routes>  

              <Route path='/' element={<Home/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/food' element={<Food/>} />
              <Route path='/accesorios' element={<Accesorios/>} />
              <Route path='/galery' element={<Galery/>} />
              <Route path='/cart' element={<Cart/>} />

          </Routes>
    </BrowserRouter>

  )
}

export default Router
