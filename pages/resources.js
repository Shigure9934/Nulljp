import Header from "../components/header";
import Image from "next/image";
import yomi from "../public/yomi.png"

function Resources() {
  return (
    <div>
      <Header />
      <h1 className="flex text-3xl px-8 pt-8 underline">Resources</h1>
      <p className="text-sm px-8 pt-8">
        Here are some useful resources you should be taking advantage of during
        your journey.
      </p>
      <h2 className="px-8 flex text-2xl pt-8">Dictionary Tools</h2>
      <div className="text-sm px-8 pt-8">
        <p>
          Those are the main tools you should use as they can make looking up
          stuff you don't know pretty easy and seamlessly.
        </p>
        <p className=" text-2xl pt-8 inline- underline hover:text-cyan-400">
          <a
            href="https://foosoft.net/projects/yomichan/"
            target="_blank"
            rel="noreferrer"
            passHref
          >
            Yomichan
          </a>{" "}
        </p>
        .
        <p>
          Yomichan is a tool that lets you look up words by hovering your mouse
          over them. <br />
          It's an extension for chromium based browsers and Firefox. The setup
          is pretty straightforward and you shouldn't have any problems. <br />
          You can use the dictionaries from this{" "}
          <p className=" inline-block underline hover:text-cyan-400">
            <a
              href="https://learnjapanese.link/dictionaries"
              target="_blank"
              rel="noreferrer"
              passHref
            >
              Link
            </a>
            .{" "}
          </p>{" "}
          (Under the billingual folder, pick JMdict at first as it is the most
          common and it should cover almost everything) and import them into the
          extension by going into your browser extension settings and into the
          yomichan icon and search for the dictionaries section.
        </p>
        <p>
          After the dictionaries were imported you can configure yomichan by
          going into it's settings again and choosing your prefered
          costumizations. Yomichan works with the keyboard key <i>Shift</i> and
          also with the middle mouse button if you enable it under settings.
        </p>
        <div className="pt-8">
          <Image src={yomi} width={300} height={300} />
        </div>
      </div>
       {/*  padding for the footer */}   
       <div className='pb-8'></div>
    </div>
    
  );
}

export default Resources;
