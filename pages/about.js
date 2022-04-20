import Header from '../components/header';

function About(){ 
    return (
    <div>
        <Header />
            <h1 className=' flex text-3xl px-8 pt-12 pb-8 underline'>
                About
            </h1>
            <p className='flex text-xl px-8'>
            This guide was created with the goal of helping people learn Japanese <br />
            for free. Be it by watching TV shows, listening to music, or simply reading. <br />
            All the content inside this guide is curated by the community and free. <br /> 
                </p>
        </div>
        );
}

export default About;