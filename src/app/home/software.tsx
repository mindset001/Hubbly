import { Raleway } from 'next/font/google';
import React from 'react'
import Soft from '../../../public/assets/software.png'
import Image from 'next/image';

const rale = Raleway({ subsets: ["latin"] });
function Software() {
  return (
    <main className='soft w-full flex flex-col items-center'>
       
        <div className='relative w-full flex flex-col items-center'>
                <div className='w-[80%] flex justify-between mb-10 items-center'>
                    <h2 className='text-[35px] font-[700]'>We Deliver software <br /> solutions that drive change.</h2>
                    <button className={`${rale.className} bg-[#fff] text-[#048392] rounded-[35px] h-[33px] px-6`}>Get Started {'>'} </button>
                </div>
        </div>

    </main>
  )
}

export default Software