import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


    function Header() {
    return (
          <div>
        <header className='flex justify-evenly  m-auto md-header_ellipsis text-slate-100 px-15 pt-5 pb-2.5' href="/index"> 
        <button className='hover:underline'>
            <Link className=' ' href='/'>ヌル</Link>
        </button>
        <button className='hover:underline'>
            <Link className=' ' href='/about'>About</Link>
        </button>
        
        <button className='hover:underline'>
        <Link className=' ' href='/guide'>Guide</Link>
        </button>
        <button className='hover:underline'>
          <Link className=' ' href='/resources'>Resources</Link>
        </button>
        </header>
        </div>
     );
    }

export default Header;