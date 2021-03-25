import React from 'react'
import logo from './assets/logo.png'
import './Footer.css'


export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_logo logo'>
                <img src={logo} alt="logo" />
            </div>
            <div>copyright</div>
            <div>
                <div className = 'footer__contact'>
                    <img src={logo} alt="footer__logo_mini" />
                    <p>texttextext</p>
                </div>
                <div className = 'footer__contact'>
                    <img src={logo} alt="footer__logo_mini-logo" />
                    <p>texttextext</p>
                </div>
            </div>
        </div>
    )
}
