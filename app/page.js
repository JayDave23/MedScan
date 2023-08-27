import { devIndicators } from '@/next.config'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    {/* <div className='w-[40vw]'>
      <h2 className='inline font-sans fon text-[10vh]'>MedScan</h2>
      5f7470
      d2d4c8

    </div> */}
    
    <div className='flex'>
    <div className=''>
      <Image
      src="/image.jpg"
      width={500}
      height={500}
      className='inline'
       />
    </div>
    <div className='h-[50vh] '>
      <h2 className='mt-[20vh] ml-[25vw] font-sans fon text-[10vh] font-extrabold text-[#5f7470] '>MedScan</h2>
      <header className="mb-16 group">
  <h1 className="mb-1 font-mono text-4xl text-[#5F7470] md:text-6vh ml-[30vw]">
     <br className="block md:hidden" />
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    >
      MEDICAL GOING DIGITAL
    </span>
    <span
      className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
    ></span>
  </h1>
  
</header>
    </div>
    </div>

    

    </>
    
  )
}
