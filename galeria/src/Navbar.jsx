import React from 'react'
import {Link} from 'react-router-dom'
import logo from './assets/logo.png'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__logo'><img src={logo} alt="logo"/></div>
            <div className='navbar__links'>
                    <div className='navbar__link'>
                        <Link to='/'>Text1</Link>
                    </div>
                    <div className='navbar__link'>
                        <Link to='/'>Text2</Link>
                    </div>
                    <div className='navbar__link'>
                        <Link to='/'>Text2</Link>
                    </div>
                </div>
            <div className='navbar__login'>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Navbar
