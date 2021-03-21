import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div>
            <img className='card_img' src={props.src} alt="img" />
        </div>
    )
}
