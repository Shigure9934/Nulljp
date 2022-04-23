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
            <p className='text-sm px-8 pt-8 pb-4'>
                You can learn the kana by drilling it through this <div className=' inline-block underline hover:text-cyan-700'>    <a href='https://djtguide.neocities.org/kana/index.html' target="_blank" rel="noreferrer" passHref>Quiz</a>. </div>
            </p>
            <p className='text-sm px-8'>
                Memorizing most of the kana (Hiragana and Katakana) should be a simple process, make sure to not spend too much time 
                on it at this point because you'll have plenty of time to see it during your journey.
                </p>
            <p className='text-sm px-8'>
                <br />
                With the ability of reading kana you could already start learning vocabulary,  but that would be inneficient, that's why before introducing how the process of vocabulary acquistion
                works we'll be diving innto <u>Kanji</u>

                <h2 className='flex text-2xl pt-12 underline'>
                    Kanji
                </h2>
                <p className='text-sm pt-2'>
                    Kanji are Symbols in japanese that in conjuction with kana, make up the whole Japanese
                    writting system, they are pronounced using kana and can form compounds to represent 
                   words, concepts, or entire phrases when 2 or more kanji are combined together, the same words can
                   be writting in kana or kanji, highly depends on what word is and the author decision for example. 
                </p>
                <h2 className='flex text-2xl px-8 pt-12 '>
            <ruby>
                <p>Ten-ki</p>
             <rb>  てんき </rb>
                <rt> 天気 </rt>
            </ruby>
            </h2>
            <p className='flex pt-2'>
                The word 天気 means Weather and is made of 天 and 気 which are respectively 
                sky and sensation, kinda makes sense right? <br/>
                That's how kanji works, but it's advised that you learn them as full words 
                instead of learning each individual component and trying to make sense of them.
                And how do I do that? you may be asking.
            </p>
            </p>
            <p className='px-8 text-sm flex-inline pt-2'>
            First of all you should get used to using dictionaries so you can look up words whenever you are browsing the internet
            or reading/watching content. Recommended dictionaries tools are down below, more detailed explanation on
           <p className='inline text-cyan-400'>
            <Link className=' text-cyan-400 underline' href='./resources' passHref><u> Resources </u></Link>
            </p>
            </p>
           <p className='px-8 inline-block underline hover:text-cyan-700'><a href='https://en.wikipedia.org/wiki/Grit_(personality_trait)' target="_blank" rel="noreferrer" passHref>Jisho.org</a> </p>.
        </div>
    </div> 
    );
}
export default Guide;
