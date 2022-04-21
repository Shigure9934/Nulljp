import Header from '../components/header';
import Image from 'next/image';

function Guide(){ 
    return (
    <div>
        <Header />
        <div>
            <h1 className='flex text-3xl px-8 pt-12 hover:underline'>
                Main Guide 
            </h1>
            <p className='text-sm px-8 pt-8'>
                So, how do I learn Japanese? you may be asking yourself. <br />
                Well, first of all you need to have the right <strong> mindset  </strong> before you dive into seriously learning . <br />
                After all It&apos;s something that takes a lot of time and effort, that&apos;s why this guide will start by guiding you into having the right mindset when it comes to learning Japanese. <br />                 
            </p>
            <h2 className='flex text-3xl px-8 pt-12 hover:underline'>
                The Mindset 
            </h2>
            <p className='text-sm px-8 pt-8'>
        </p>
        <h2 className='flex text-3xl px-8 pt-12 hover:underline'>
            The Process 
        </h2>
        <p className='text-sm px-8 pt-8'>
            So, after you have the right mindset, you should be ready to start learning Japanese, <br />
            This section will show you the main resources and the process of actually being in contact with the language. <br />
        </p>
        <p className='text-sm px-8 pt-8'>
            Learning Japanese consists of three main acts: <br />
            <strong>
                1. The Kana <br />
                2. Vocabulary <br />
                3. 無限 <br />
            </strong>
            </p>
            <h2 className='flex text-2xl px-8 pt-12 hover:underline'>
             The Kana
            </h2>
            <p className='text-sm px-8 pt-8'>
                The kana is the compound two of the three Japanese writting 
                systems, you can think of it like
                It is the romanian alphabet equivalent of the Japanese alphabet. <br />
            </p>
            <h2 className='flex text-2xl px-56 pt-12 '>
            <ruby>
             <rb>  おはよう </rb>
                <rt>  ohayou </rt>
            </ruby>
            </h2>
            <p className='text-sm px-8 pt-8'>
               These &quot;Symbols&quot; make up big part of the japanese you&apos;l be seeing during your journey 
            </p>
        </div>
    </div>    
    
    );
}
export default Guide;
