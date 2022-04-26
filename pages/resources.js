import Header from "../components/header";
import Image from "next/image";
import yomi from "../public/yomi.png"
import { motion } from "framer-motion";

function Resources() {
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
      <h1 className="flex text-3xl px-8 pt-8 underline">Resources</h1>
      <p className="text-sm px-8 pt-8">
        Here are some useful resources you should be taking advantage of during
        your journey.
      </p>
      <h2 className="px-8 flex text-2xl pt-8">Dictionary Tools</h2>
      <p className="text-sm px-8 pt-8">
          Those are the main tools you should use as they can make looking up
          stuff you don't know pretty easy and seamlessly.
        </p>
        <p className=" text-2xl pt-8 px-8 inline-block underline hover:text-cyan-400">
          <a
            href="https://foosoft.net/projects/yomichan/"
            target="_blank"
            rel="noreferrer"
            passHref
          >
            Yomichan
          </a>{" "}
        </p>
        <div>
        <div className="float-right py-5">
          <Image src={yomi} width={300} height={250} />
        </div>
        <p className="text-sm px-8 pt-8">
          Yomichan is a tool that lets you look up words by hovering your mouse
          over them. <br />
          It's an extension for chromium based browsers and Firefox. The setup
          is pretty straightforward and you shouldn't have any problems. <br />
          You can use the dictionaries from this {" "} 
          <a  className="inline underline text-cyan-400"
              href="https://learnjapanese.link/dictionaries"
              target="_blank"
              rel="noreferrer"
              passHref
            > Link 
               
            </a>
          
        
            {" "}  (Under the billingual folder, pick JMdict at first as it is the most
          common and it should cover almost everything) and import them into the
          extension by going into your browser extension settings and into the
          yomichan icon and search for the dictionaries section.
        </p>
        <p className="text-sm px-8 pt-8">
          After the dictionaries were imported you can configure yomichan by
          going into it's settings again and choosing your prefered
          costumizations. Yomichan works with the keyboard key <i>Shift</i> and
          also with the middle mouse button if you enable it under settings.
        </p>
        </div>
        <p className=" px-8 text-2xl pt-8 inline-block pb-8 underline hover:text-cyan-400">
          <a
            href="https://jisho.org/"
            target="_blank"
            rel="noreferrer"
            passHref
          >
            Jisho
          </a>{" "}
        </p>
        <p className="px-8">
          Jisho is a Japanese dictionary that is used online whenever you want to search for  more specific  information about a word/kanji.
          It provides information like stroke order, other possible meanings, and example sentences.
          It's a great tool if you want some more specific information.
          I would like to mention  {" "} 
          <a  className="underline text-cyan-400 inline"
            
              href="https://takoboto.jp/apps/"
              target="_blank"
              rel="noreferrer"
              passHref
            >Takoboto
            </a>
        
          {" "} too, as it has an Android version which works offline!
        </p>
      </div>
   
      </motion.div>
       {/*  padding for the footer */}   
       <div className='pb-8'></div>
    </div>
    
  );
}

export default Resources;
