import React from 'react'
import Hero from './hero/Hero'
import '../../sass/main.scss'
import Pizza from './pizza/Pizza'
import Order from './order/Order'
import Sweet from './sweet/Sweet'
import Footer from './footer/Footer'


function Home() {
  return (
    <div>
     <Hero/>
     <Pizza/>
     <Order/>
     <Sweet/>
     <Footer/>
    </div>
  )
}

export default Home