import Pic from '../assets/profile.jpg';
import Crochet from '../assets/crochet.png';
import {motion} from "framer-motion";

{/*About Me*/}
const About = () => {
  return (
    <div className="w-full pb-4 mt-12 lg:mb-20 flex justify-center items-center">
        <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{once: false, amount: 0.1}} transition={{ duration: 1 }}
            className="flex flex-col justify-between items-center w-11/12">
            <motion.h1 initial={{ y: -100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.5, delay:0.5}} className="text-3xl mb-0 font-extrabold leading-9 tracking-tight text-primary dark:text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">About Me</motion.h1>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-full lg:w-1/2">
                    {/*Profile Picture*/}
                    <div className="flex p-10 md:p-20 flex-wrap items-center justify-center">
                        <motion.img whileHover={{ scale: 1.1 }} initial={{ x: -75 , opacity: 0}} whileInView={{ x: 0 , opacity: 1}} viewport={{once: false, amount: 0.1}} transition={{duration: 0.5, delay:0.5}} src={Pic} alt="Profile Picture" className=" shadow-pic border border-primary border-width-100px border-b rounded-3xl hover:cursor-pointer" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    {/*About Me*/}
                    <motion.div 
                        initial={{ x: 75 , opacity: 0}} whileInView={{ x: 0 , opacity: 1}} viewport={{once: false, amount: 0.1}} transition={{duration: 0.5, delay:0.5}} 
                        className="flex flex-col flex-wrap p-10 md:p-20 justify-center items-center lg:justify-start gap-7">
                        <p className="prose text-lg text-gray-600 dark:text-gray-300">I'm in my second year of Software Engineering and Management at <span className="font-bold">McMaster University</span>. In my freetime, I enjoy developing side projects and learning new technologies.</p>
                        <p className="prose text-lg text-gray-600 dark:text-gray-300">
                            <span className="font-bold">Software development</span> has been an interest of mine since high school and I love the process of turning ideas into reality through code.
                        </p>
                        <p className="prose text-lg text-gray-600 dark:text-gray-300">I am intersted in aerospace, autonomous systems, full stack development, machine learning and more. I am actively seeking internship opportunities for <span className="font-bold">spring/summer 2025.</span></p>
                    </motion.div>
                </div>
            </div>

            {/*Fun Fact - rochet*/}
            <div className="flex flex-wrap justify-center w-full px-20 ml-6 md:ml-20 md:mb-14 items-center gap-7">
                <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">Fun fact about me, I love to crochet</h3>
                </div>
                <div className="w-full md:w-1/3 ">
                    <img src={Crochet} alt="Crochet Pillow" className="hover:cursor-pointer" />
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default About
