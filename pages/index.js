
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import nyn from '../public/nyn.gif'
import Guide from './guide.js'
import Header from '../components/header'
import About from './about'

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
 <div className='flex flex-col items-center justify-center w-full h-screen space-y-3 lg-flex-row pb-45 gap-0 '>
<Image src={nyn} width={'150%'} height={'150%'} />
<>
{/* Welcome msg */}
   <h1>
   いらしゃいませ！ <br />
      <p className=' px-6'> Welcome! </p>
   </h1>
   </>
{/* Presentation */}
<>
<p>
  Start your Japanese Learning Journey right away! <br />
  Read our community driven guide down below! &#11015;
</p>
</>
{/* Button */}
<>
<Link href='./guide'>
 <button className=' bg-cyan-800  rounded-md text-slate-300 hover:bg-cyan-700 flex shadow-sm scroll-m-10 p-3 '>&#9961; Japanese Guide </button></Link>
<br></br>
</>
 </div></>

 

  )
}