'use client'
import NavbarSpace from '@/components/NavbarSpace'
import { crew, crewType } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
    data: crewType
}

function Crew({ data }: Props) {
    

  const [crewMembers, setCrewMember] = useState(data)
  const [value, setValue] = useState(0)

  const { name, images, role, bio } = crewMembers[value]
  
  function inc() {
    setValue(prev=> prev < 3 ? prev + 1 : 0)
  }
  
  function dec() {
    setValue(prev=> prev === 0 ? 3 :  prev -1)
  }

  return (
      <section className=' text-slate-300 lg:h-screen relative w-[100vw] overflow-hidden' >
        
        <Image src='/assets/crew/background-crew-desktop.jpg' className='-z-10 hidden lg:block' alt='image' fill/>
        <Image src='/assets/crew/background-crew-tablet.jpg' className='-z-10 hidden md:block lg:hidden' alt='image' fill/>
        <Image src='/assets/crew/background-crew-mobile.jpg' className='-z-10 block md:hidden' alt='image' fill />

            <NavbarSpace/>

      
        
      

      <h1 className='p-2 md:p-4 ml-2 text-xl md:text-2xl lg:text-3xl font-medium md:ml-4'>
        <span>0{ value}</span> Meet your crew
       
              </h1>
    
      <div className='flex flex-col lg:flex-row mx-12 te text-center lg:text-left'>

            <div className='flex-1 my-4 lg:my-0 lg:mt-10'>

                      <h2 className='fo font-medium text-xl md:text-2xl lg:text-4xl'>
                          {role}
                      </h2>
                      <h1 className='b font-bold text-3xl md:text-4xl lg:text-6xl my-3'>
                            {name}
                      </h1>
                      <p className='lg:mb-16'>
                       {bio} 
          </p>
          
          <div className='my-3 md:my-4 lg:my-0 gap-2 flex items-center justify-center lg:justify-start'>
              <button className='mx-10 cursor-pointer' onClick={dec}>{'<'}</button>  
              
            {crew.map((p, i) => (
              <div key={i} className='rounded-full m-1 md:m-2 w-3 h-3'
                style={{
                background: value === i ? 'white' : 'gray'
              }}
              onClick={()=>setValue(i)}
              >
               <span className='text-transparent cursor-pointer'  onClick={()=>setValue(i)}> {i}</span>
                  </div>
                ))}
          
                <button className='mx-10 cursor-pointer' onClick={inc}>{'>'}</button>  
        
          </div>
        </div>
        
           <div className='flex-1 relative w-full grid place-items-center my-4'>
                      
                  <Image src={images} alt='mars image' width={300} height={300} className='contain'/>
            </div>
                 

          
      </div>
    </section>
  )
}

export default Crew