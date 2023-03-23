import React from 'react'
import './hero.scss'
import {FaPizzaSlice} from 'react-icons/fa'
function Hero() {
  return (
    <div className='hero'>
        <div className="container">
            <div className="top">
                <div className="row">
                    <div className="div"></div>
                    <h2>Pizza</h2>
                    <h4>Menu
                        <i><FaPizzaSlice/></i>
                    </h4>
                </div>
            </div>

            <div className="bottom">
                <h1>GREATEST PIZZA EVER</h1>
                <h4>READY IN 60 SECONDS</h4>
                <button>Place Order</button>
            </div>

        </div>
    </div>
  )
}

export default Hero