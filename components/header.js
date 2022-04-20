import Link from 'next/link';
import React from 'react';


    function Header() {
    return (
          <div className=''>
        <header className='  flex justify-evenly  m-auto md-header_ellipsis text-slate-300 px-15 pt-5 pb-5' href="/index"> 
        <button  className=' hover:underline'>
            <Link className='' href='/'>ヌル</Link>
        </button>
        <button  className=' hover:underline'>
            <Link className=' underline' href='/about'>About</Link>
        </button>
        
        <button  className=' hover:underline'>
        <Link className=' underline' href='/guide'>Guide</Link>
        </button >
        <button  className=' hover:underline'>
          <Link className=' underline' href='/resources'>Resources</Link>
        </button>
        </header>
        </div>
     );
    }

export default Header;