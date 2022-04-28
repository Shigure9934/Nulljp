
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import nyn from '../public/nyn.gif'
import Guide from './guide.js'
import Header from '../components/header'
import About from './about'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <><div className={styles.container}>
      {/* title etc */}
      <Head>
        <title>Nullsite</title>
        <meta name="description" content="A Guide to learn Japanese!" />
        <link rel="icon" href="/icons8-カタカナのヌ-16.png" />
      </Head>
      <div>
      {/* header section */}
      <Header />
      </div>
    </div>
    
 {/* Main image */}.
 
 <div className='flex flex-col items-center justify-center w-full  space-y-3 lg-flex-row gap-0 '>
 <Image src={nyn} width={'150%'} height={'150%'} />
 <motion.div initial="hidden" animate="visible" variants={{

hidden: {
  opacity: 0,
  scale: .8
},
visible: {
  opacity: 1,
  scale: 1,
  transition: {
    delay: .4,
  }
},
}}> 
<>
{/* Welcome msg */}
   <h1 className=' lg:px-44 sm:pb-7 px-8 text-xl'>
   いらしゃいませ！< br/>
      <p className='text-xl px'> Welcome! </p> <br />
   </h1>
   </>
{/* Presentation */}
<>
<p className='pb-7 px-8 text-xl'>
  Start your Japanese Learning Journey right away! <br />
  Read our community driven guide down below! 
</p>
</>
{/* Button */}
<>
<motion.div whileHover={{
  scale: 1.1,
          }}>
 <div className='px-8 '>
<Link href='./guide'>
 <button className='  bg-slate-700 rounded-md text-slate-300 hover:bg-slate-500 flex shadow-sm scroll-m-10 p-2 '>&#9961; Japanese Guide </button></Link>
</div>
<br></br>
</motion.div>
</>
</motion.div>
 </div></>

 

  )
}