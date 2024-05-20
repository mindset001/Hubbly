'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Foot from "../../../public/assets/Hubbly 1.png"
import Phone from "../../../public/assets/phone.png"
import Msg from "../../../public/assets/msg.png"
import Hero from '../../../public/assets/footer.png'
import One from '../../../public/assets/Group 5.png'
import Two from '../../../public/assets/Group 11.png'
import Three from '../../../public/assets/Group 10.png'
import Four from '../../../public/assets/Group 9.png'
import Link from 'next/link'
import { Raleway } from 'next/font/google'

export const rale = Raleway({ subsets: ["latin"] });
function Footer() {
    
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);
  return (
    <main className='w-full flex flex-col justify-center items-center' >
         <div className='absolute w-full'>
                <Image src={Hero} alt='' className='w-[100%]'/>
            </div>
      <div className='relative w-full flex flex-col justify-center items-center'>
      <div className='mb-6'>
            <Image src ={Foot} alt=''/>
            <h1 className={`${rale.className}  text-[35px] font-[700] text-[#000000]`}>Ready To Get Started?</h1>
            
        </div>
        <div className=' w-[50%] flex justify-between my-10'>
            <div className='text-[#000] text-center'>
            <Image src ={Phone} alt=''/>
            
            <h2 className={`${rale.className}  my-6 font-[700] text-[18px]`}>0115 990 2076</h2>
            <h3 className={`${rale.className}  font-[400] text-[18px]`}>Our Phone</h3>
            </div>
            <div className='text-[#000] text-center'>
            <Image src ={Msg} alt=''/>
            <h2 className={`${rale.className}  my-6 font-[700] text-[18px]`}>info@hubbly.me</h2>
            <h3 className={`${rale.className}  font-[400] text-[18px]`}>Our Email</h3>
            </div>
        </div>
        <div className=''>
        <ul className='flex flex-row gap-3 text-[#048392] text-[16px] font-[700]'>
                            {Navcontent.map((item, i: number) => (
                                <li className={`${rale.className}  mt-4 text-center`}><Link href={item.link}>{item.name}</Link></li>
                            ))}

                        </ul>
                        <p className={`${rale.className}  mt-4 text-center text-[#000000] font-[400] text-[14px]`}>Copyright © 2024 Engitech by OceanThemes.<span>{`${year} All Rights reserved.`}</span> </p>
                      
        </div>
        <div className='flex mt-[60px]'>
            <Link href=''>
            <Image src={One} alt=''/>
            </Link>
            <Link href=''>
            <Image src={Two} alt=''/>
            </Link>
            <Link href=''>
            <Image src={Three} alt=''/>
            </Link>
            <Link href=''>
            <Image src={Four} alt=''/>
            </Link>
        </div>
      </div>
    </main>
  )
}

export default Footer

const Navcontent = [
    {
        link: '/',
        name: 'About Us'
    },
    {
        link: '#about',
        name: 'Our Services'
    },
    {
        link: '#values',
        name: 'Core Competencies'
    },
    {
        link: '#contact',
        name: 'Contact Us'
    },
    {
        link: '#team',
        name: 'Privacy Policy'
    },
    {
        link: '#team',
        name: 'Terms & conditions'
    }

]