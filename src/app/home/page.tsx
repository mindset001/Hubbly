import React from 'react';
import Hero from './hero';
import About from './about';
import Services from './Services';
import Product from './Product';
import Competences from './Competences';
import Software from './software';
import Footer from '../components/footer';
import ScrollToTop from './scroll'; // Import the ScrollToTop component
// import { Link } from 'react-scroll'; // Import Link from react-scroll

function Home() {
  return (
    <main className='w-full bg-[#E7FCFD] flex flex-col items-center justify-center overflow-x-hidden'>
      <Hero />
      <div id='about'>
        <About />
      </div>

      <div id='competencies' className='w-full z-0 flex flex-col items-center'>
        <div className='w-[70%] z-10'>
          <Software />
        </div>
        <div className='w-full'>
          <Competences />
        </div>
      </div>

      <div id='products' className='w-full'>
        <Product />
      </div>
      <div id='contact' className='w-full'>
        <Footer />
      </div>

      <ScrollToTop /> {/* Add the ScrollToTop component */}
    </main>
  );
}

export default Home;
