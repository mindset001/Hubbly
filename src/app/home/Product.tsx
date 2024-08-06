'use client'
import React from 'react';
import Image from 'next/image';
import { Raleway } from 'next/font/google';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Logo from '../../../public/assets/Rectangle 21836 (1).png';

const rale = Raleway({ subsets: ["latin"] });

const handleDragStart = (e:any) => e.preventDefault();

const Product = () => {
  const items = solutions.map((item, i) => (
    <div key={i} className='text-[#fff] text-center flex flex-col items-center mx-2' onDragStart={handleDragStart} role="presentation">
      <div className='bg-white rounded-lg flex justify-center w-[110px] lg:w-[170px]'>
        <Image src={Logo} alt='' className='w-[140px] h-[120px] lg:w-[154px] lg:h-[130px]'/>
      </div>
      <h3 className={`${rale.className} text-[14px] lg:text-[16px] 2xl:text-[30px] font-[700] my-6`}>{item.title}</h3>
      <p className={`${rale.className} text-[9px] lg:text-[14px] 2xl:text-[24px] font-[300]`}>{item.subtitle}</p>
      <div className={`${rale.className} text-[9px] lg:text-[16px] bg-[#048392] rounded-[35px] w-[100px] lg:w-[149px] h-[33px] flex items-center justify-center mt-6 cursor-pointer`}>
        Learn More {'>'}
      </div>
    </div>
  ));

  return (
    <main className='product w-full flex flex-col items-center text-[#000] py-10'>
      <div className='w-[90%] flex flex-col items-center py-10'>
        <h1 className='text-[35px] font-[700] text-[#fff] mb-10'>Portfolio</h1>
        <div className='mt-10 w-full'>
          <AliceCarousel 
            mouseTracking 
            items={items} 
            responsive={{
              0: { items: 1 },
              568: { items: 2 },
              1024: { items: 4 },
            }}
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            disableButtonsControls={true}
            disableDotsControls={true}
          />
        </div>
      </div>
    </main>
  );
}

export default Product;

const solutions = [
  {
    title: 'Hubbly App',
    subtitle: 'Get the household help you need with our intuitive app.',
    link: ""
  },
  {
    title: 'OctaSight',
    subtitle: 'Gain insights and analytics to drive informed decision-making.',
    link: ""
  },
  {
    title: 'Document Management System',
    subtitle: 'Organize, secure, and access your documents with ease.',
    link: ""
  },
  {
    title: 'TownCrier',
    subtitle: 'Connect with your community and stay informed with our platform.',
    link: ""
  },
  {
    title: 'Hubbly App',
    subtitle: 'Get the household help you need with our intuitive app.',
    link: ""
  },
  {
    title: 'OctaSight',
    subtitle: 'Gain insights and analytics to drive informed decision-making.',
    link: ""
  },
  {
    title: 'Document Management System',
    subtitle: 'Organize, secure, and access your documents with ease.',
    link: ""
  },
  {
    title: 'TownCrier',
    subtitle: 'Connect with your community and stay informed with our platform.',
    link: ""
  },
];
