import React from 'react'
import Hero from './hero'
import About from './about'
import Services from './Services'
import Product from './Product'
import Competences from './Competences'
import Software from './software'

function Home() {
  return (
    <main className='w-full'>
        <Hero/>
        <div className='mt-[9%]'>
        <About/>
        </div>
        <Services/>
        <div className='my-[-10%]'>
        <Software/>
        </div>
        <Competences/>
        <Product/>
        
    </main>
  )
}

export default Home