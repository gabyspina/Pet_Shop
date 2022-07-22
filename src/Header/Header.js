import React from 'react'
import logo  from '../assets/logo-pet-modificado.ico'
import './Header.css'


const Header = () => {

return (

    <header className='App-section'>
        <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className='App-titulos'>
        
        <h1>Pet Shop</h1>
            <p className='subtitle' >Welcome to the Pet Shop</p>
        </div>
        
    </header>
    )
}

export default Header
