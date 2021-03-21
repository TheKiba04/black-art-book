import React from 'react'
import Card from './Card.js'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'

export default function Main() {
    return (
        <div className='main'>
            <div className="main__header">
                <h2>Header 2</h2>
            </div>
            <div className="main__content">

                <Card src={img1} />
                <Card src={img2} />
                <Card src={img3} />
                <Card src={img4} />
                <Card src={img5} />
            </div>
        </div>
    )
}
