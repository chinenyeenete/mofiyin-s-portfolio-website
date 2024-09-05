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
import {SiAutodesk} from "react-icons/si";
import { FaAward } from "react-icons/fa";


const Skills = () => {
  return (
    <div className="w-full pb-4 mt-12 lg:mb-35">
        <div className="flex flex-col justify-center items-center lg: items-start">
            <h1 className="text-3xl mb-0 font-extrabold leading-9 tracking-tight text-primary dark:text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Skills</h1>
            <div className="m-10 flex flex-wrap justify-center items-center p-20 gap-12">
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <SiPython className="w-16 h-16 text-black dark:text-white" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">Python</h3>
              </div>
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <SiCplusplus className="w-16 h-16 text-black dark:text-primary" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">C++</h3>
              </div>
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <FaHtml5 className="w-16 h-16 text-black dark:text-primary" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">HTML</h3>
              </div>
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <FaCss3Alt className="w-16 h-16 text-black dark:text-primary" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">CSS</h3>
              </div>
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <FaJsSquare className="w-16 h-16 text-black dark:text-primary" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">JavaScript</h3>
              </div>
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <FaReact className="w-16 h-16 text-black dark:text-primary" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">React</h3>
              </div>
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <SiTailwindcss className="w-16 h-16 text-black dark:text-primary" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">Tailwind</h3>
              </div>
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <FaGitAlt className="w-16 h-16 text-black dark:text-primary" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">Git</h3>
              </div>
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <FaLinux className="w-16 h-16 text-black dark:text-primary" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">Linux</h3>
              </div>
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <SiRos className="w-16 h-16 text-black dark:text-primary" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">ROS</h3>
              </div>
              <div className="flex flex-col justify-center items-center border-primary border-4 rounded-lg p-5 gap-3">
                <SiAutodesk className="w-16 h-16 text-black dark:text-primary" />
                <h3 className="prose text-lg text-gray-600 dark:text-gray-300">Autodesk</h3>
              </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl mb-0 font-extrabold leading-9 tracking-tight text-primary dark:text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Awards</h1>
            <div className="m-10 flex flex-wrap justify-center items-center p-5 gap-12">
              <div className="flex flex-wrap justify-center items-center w-full lg:w-1/3 lg:flex-col p-6 gap-5 bg-white border border-black dark:border-white shadow-2xl shadow-gray-300 hover:shadow-pic rounded-3xl">
                <FaAward className="w-12 h-12 text-black dark:text-primary" />
                <h2 className="prose font-bold text-2xl text-gray-600 dark:text-white text-center">G3 Grow Beyond Scholarship</h2>
                <h3 className="prose text-lg text-gray-600 dark:text-white">- Jun 2023</h3>
              </div>
              <div className="flex flex-wrap justify-center items-center w-full lg:w-1/3 lg:flex-col p-6 gap-5 bg-white border border-black dark:border-white shadow-2xl shadow-gray-300 hover:shadow-pic rounded-3xl">
                <FaAward className="w-12 h-12 text-black dark:text-primary" />
                <h2 className="prose font-bold text-2xl text-gray-600 dark:text-white text-center">McMaster Engineering Research Experience Award (EREA)</h2>
                <h3 className="prose text-lg text-gray-600 dark:text-white">- Mar 2023</h3>
              </div>
              <div className="flex flex-wrap justify-center items-center w-full lg:w-1/3 lg:flex-col p-6 gap-5 bg-white border border-black dark:border-white shadow-2xl shadow-gray-300 hover:shadow-pic rounded-3xl">
                <FaAward className="w-12 h-12 text-black dark:text-primary" />
                <h2 className="prose font-bold text-2xl text-gray-600 dark:text-white text-center">McMaster Faculty of Engineering Award of Excellence</h2>
                <h3 className="prose text-lg text-gray-600 dark:text-white">- Mar 2023</h3>
              </div>
              <div className="flex flex-wrap justify-center items-center w-full lg:w-1/3 lg:flex-col p-6 gap-5 bg-white border border-black dark:border-white shadow-2xl shadow-gray-300 hover:shadow-pic rounded-3xl">
                <FaAward className="w-12 h-12 text-black dark:text-primary" />
                <h2 className="prose font-bold text-2xl text-gray-600 dark:text-white text-center">Yves and Cynthia Bled Award for Women In Engineering</h2>
                <h3 className="prose text-lg text-gray-600 dark:text-white">- Mar 2023</h3>
              </div>
              <div className="flex flex-wrap justify-center items-center w-full lg:w-1/3 lg:flex-col p-6 gap-5 bg-white border border-black dark:border-white shadow-2xl shadow-gray-300 hover:shadow-pic rounded-3xl">
                <FaAward className="w-12 h-12 text-black dark:text-primary" />
                <h2 className="prose font-bold text-2xl text-gray-600 dark:text-white text-center">Marlene Thomas Community Advocacy Award</h2>
                <h3 className="prose text-lg text-gray-600 dark:text-white">- Feb 2023</h3>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
