import {SiPython} from "react-icons/si";
import {SiCplusplus} from "react-icons/si";
import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {FaJsSquare} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {FaLinux} from "react-icons/fa";
import {SiRos} from "react-icons/si";
import {motion} from "framer-motion";
import { FaAward } from "react-icons/fa";


const Skills = () => {
  return (
    <div className="w-full pb-4 mt-14 lg:mb-35">
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{once: false, amount: 0.1}} transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center lg: items-start">
        <h1 className="text-3xl mb-0 font-extrabold leading-9 tracking-tight text-primary dark:text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Skills</h1>
        <div className="m-10 flex flex-wrap justify-center items-center p-20 gap-12 w-5/6">
          <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} whileHover={{ rotate: 25 }} style={{perspective:"1000px"}}
            className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
            <SiPython className="w-16 h-16 text-black dark:text-white" />
            <h3 className="prose text-lg text-gray-600 dark:text-gray-300">Python</h3>
          </motion.div>
          <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} whileHover={{ rotate: -25 }} style={{perspective:"1000px"}}
            className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
            <SiCplusplus className="w-16 h-16 text-black dark:text-primary" />
            <h3 className="prose text-lg text-gray-600 dark:text-gray-300">C++</h3>
          </motion.div>
          <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} whileHover={{ rotate: 25 }} style={{perspective:"1000px"}}
            className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
            <FaHtml5 className="w-16 h-16 text-black dark:text-primary" />
            <h3 className="prose text-lg text-gray-600 dark:text-gray-300">HTML</h3>
          </motion.div>
          <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} whileHover={{ rotate: -25 }} style={{perspective:"1000px"}}
            className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
            <FaCss3Alt className="w-16 h-16 text-black dark:text-primary" />
            <h3 className="prose text-lg text-gray-600 dark:text-gray-300">CSS</h3>
          </motion.div>
          <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} whileHover={{ rotate: 25 }} style={{perspective:"1000px"}}
            className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
            <FaJsSquare className="w-16 h-16 text-black dark:text-primary" />
            <h3 className="prose text-lg text-gray-600 dark:text-gray-300">JavaScript</h3>
          </motion.div>
          <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} whileHover={{ rotate: -25 }} style={{perspective:"1000px"}}
            className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
            <FaReact className="w-16 h-16 text-black dark:text-primary" />
            <h3 className="prose text-lg text-gray-600 dark:text-gray-300">React</h3>
          </motion.div>
          <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} whileHover={{ rotate: 25 }} style={{perspective:"1000px"}}
            className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
            <SiTailwindcss className="w-16 h-16 text-black dark:text-primary" />
            <h3 className="prose text-lg text-gray-600 dark:text-gray-300">Tailwind</h3>
          </motion.div>
          <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} whileHover={{ rotate: -25 }} style={{perspective:"1000px"}}
            className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
            <FaGitAlt className="w-16 h-16 text-black dark:text-primary" />
            <h3 className="prose text-lg text-gray-600 dark:text-gray-300">Git</h3>
          </motion.div>
          <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} whileHover={{ rotate: 25 }} style={{perspective:"1000px"}}
            className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
            <FaLinux className="w-16 h-16 text-black dark:text-primary" />
            <h3 className="prose text-lg text-gray-600 dark:text-gray-300">Linux</h3>
          </motion.div>
          <motion.div 
            initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} whileHover={{ rotate: -25 }} style={{perspective:"1000px"}}
            className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
            <SiRos className="w-16 h-16 text-black dark:text-primary" />
            <h3 className="prose text-lg text-gray-600 dark:text-gray-300">ROS</h3>
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{once: false, amount: 0.1}} transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center ">
        <h1 className="text-3xl mb-0 font-extrabold leading-9 tracking-tight text-primary dark:text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Awards</h1>
        <div className="m-10 flex flex-wrap justify-center items-center p-5 gap-12">
          <motion.div 
            initial={{ y: -50 , opacity: 0}} whileInView={{ y: 0 , opacity: 1}} viewport={{once: false, amount: 0.1}} transition={{duration: 0.5, ease: "easeInOut", delay:0.5}}
            className="flex flex-wrap justify-center items-center w-full lg:w-1/3 lg:flex-col p-6 gap-5 bg-white border border-black dark:border-white shadow-2xl shadow-gray-300 hover:shadow-pic rounded-3xl">
            <FaAward className="w-12 h-12 text-black dark:text-primary" />
            <h2 className="prose font-bold text-2xl text-gray-600 dark:text-white text-center">G3 Grow Beyond Scholarship</h2>
            <h3 className="prose text-lg text-gray-600 dark:text-white">- Jun 2023</h3>
          </motion.div>
          <motion.div 
            initial={{ y: -50 , opacity: 0}} whileInView={{ y: 0 , opacity: 1}} viewport={{once: false, amount: 0.1}} transition={{duration: 0.5, ease: "easeInOut", delay:0.6}}
            className="flex flex-wrap justify-center items-center w-full lg:w-1/3 lg:flex-col p-6 gap-5 bg-white border border-black dark:border-white shadow-2xl shadow-gray-300 hover:shadow-pic rounded-3xl">
            <FaAward className="w-12 h-12 text-black dark:text-primary" />
            <h2 className="prose font-bold text-2xl text-gray-600 dark:text-white text-center">McMaster Engineering Research Experience Award (EREA)</h2>
            <h3 className="prose text-lg text-gray-600 dark:text-white">- Mar 2023</h3>
          </motion.div>
          <motion.div 
            initial={{ y: -50 , opacity: 0}} whileInView={{ y: 0 , opacity: 1}} viewport={{once: false, amount: 0.1}} transition={{duration: 0.5, ease: "easeInOut", delay:0.7}}
            className="flex flex-wrap justify-center items-center w-full lg:w-1/3 lg:flex-col p-6 gap-5 bg-white border border-black dark:border-white shadow-2xl shadow-gray-300 hover:shadow-pic rounded-3xl">
            <FaAward className="w-12 h-12 text-black dark:text-primary" />
            <h2 className="prose font-bold text-2xl text-gray-600 dark:text-white text-center">McMaster Faculty of Engineering Award of Excellence</h2>
            <h3 className="prose text-lg text-gray-600 dark:text-white">- Mar 2023</h3>
          </motion.div>
          <motion.div 
            initial={{ y: -50 , opacity: 0}} whileInView={{ y: 0 , opacity: 1}} viewport={{once: false, amount: 0.1}} transition={{duration: 0.5, ease: "easeInOut", delay:0.8}}
            className="flex flex-wrap justify-center items-center w-full lg:w-1/3 lg:flex-col p-6 gap-5 bg-white border border-black dark:border-white shadow-2xl shadow-gray-300 hover:shadow-pic rounded-3xl">
            <FaAward className="w-12 h-12 text-black dark:text-primary" />
            <h2 className="prose font-bold text-2xl text-gray-600 dark:text-white text-center">Yves and Cynthia Bled Award for Women In Engineering</h2>
            <h3 className="prose text-lg text-gray-600 dark:text-white">- Mar 2023</h3>
          </motion.div>
          <motion.div 
            initial={{ y: -50 , opacity: 0}} whileInView={{ y: 0 , opacity: 1}} viewport={{once: false, amount: 0.1}} transition={{duration: 0.5, ease: "easeInOut", delay:0.9}}
            className="flex flex-wrap justify-center items-center w-full lg:w-1/3 lg:flex-col p-6 gap-5 bg-white border border-black dark:border-white shadow-2xl shadow-gray-300 hover:shadow-pic rounded-3xl">
            <FaAward className="w-12 h-12 text-black dark:text-primary" />
            <h2 className="prose font-bold text-2xl text-gray-600 dark:text-white text-center">Marlene Thomas Community Advocacy Award</h2>
            <h3 className="prose text-lg text-gray-600 dark:text-white">- Feb 2023</h3>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Skills
