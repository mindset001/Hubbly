import React from 'react'
import Phy from '../../../public/assets/phyton.png'
import Image from 'next/image'

function Competences() {
  return (
    <main className='bg-[#048392] w-full flex flex-col justify-center items-center py-10'>
        <div className='w-[80%]'>
        <div className='w-full flex flex-col items-center mt-[20%]'>
          <div className='bg-[#048392] h-[4px] w-[151px]'></div>
          <h2 className='text-[35px] font-[700] mt-4'>Core Competences</h2>
        </div>

        <div className='mt-10'>
        <div className='grid grid-cols-2 gap-3'>
                    {core.map((item, i: number) => (
                       <div className='border border-[#E7DAED] rounded-[1px] w-[100%] h-[56px] px-10 flex flex-row items-center'>
                        <Image src={item.img} alt='' width={20} height={20}/>
                           <h3 className='text-[20px] font-[600] '>{item.title}</h3>
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