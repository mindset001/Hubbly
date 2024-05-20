import React from 'react'

function Services() {
  return (
    <main className='w-full bg-[#E7FCFD] text-[#000] flex flex-col items-center py-10'>
      <div className='w-[80%]'>
        <div className='w-full flex flex-col items-center'>
          <div className='bg-[#048392] h-[4px] w-[151px]'></div>
          <h2 className='text-[35px] font-[700] mt-4'>Our Services</h2>
        </div>

        <div className='mt-10  mb-[20%]'>
        <div className='flex flex-col gap-3 text-[16px] font-[700] '>
                    {serviceContent.map((item, i: number) => (
                       <div className='group border-b pb-6 hover:border-[#979797] border-[#000000]'>
                           <h3 className='text-[50px] font-[700] hover:text-[#048392] hover:underline'>{item.title}</h3>
                        <p className=' text-[18px] font-[300]'>{item.subtitle}</p>
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
    title: 'API Integration Services',
    subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
  title: 'API Integration Services',
  subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
  title: 'API Integration Services',
  subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
  title: 'API Integration Services',
  subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
  title: 'API Integration Services',
  subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
  title: 'API Integration Services',
  subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
title: 'API Integration Services',
subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
title: 'API Integration Services',
subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
title: 'API Integration Services',
subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
title: 'API Integration Services',
subtitle: 'Seamlessly connect your systems and enhance functionality.'
},
{
title: 'API Integration Services',
subtitle: 'Seamlessly connect your systems and enhance functionality.'
},

]