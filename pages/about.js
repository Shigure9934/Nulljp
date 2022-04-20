import Header from '../components/header';

function About(){ 
    return (
    <div>
        <Header />
            <h1 className=' fflex text-3xl px-8 pt-12 underline'>
                About
            </h1>
            <p className='flex text-sm px-8 pt-8'>This website was created with the intention of helping people learn japanese, 
            We are a community of learners sharing our methods and explaining the process, giving resources, etc.</p>
            <p className='flex px-5 pb-1 bottom-0 fixed text-xs	'>
  Github- Shigure9934 
</p>
        </div>
        );
}

export default About;