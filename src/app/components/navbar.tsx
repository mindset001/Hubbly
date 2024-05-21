import React from 'react'
import Logo from '../../../public/assets/Hubbly 1.png'
import Image from 'next/image'
import Hero from '../../../public/assets/hero.png'
import Link from 'next/link'
import { rale } from '../layout'

function Navbar() {
    return (
        <main className=' h-[100vh] w-full flex flex-col justify-between items-center'>
            <div className='absolute z-0'>
                <Image src={Hero} alt=''/>
            </div>
            <div className='relative w-[90%] h-[100vh] flex flex-col justify-between'>
            <div className='w-full flex flex-row justify-between z-1000'>
            <Image src={Logo} alt='' className='w-[120px] h-60.86px]'/>
            <div className='mt-6'>
                <ul className='flex flex-row gap-3 text-[#fff] text-[16px] font-[700]'>
                    {Navcontent.map((item, i: number) => (
                        <li><Link href={item.link}>{item.name}</Link></li>
                    ))}

                </ul>


            </div>
            </div>

            <div className='h-[65%] w-[84%] flex flex-col'>
                <p  className={rale.className}>welcome to hubbly.me</p>
                <h1 className='text-[48px] font-[700]'>Where Innovation <br /> Meets Efficiency In <br /> Software Development.</h1>
            </div>
            </div>
        </main>
    )
}

export default Navbar

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
    }

]