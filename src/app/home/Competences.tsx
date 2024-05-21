import React from 'react'
import Phy from '../../../public/assets/phyton.png'
import Image from 'next/image'
import { Raleway } from 'next/font/google';
import Comp from '../../../public/assets/Rectangle 4346.png'
import Software from './software';

import One from '../../../public/assets/Frame 404.png'

const rale = Raleway({ subsets: ["latin"] });
function Competences() {
  return (
    <main className='comp w-full flex flex-col justify-center items-center py-10 text-[#000]'>
     
        <div className=' w-[80%]'>
        <div className='w-full flex flex-col items-center'>
          <div className='bg-[#048392] h-[4px] w-[151px]'></div>
          <h2 className='text-[35px] font-[700] mt-4'>Core Competencies</h2>
        </div>
        <div>
                    <Image src={One} alt='' className='w-[110px] h-[110px]' />
                </div>
        <div className='mt-10'>
        <div className='grid grid-cols-2 gap-3 mb-10'>
                    {core.map((item, i: number) => (
                       <div className='border border-[#E7DAED] rounded-[1px] w-[100%] h-[56px] px-10 flex flex-row items-center hover:shadow-lg  hover:border-l-2 hover:border-[#048392]'>
                        <Image src={item.img} alt='' width={20} height={20}/>
                           <h3 className={`${rale.className} text-[20px] font-[600] ml-4`}>{item.title}</h3>
                           
                       </div>
                    ))}

                </div>
        </div>
        </div>

    </main>
  )
}

export default Competences


const core = [
    {
        title: 'Business Analysis',
        img: Phy
    },
    {
        title: 'Back-End Development',
        img: Phy
    },
    {
        title: 'Technical Support',
        img: Phy
    },
    {
        title: 'UI/UX Design',
        img: Phy
    },
    {
        title: 'QA & Testing',
        img: Phy
    },
    {
        title: 'Digital Transformation Consulting',
        img: Phy
    },
    {
        title: 'Web Design',
        img: Phy
    },
    {
        title: 'DevOps',
        img: Phy
    },
    {
        title: 'Front-End Development',
        img: Phy
    },
    {
        title: 'Cloud Solutions',
        img: Phy
    },
   
  ]