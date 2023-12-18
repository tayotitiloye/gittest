'use client'
import NavbarSpace from '@/components/NavbarSpace'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
      
      {/* space travel */}
      <section className=' text-slate-300 h-screen relative w-[100vw] overflow-hidden' >
        
        <Image src='/assets/home/background-home-desktop.jpg' className='-z-10 hidden lg:block' alt='image' fill/>
        <Image src='/assets/home/background-home-tablet.jpg' className='-z-10 hidden md:block lg:hidden' alt='image' fill/>
        <Image src='/assets/home/background-home-mobile.jpg' className='-z-10 block md:hidden' alt='image' fill />

         
        {/* navbar */}
        <NavbarSpace/>
     
        <div className='flex gap-4 flex-col lg:flex-row'>
          
          <div className='flex-1'>
            
           
                        <div className='flex flex-col gap-2 lg:gap-5 items-center justify-center lg:mt-[100px] lg:ml-[140px] w-auto'>

                              

                                    <p className=' uppercase lg:w-full lg:text-2xl '>

                                          So, you want to travel to
                                    </p>
                                    <h1 className='font-medium text-white text-[70px] lg:text-[100px] uppercase lg:w-full'>

                                          Space
                                    </h1>
                              
                              <div className='w-[335px] md:w-[500px] md:text-base text-sm text-center mb-5'>

                                  Let’s face it; if you want to go to space, you might as well genuinely go to
                                  outer space and not hover kind of on the edge of it. Well sit back, and relax
                                  because we’ll give you a truly out of this world experience!
                              </div>

                        </div>
         </div>
 
          <div className='flex-1 grid place-items-center'>
           
            {/* <div className='rounded-full border-2 text-4xl mt-72 bg-white w-56 h-56 ml-44'> */}
              <div className='bg-white lg:absolute text-black grid place-items-center rounded-full mb-5 mt-6 lg:text-2xl uppercase right-36 bottom-20 h-[140px] w-[140px] lg:w-[180px] lg:h-[180px]'>

                Explore
              </div>
            </div>
        </div>

      </section>
    </main>
  )
}




