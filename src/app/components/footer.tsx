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
import { Link } from 'react-scroll';
import { CiLocationOn } from "react-icons/ci";
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
            <h1 className={`${rale.className} text-[18px] lg:text-[35px] font-[700] text-[#000000]`}>Ready To Get Started?</h1>
            
        </div>
        <div className=' w-[50%] flex justify-between my-5'>
            <div className='text-[#000] text-center flex flex-col items-center'>
            <Image src ={Phone} alt='' className='w-[68px] h-[68px]'/>
            
            <h2 className={`${rale.className}  my-4 font-[700] text-[12px] lg:text-[18px]`}>0115 990 2076</h2>
            <h3 className={`${rale.className}  font-[400] text-[10px] lg:text-[18px]`}>Our Phone</h3>
            </div>
            <div className='text-[#000] text-center flex flex-col items-center'>
            <div className='h-[70px] w-[70px] rounded-full bg-[#038293] flex items-center justify-center'>
            <CiLocationOn size="2rem" className=' text-[white] font-bold'/>
            </div>
            <h2 className={`${rale.className}  my-4 font-[700] text-[12px] lg:text-[18px]`}>61 Bridge Street, KINGTON, <br />United Kingdom</h2>
            <h3 className={`${rale.className}  font-[400] text-[10px] lg:text-[18px]`}>Our Address</h3>
            </div>
            <div className='text-[#000] text-center flex flex-col items-center'>
            <Image src ={Msg} alt='' className='w-[68px] h-[68px]'/>
            <h2 className={`${rale.className}  my-4 font-[700] text-[12px] lg:text-[18px]`}>info@hubbly.me</h2>
            <h3 className={`${rale.className}  font-[400] text-[10px] lg:text-[18px]`}>Our Email</h3>
            </div>
        </div>
        <div className=''>
        <ul className='grid grid-cols-3 lg:grid-cols-5 gap-2 text-[#048392] text-[10px] lg:text-[16px] font-[700]'>
                            {Navcontent.map((item, i: number) => (
                                <li className={`${rale.className}  mt-4 text-center`}><Link to={item.link}
                                smooth={true}
                                duration={500}
                                className='cursor-pointer'>{item.name}</Link></li>
                            ))}

                        </ul>
                        <p className={`${rale.className}  mt-4 text-center text-[#000000] font-[400] text-[10px] lg:text-[14px]`}>Copyright © <span>{`${year} Hubbly.me Ltd. All Rights reserved.`}</span> </p>
                      
        </div>
        <div className='flex mt-[20px]'>
            <Link to='https://www.facebook.com/profile.php?id=61558480744783'>
            <Image src={One} alt='' />
            </Link>
            <Link to='https://www.instagram.com/hubbly.me?igsh=NnZtend5eTYxM2Uw'>
            <Image src={Two} alt=''/>
            </Link>
            <Link to='https://x.com/hubbly_me?s=11&t=4JYfgftpeTz1tm8RUy5_iQ'>
            <Image src={Three} alt=''/>
            </Link>
            <Link to='https://www.linkedin.com/company/hubbly-me/'>
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
        link: 'hero',
        name: 'Home'
    },
 
    {
        link: 'about',
        name: 'About Us'
    },
    {
        link: 'competencies',
        name: 'Our Services'
    },
    {
        link: 'product',
        name: 'Portfolio'
    },
    {
        link: 'contact',
        name: 'Contact Us'
    }

]