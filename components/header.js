import React from 'react';


    function Header() {
    return (
          <div className=''>
        <header className=' underline flex justify-evenly  m-auto md-header_ellipsis text-slate-300 px-20 pt-1 pb-1' href="/index"> 
        <button>
            <a className=' underline' href='/'>ヌル</a>
        </button>
        <button>
            <a className=' underline' href='/about'>About</a>
        </button>
        
        <button>
        <a className=' underline' href='/guide'>Guide</a>
        </button>
        <button>
          <a className=' underline' href='/resources'>Resources</a>
        </button>
        </header>
        </div>
     );
    }

export default Header;