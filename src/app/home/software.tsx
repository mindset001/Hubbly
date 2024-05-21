
import React from 'react'
import Soft from '../../../public/assets/software.png'
import Image from 'next/image';

function Software() {
  return (
    <main className='w-full flex flex-col items-center'>
        <div className='w-[70%] flex flex-col items-center'>
            <div className='w-[80%] p-10 absolute'>
                <Image src={Soft} alt=''/>
            </div>
                <div className='w-[80%] relative flex justify-between mb-10 items-center'>
                    <h2 className='text-[35px] font-[700]'>We Deliver software <br /> solutions that drive change.</h2>
                    <button className=' bg-[#fff] text-[#048392] rounded-[35px] h-[33px] px-6'>Get Started {'>'} </button>
                </div>
        </div>

    </main>
  )
}

export default Software