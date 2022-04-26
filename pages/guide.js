import Header from '../components/header';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Guide(){ 
    return (
    <div>
        <Header />
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
    <div className=' sm:m-8 md:m-12 lg:m-36 '>
        <div>
            <h1 className='flex text-3xl px-8 pt-8 underline'>
                Main Guide 
            </h1>
            <p className='text-xl px-8 pt-8'>
                So, how do I learn Japanese? you may be asking yourself. <br />
                Well, first of all you need to have the right <strong> mindset  </strong> before you dive into seriously learning. 
                After all It&apos;s something that takes a lot of time and effort, that&apos;s why this guide will start by guiding you into having the right mindset when it comes to learning Japanese. <br />                 
            </p>
            <h2 className='flex text-3xl px-8 pt-8'>
                The Mindset 
            </h2>
            <p className='text-xl px-8 pt-8'>
            The process of learning a language or anything long term that's worth learning,  is indeed something
            hard, and you should acknowledge that, I won&apos;t tell you that it is simple 
            or painless, It takes a lot of self commitment and <a  className="underline text-cyan-400"href='https://en.wikipedia.org/wiki/Grit_(personality_trait)' target="_blank" rel="noreferrer" passHref>Grit</a> <br/> 
            Plus, it will demand you to commit some time too, I would say if you can spend atleast 1 hour of your day interacting with the language everyday that's already a really good thing and will lead to 
            good gains over time. <br />
            Expect that you'll be able to understand most things way before you can consider yourself "fluent" and it only depends on your own effort. 
            You should try to not think about japanese as some kind of study and instead as something you use to consume content.
            Youtube for example, can lead to great gains and you will hopefuly not feel like it's a chore and instead you are just having fun watching a youtube video(of course while paying attention to the language and trying to look up words without breaking the flow).
       </p>
        <h2 className='flex text-3xl px-8 pt-8'>
            The Process 
        </h2>
        <p className='text-xl px-8 pt-8'>
            So, after you have the right mindset, you should be ready to start learning Japanese, <br />
            This section will show you the main resources and the process of actually being in contact with the language. <br />
        </p>
        <p className='text-xl px-8 pt-8'>
            Learning Japanese consists of three main acts: <br />
            <strong>
                1. The Kana/Kanji <br />
                2. Vocabulary/Grammar <br />
                3. 無限 <br />
            </strong>
            </p>
            <h2 className='flex text-2xl px-8 pt-8'>
             The Kana
            </h2>
            <p className='text-xl px-8 pt-8'>
                The kana is the compound two of the three Japanese writting 
                systems, you can think of it like
                It is the roman alphabet equivalent of the Japanese alphabet. 
            </p>
        
            <h2 className='flex text-3xl px-8 pt-8 '>
            <ruby>
             <rb>  おはよう </rb>
                <rt>  ohayou </rt>
            </ruby>
            </h2>
            <p className='text-xl px-8 pt-8'>
               These &quot;Symbols&quot; make up big part of the japanese you&apos;ll be seeing during your journey.
               Your focus on this section should be on remembering how they are 
               pronounced. <br />
               We have Hiragana and Katakana in japanese, both are Kana, and are used for different porpouses, Hiragana is what 
               makes up most of the japanese sentences (by being used as topic markers and more) along with Kanji, but we&apos;ll 
               talk about those soon...
               Katakana is what the japanese use for spelling
               loan words like コンピュータ - computer, or foreigner names like マイケル - Michael,
               You can dinstinguish them by noticing how
               Katakana is more block-like and Hiragana has a more rounded shape.
            </p>
          
            <p className='text-xl px-8 pt-8 pb-4'>
                You can learn the kana by drilling it through this <div className=' inline-block underline hover:text-cyan-700'>    <a href='https://djtguide.neocities.org/kana/index.html' target="_blank" rel="noreferrer" passHref>Quiz</a>. </div>
            </p>
            <p className='text-xl px-8'>
                Memorizing most of the kana (Hiragana and Katakana) should be a simple process, make sure to not spend too much time 
                on it at this point because you'll have plenty of time to see it during your journey.
                </p>
                <p className='text-xl px-8 pt-8'>
               
                With the ability to read kana you could already start learning vocabulary,  but that would be inneficient, that's why before introducing how the process of vocabulary acquistion
                works we'll be diving into Kanji 
                </p>
            
                <h2 className='flex text-2xl px-8 pt-8'>
                    Kanji
                </h2>
                <p className='flex text-xl px-8 pt-8'>
                    Kanji are Symbols in japanese that in conjuction with kana, make up the whole Japanese
                    writting system, they are pronounced using kana and can form compounds to represent 
                   words, concepts, or entire phrases when 2 or more kanji are combined together, the same words can
                   be written in kana or kanji, highly depends on what word is and the author decision for example. 
                </p>
                <h2 className='flex-inline px-8 pb-8 text-3xl pt-8 '>
            <ruby>
             <rb>  天気 </rb>
                <rt> てんき </rt>
            </ruby>
            </h2>
            <p className='px-8 text-xl flex-inline pt-2'>
                The word 天気 means Weather and is made of 天 and 気 which are respectively 
                sky and sensation, kinda makes sense right? <br/>
                That's how kanji works, but it's advised that you learn them as full words 
                instead of learning each individual component and trying to make sense of them.
                And how do I do that? you may be asking.
            </p>
            <p className='px-8 text-xl flex-inline pt-8'>
            First of all you should get used to using dictionaries so you can look up words whenever you are browsing the internet
            or reading/watching content.Some of the recommended dictionary tools are down below, more detailed explanation on
           <p className=' cursor-pointer inline text-cyan-400'>
            <Link className=' text-cyan-400 underline cursor-pointer ' href='./resources' passHref><u> Resources</u></Link>.
            </p>
            </p>
           <p className='pt-2 px-8 inline-block underline hover:text-cyan-400'><a href='https://jisho.org/' target="_blank" rel="noreferrer" passHref>Jisho.org</a> </p>.
           <p className='px-8 inline- underline hover:text-cyan-400'><a href='https://foosoft.net/projects/yomichan/' target="_blank" rel="noreferrer" passHref>Yomichan</a> </p>.
        </div>
        <h2 className='flex text-2xl pt-8 px-8'>
            Vocabulary
        </h2>
        <p className='text-xl px-8 pt-8'>
            Our next topic is about vocabulary...
            </p>
            </div>
        </motion.div>
 {/*  padding for the footer */}                
      <div className='pb-8'></div>
    </div> 
    );
}

export default Guide; 

