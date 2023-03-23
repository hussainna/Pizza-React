import React from 'react'
import { pizzaData } from '../../data/Data'
import './pizza.scss'
function Pizza() {
  return (
    <div className='pizza'>
        <div className="container">
            <h1>Choose your favorite</h1>
            <div className="row">
                {pizzaData.map((item,idx)=>(
                    <div key={idx} className="col">
                        <img src={item.img} alt="" />
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <h4 className="price">${item.price}</h4>
                        <button>Add To Cart</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Pizza