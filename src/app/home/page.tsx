import React from 'react'
import Hero from './hero'
import About from './about'
import Services from './Services'
import Product from './Product'
import Competences from './Competences'
import Software from './software'
import Footer from '../components/footer'

function Home() {
  return (
    <main className='w-full'>
        <Hero/>
        <div className='mt-[9%]'>
        <About/>
        </div>
       <div>
       <Services/>
       </div>
        <div className='z-20'>
        <Software/>
        </div>
        <div className='z-0'>
        <Competences/>
        </div>
        <Product/>
        <Footer/>
        
    </main>
  )
}

export default Home