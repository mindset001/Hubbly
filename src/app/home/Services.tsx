import React from 'react'
import { Raleway } from 'next/font/google';
import Software from './software';
export const rale = Raleway({ subsets: ["latin"] });
function Services() {
  return (
    <main className='w-full bg-[#E7FCFD] text-[#000] flex flex-col items-center py-10'>
      <div className='w-[80%]'>
        <div className='w-full flex flex-col items-center'>
          <div className='bg-[#048392] h-[4px] w-[151px]'></div>
          <h2 className='text-[35px] font-[700] mt-4'>Our Services</h2>
        </div>

        <div className='my-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 text-[16px] font-[700] '>
                    {serviceContent.map((item, i: number) => (
                       <div className='group border-b pb-6 hover:border-[#979797] border-[#000000]'>
                           <h3 className='text-[30px] font-[700] hover:text-[#048392] hover:underline'>{item.title}</h3>
                        <p className= {`${rale.className} text-[16px] font-[300]`}>{item.subtitle}</p>
                       
                       </div>
                    ))}

                </div>
        </div>

      </div>
      

    </main>
  )
}

export default Services


const serviceContent = [
  {
      title: 'API Integration Services',
      subtitle: 'Seamlessly connect your systems and enhance functionality.'
  },
  {
    title: 'Product Discovery Phase',
    subtitle: 'Identify key objectives and map out a roadmap for success.'
},
{
  title: 'Software Re-Engineering',
  subtitle: 'Upgrade and optimize your existing software for enhanced performance.'
},
{
  title: 'Application Modernization Services',
  subtitle: 'Stay ahead with cutting-edge technology and user-centric design.'
},
{
  title: 'Software Product Development',
  subtitle: 'From concept to execution, we bring your ideas to life.'
},
{
  title: 'CTO as a Service for Start-Ups',
  subtitle:  "Get expert guidance and technical leadership tailored to your startup's needs."
},
{
  title: 'Offshore Development Services',
  subtitle: 'Access top-tier talent while optimizing costs.'
},
{
  title: 'API Integration Services',
  subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
title: 'Product Discovery Phase',
subtitle: 'Identify key objectives and map out a roadmap for success.'
},
{
title: 'Software Re-Engineering',
subtitle: 'Upgrade and optimize your existing software for enhanced performance.'
},
{
title: 'Application Modernization Services',
subtitle: 'Stay ahead with cutting-edge technology and user-centric design.'
},
{
title: 'Software Product Development',
subtitle: 'From concept to execution, we bring your ideas to life.'
},
{
title: 'CTO as a Service for Start-Ups',
subtitle: "Get expert guidance and technical leadership tailored to your startup's needs."
},
{
title: 'Offshore Development Services',
subtitle: 'Access top-tier talent while optimizing costs.'
},

]