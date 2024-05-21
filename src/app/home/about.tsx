'use client'
import React from 'react'
import Image from 'next/image'
import Girl from '../../../public/assets/CIRCLE IMAGE.png'
import Bend from '../../../public/assets/Group 143725868.png'
import Arrow from '../../../public/assets/arrow.png'
import { Raleway } from 'next/font/google'
import { CountUp } from 'use-count-up'

const rale = Raleway({ subsets: ["latin"] });

const onComplete = () => {
  // do your stuff here
  return { shouldRepeat: true, delay: 2 }
}
function About() {
  return (
    <main className='w-full flex flex-col bg-[#fff] text-[#000] items-center'>
      <div className='w-[90%] flex flex-row justify-between py-10'>
        <div className='w-[50%] flex flex-col items-center'>
         <div className='w-[80%]'>
         <div >
            <h2 className='text-[35px] font-[700] border-t-[3px] border-[#048392] w-[160px]'>About us</h2>
          </div>
          <h1 className='text-[#048392] text-[35px] mt-6 font-[700] mb-6'>We're your tech- <br />driven business ally.</h1>
          <div>
              <div className='mb-10'>
              <p className={rale.className}>Hubbly.Me is your go-to partner for cutting-edge software development solutions,
               dedicated to empowering businesses and individuals through technology. Our team, 
               comprised of skilled professionals across various fields, is committed to excellence 
               and collaboration. We tailor our approach to each project, ensuring personalized solutions that exceed expectations.</p>
              </div>
               <p className={rale.className}>What sets us apart is our unwavering focus on client value,
                 built on integrity, transparency, and trust. We forge strong
                  partnerships, prioritizing open communication and shared goals. 
                  Whether you're a startup or an established enterprise, Hubbly.Me 
                  is here to turn your vision into reality, leveraging technology to
                   drive innovation and growth. Join us on this journey towards a brighter, tech-powered future. Welcome to Hubbly.Me.</p>
          </div>
         </div>
          <div className='mt-[-2%] w-[] '>
            <Image src={Arrow} alt='' className='w-[60%]'/>
          </div>

        </div>

        <div className='w-[45%]'>
          <div className='flex flex-row items-end justify-end'>
            <Image src={Bend} alt='' className='w-[230px] h-[200px]' />
          </div>
          <div>
            <Image src={Girl} alt='' className='w-[381px] h-[381px] mt-[-15%]' />
          </div>
          <div className='mt-6 flex gap-4'>
            <div className='rounded-lg bg-[#048392] text-[#A8E6E9] h-[92px] w-[102px] flex flex-col items-center justify-center'>
            <h1 className='font-[700] text-[30px] md:text-[30px]'><CountUp isCounting end={80} duration={3.2} onComplete={onComplete}/>+</h1>
                <p className={`${rale.className} text-[14px] font-[700]`}>Employees</p>
            </div>
            <div className='rounded-lg bg-[#A8E6E9] text-[#fff] h-[92px] w-[102px] flex flex-col items-center justify-center'>
            <h1 className='font-[700] text-[30px] md:text-[30px]'><CountUp isCounting end={10} duration={3.2} onComplete={onComplete}/>+</h1>
                <p className={`${rale.className} text-[14px] font-[700]`}>Locations</p>
            </div>
            <div className='rounded-lg bg-[#048392] text-[#A8E6E9] h-[92px] w-[102px] flex flex-col items-center justify-center'>
            <h1 className='font-[700] text-[30px] md:text-[30px]'><CountUp isCounting end={500} duration={3.2} onComplete={onComplete}/>+</h1>
                <p className={`${rale.className} text-[14px] font-[700]`}>Projects</p>
            </div>
            <div className='rounded-lg bg-[#A8E6E9] text-[#fff]  h-[92px] w-[102px] flex flex-col items-center justify-center'>
            <h1 className='font-[700] text-[30px] md:text-[30px]'><CountUp isCounting end={321} duration={3.2} onComplete={onComplete}/>+</h1>
                <p className={`${rale.className} text-[14px] font-[700]`}>Clients</p>
                {/* {`${rale.className} text-[14px] font-[700]`} */}
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-4 mb-10'>
          <h4 className={`${rale.className} text-[#9DA4AE] text-[35px] font-[700]`} >LOGO</h4>
          <h4 className={`${rale.className} text-[#9DA4AE] text-[35px] font-[700]`} >LOGO</h4>
          <h4 className={`${rale.className} text-[#9DA4AE] text-[35px] font-[700]`} >LOGO</h4>
          <h4 className={`${rale.className} text-[#9DA4AE] text-[35px] font-[700]`} >LOGO</h4>
          <h4 className={`${rale.className} text-[#9DA4AE] text-[35px] font-[700]`} >LOGO</h4>
          
      </div>
    </main>
  )
}

export default About