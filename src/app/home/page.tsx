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
    <main className='w-full bg-[#E7FCFD] flex flex-col items-center justify-center overflow-x-hidden'>
        <Hero/>
        <div className='' id='about'>
        <About/>
        </div>
   
      <div className='w-full' id='services'>
      <Services/>
      </div>
      
    
       <div className='w-full z-0 flex flex-col items-center' id='competencies'>
       <div className='w-[70%] z-10'>
      <Software/>
      </div>
       <div className='mt-[-1%] w-full'>
       <Competences/>
       </div>
       </div>
    
       <div id='products'>
       <Product/>
       </div>
        <div className='w-full' id='contact'>
        <Footer/>
        </div>
        
    </main>
  )
}

export default Home