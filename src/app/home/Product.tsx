import React from 'react'
import Logo from '../../../public/assets/Rectangle 21836 (1).png'
import Image from 'next/image'

function Product() {
  return (
    <main className='bg-[#000] w-full flex flex-col items-center text-[#000] py-10'>
        <div className='w-[80%] flex flex-col items-center'>
            <h1 className='text-[35px] font-[700] text-[#fff]'>Products/Solutions</h1>

            <div className='mt-10'>
        <div className='flex flex-row gap-3 text-[16px] font-[700] '>
                    {solutions.map((item, i: number) => (
                       <div className=' text-[#fff] text-center flex flex-col items-center'>
                        <div className='bg-white rounded-lg flex justify-center w-[170px]'>
                        <Image src={Logo} alt='' className='w-[154px] h-[130px]'/>
                        </div>
                           <h3 className='text-[20px] font-[700] my-6'>{item.title}</h3>
                        <p className=' text-[18px] font-[300]'>{item.subtitle}</p>

                        <div className='bg-[#048392] rounded-[35px] w-[149px] h-[33px] flex items-center justify-center mt-6'>Learn More {'>'} </div>
                       </div>
                    ))}

                </div>
        </div>
        </div>
    </main>
  )
}

export default Product

const solutions = [
    {
        title: 'Hubbly App',
        subtitle: 'Get the household help you need with our intuitive app.',
        link: ""
    },
    {
        title: 'Hubbly App',
        subtitle: 'Get the household help you need with our intuitive app.',
        link: ""
    },
    {
        title: 'Hubbly App',
        subtitle: 'Get the household help you need with our intuitive app.',
        link: ""
    },
    {
        title: 'Hubbly App',
        subtitle: 'Get the household help you need with our intuitive app.',
        link: ""
    },
  
  
  ]