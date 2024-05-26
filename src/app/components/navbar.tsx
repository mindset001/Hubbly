'use client'
import React, { useState } from 'react'
import Logo from '../../../public/assets/Hubbly 1.png'
import Image from 'next/image'
import Hero from '../../../public/assets/hero.png'
import Men from '../../../public/assets/Menu@2x.png'
import Link from 'next/link'
import { Raleway, Inter } from 'next/font/google'

const rale = Raleway({ subsets: ["latin"] });
const inter = Inter({subsets: ["latin"]})

function Navbar() {
    const [show, setShow] =useState(true)
    const [hide, setHide] = useState(false)

    const handleShow = ()=>{
        setHide(true)
        setShow(false)
    }
    const handleHide = ()=>{
        setShow(true)
        setHide(false)
    }
    return (
        <main className='hero w-full flex flex-col justify-between items-center'>
            <div className='relative w-[90%] h-[100vh] flex flex-col justify-between'>
            <div className='w-full flex flex-row justify-between z-1000'>
            <div>
            <Image src={Logo} alt='' className='w-[120px] h-60.86px]'/>
            </div>
            <div className='block lg:hidden'>
                {show && <div onClick={handleShow}>
                <Image src={Men} alt=''/>
                </div>}

                {hide && 
                <div onClick={handleHide}>
                    <p className={`{rale.className} text-[80px] font-[700] mt-[-30px]`}>x</p>
                </div>}
            </div>
           
            
            <div className='hidden lg:block mt-6'>
                <ul className='flex flex-row gap-3 text-[#fff] text-[16px] font-[700]'>
                    {Navcontent.map((item, i: number) => (
                        <li className={inter.className}><Link href={item.link}>{item.name}</Link></li>
                    ))}

                </ul>


            </div>
            
            </div>
            {hide && <div className='bg-white p-6 absolute right-0 top-12 block lg:hidden mt-6'>
                <ul className='flex flex-col gap-3 text-[#000] text-[16px] font-[700]'>
                    {Navcontent.map((item, i: number) => (
                        <li className={inter.className}><Link href={item.link}>{item.name}</Link></li>
                    ))}

                </ul>


            </div>}
            <div className='h-[65%] w-full lg:w-[84%] flex flex-col text-[#fff]'>
                <p  className={`{rale.className} block md:hidden`}>welcome to <br />hubbly.me</p>
                <p  className={`{rale.className} hidden md:block`}>welcome to hubbly.me</p>
                <h1 className='block md:hidden text-[32px] lg:text-[48px] font-[700]'>Where <br /> Innovation <br /> Meets Efficiency In Software Development.</h1>
                <h1 className='hidden md:block text-[36px] lg:text-[48px] font-[700]'>Where Innovation <br /> Meets Efficiency In <br /> Software Development.</h1>
            </div>
            </div>
        </main>
    )
}

export default Navbar

const Navcontent = [
    {
        link: '#about',
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
        link: '#products',
        name: 'Products'
    },
    {
        link: '#contact',
        name: 'Contact Us'
    }

]