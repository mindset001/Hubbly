import React from 'react'
import Phy from '../../../public/assets/phyton.png'
import Buss from '../../../public/assets/buss.png'
import Tech from '../../../public/assets/tech.png'
import Ui from '../../../public/assets/uidesign.png'
import Qa from '../../../public/assets/qa.png'
import Digi from '../../../public/assets/digital.png'
import Web from '../../../public/assets/web.png'
import Dev from '../../../public/assets/devops.png'
import Front from '../../../public/assets/front.png'
import Cloud from '../../../public/assets/cloud.png'
import Image from 'next/image'
import { Raleway } from 'next/font/google';


import One from '../../../public/assets/Frame 404.png'

const rale = Raleway({ subsets: ["latin"] });
function Competences() {
  return (
    <main className='comp w-full flex flex-col justify-center items-center py-10 text-[#000]'>
     
        <div className=' w-[80%]'>
        <div className='w-full flex flex-col items-center'>
          <div className='bg-[#048392] h-[4px] w-[151px]'></div>
          <h2 className='text-[35px] font-[700] mt-4'>Our Services</h2>
        </div>
        <div>
                    <Image src={One} alt='' className='w-[90px] h-[90px]' />
                </div>
        <div className='mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 mb-10'>
                    {core.map((item, i: number) => (
                       <div className='border border-[#E7DAED] rounded-[1px] w-[100%] h-[56px] px-10 flex flex-row items-center hover:shadow-lg  hover:border-l-2 hover:border-[#048392]'>
                        <Image src={item.img} alt='' width={20} height={20}/>
                           <h3 className={`${rale.className} text-[16px] lg:text-[20px] font-[600] ml-4`}>{item.title}</h3>
                           
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
        img: Buss
    },
    {
        title: 'Back-End Development',
        img: Phy
    },
    {
        title: 'Technical Support',
        img: Tech
    },
    {
        title: 'UI/UX Design',
        img: Ui
    },
    {
        title: 'QA & Testing',
        img: Qa
    },
    {
        title: 'Digital Transformation Consulting',
        img: Digi
    },
    {
        title: 'Web Design',
        img: Web
    },
    {
        title: 'DevOps',
        img: Dev
    },
    {
        title: 'Front-End Development',
        img: Front
    },
    {
        title: 'Cloud Solutions',
        img: Cloud
    },
   
  ]