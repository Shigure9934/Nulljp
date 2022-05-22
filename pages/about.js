import Header from '../components/header';
import { motion } from 'framer-motion';

function About(){ 
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
            <h1 className=' flex text-3xl px-8 pt-12 underline'>
                About
            </h1>
            <p className='flex text-xl px-8 pt-8'>This website was created with the intention of helping people learn japanese, 
            We are a community of learners sharing our methods and explaining the process, giving resources, etc.
            Our community is made mainly by self taught learners of not only the japanese language but some more languages as well.
            </p>
            <p className='flex text-xl px-8 pt-8'>
              Our method is commonly known as immersion learning, and 
            <p className='flex px-5 pb-1 bottom-0 fixed text-xs	'>
  Github- Shigure9934 
</p>
        </motion.div>
        </div>
        );
}

export default About;