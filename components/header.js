import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


    function Header() {
    return (
          <motion.div whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: 1.1,
          }}>

        <header className='flex justify-evenly  m-auto md-header_ellipsis text-slate-100 px-15 pt-5 pb-3.5' href="/index"> 
        <button className=' shadow-sm hover:text-slate-300'>
           <Link className=' ' href='/'>ヌル</Link>
        </button>
        <button className='  shadow-sm hover:text-slate-300'>
            <Link className='' href='/about'>About</Link>
        </button>
        
        <button className=' shadow-sm hover:text-slate-300'>
        <Link className=' ' href='/guide'>Guide</Link>
        </button>
        <button className=' shadow-sm hover:text-slate-300'>
          <Link className=' ' href='/resources'>Resources</Link>
        </button>
        </header>
        </motion.div>
     );
    }

export default Header;