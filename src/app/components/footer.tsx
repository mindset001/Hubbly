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
    <footer className='bg-footer w-full ' >
      <div className=' w-full flex flex-col  items-center' >
      <div className='mb-2 flex flex-col items-center'>
            <Image src ={Foot} alt='' className='w-[200px] h-[95px]'/>
            <h1 className={`${rale.className}  text-[35px] font-[700] text-[#000000]`}>Ready To Get Started?</h1>
            
        </div>
        <div className=' w-[50%] flex justify-between my-5'>
            <div className='text-[#000] text-center flex flex-col items-center'>
            <Image src ={Phone} alt='' className='w-[68px] h-[68px]'/>
            
            <h2 className={`${rale.className}  my-4 font-[700] text-[18px]`}>0115 990 2076</h2>
            <h3 className={`${rale.className}  font-[400] text-[18px]`}>Our Phone</h3>
            </div>
            <div className='text-[#000] text-center flex flex-col items-center'>
            <Image src ={Msg} alt='' className='w-[68px] h-[68px]'/>
            <h2 className={`${rale.className}  my-4 font-[700] text-[18px]`}>info@hubbly.me</h2>
            <h3 className={`${rale.className}  font-[400] text-[18px]`}>Our Email</h3>
            </div>
        </div>
        <div className=''>
        <ul className='flex flex-row gap-3 text-[#048392] text-[16px] font-[700]'>
                            {Navcontent.map((item, i: number) => (
                                <li className={`${rale.className}  mt-4 text-center`}><Link href={item.link}>{item.name}</Link></li>
                            ))}

                        </ul>
                        <p className={`${rale.className}  mt-4 text-center text-[#000000] font-[400] text-[14px]`}>Copyright © <span>{`${year} Engitech by OceanThemes. All Rights reserved.`}</span> </p>
                      
        </div>
        <div className='flex mt-[20px]'>
            <Link href='https://www.facebook.com/profile.php?id=61558480744783'>
            <Image src={One} alt='' />
            </Link>
            <Link href='https://www.instagram.com/hubbly.me?igsh=NnZtend5eTYxM2Uw'>
            <Image src={Two} alt=''/>
            </Link>
            <Link href='https://x.com/hubbly_me?s=11&t=4JYfgftpeTz1tm8RUy5_iQ'>
            <Image src={Three} alt=''/>
            </Link>
            <Link href='https://www.linkedin.com/company/hubbly-me/'>
            <Image src={Four} alt=''/>
            </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const Navcontent = [
    {
        link: '/about',
        name: 'About Us'
    },
    {
        link: '#services',
        name: 'Our Services'
    },
    {
        link: '#competencies',
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