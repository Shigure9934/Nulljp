import Header from '../components/header';
import Image from 'next/image';
import Link from 'next/link';

function Guide(){ 
    return (
    <div>
        <Header />
        <div>
            <h1 className='flex text-3xl px-8 pt-12 underline'>
                Main Guide 
            </h1>
            <p className='text-sm px-8 pt-8'>
                So, how do I learn Japanese? you may be asking yourself. <br />
                Well, first of all you need to have the right <strong> mindset  </strong> before you dive into seriously learning . <br />
                After all It&apos;s something that takes a lot of time and effort, that&apos;s why this guide will start by guiding you into having the right mindset when it comes to learning Japanese. <br />                 
            </p>
            <h2 className='flex text-3xl px-8 pt-12 underline'>
                The Mindset 
            </h2>
            <p className='text-sm px-8 pt-8'>
            The process of learning a language or anything long term  is something  <br />
            hard, and you should acknowledge that, I won&apos;t tell you that it is simple <br />
            or painless, It takes a lot of self commitment and <p className=' inline-block underline hover:text-cyan-700'><a href='https://en.wikipedia.org/wiki/Grit_(personality_trait)' target="_blank" rel="noreferrer" passHref>Grit</a>. </p>
       </p>
        <h2 className='flex text-3xl px-8 pt-12 underline'>
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
            <h2 className='flex text-2xl px-8 pt-12 underline'>
             The Kana
            </h2>
            <p className='text-sm px-8 pt-8'>
                The kana is the compound two of the three Japanese writting 
                systems, you can think of it like
                It is the romanian alphabet equivalent of the Japanese alphabet. 
            </p>
            <h2 className='flex text-2xl px-8 pt-12 '>
            <ruby>
             <rb>  おはよう </rb>
                <rt>  ohayou </rt>
            </ruby>
            </h2>
            <p className='text-sm px-8 pt-8'>
               These &quot;Symbols&quot; make up big part of the japanese you&apos;ll be seeing during your journey.
               Your focus on this section should be of remembering how they are 
               pronounced. <br />
               We have Hiragana and Katakana in japanese, both are Kana, and are used for different porpouses, Hiragana is what 
               makes up most of the japanese sentences (by being used as topic markers and more) along with Kanji, but we&apos;ll 
               talk about those soon...
               Katakana is what the japanese use for spelling
               loan words like コンピュータ - computer, or foreginer names like マイケル - Michael,
               You can dinstinguish them by noticing how
               Katakana is more block-like and Hiragana has a more rounded shape.
            </p>
            <p className='text-sm px-8 pt-8 pb-8'>
                You can learn the kana by drilling it through this <div className=' inline-block underline hover:text-cyan-700'>    <a href='https://djtguide.neocities.org/kana/index.html' target="_blank" rel="noreferrer" passHref>Quiz</a>. </div>
            </p>
        </div>
        
    </div>    
     
    );
}
export default Guide;
