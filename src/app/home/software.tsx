import { Raleway } from 'next/font/google';
import React from 'react'
import Soft from '../../../public/assets/software.png'
import Image from 'next/image';
import Link from 'next/link';

const rale = Raleway({ subsets: ["latin"] });
function Software() {
  return (
    <main className='soft w-full flex flex-col items-center'>
       
        <div className='relative w-full flex flex-col items-center'>
                <div className='w-[90%] flex justify-between lg:mb-10 items-center'>
                    <h2 className='text-[12px] lg:text-[35px] font-[700] text-[#fff]'>We Deliver software <br /> solutions that drive change.</h2>
                    <button className={`${rale.className} bg-[#fff] text-[#048392] rounded-[35px] text-[8px] lg:text-[26px] px-2 lg:px-6`}><Link href='#contact'>Get Started {'>'} </Link></button>
                </div>
        </div>

    </main>
  )
}

export default Software