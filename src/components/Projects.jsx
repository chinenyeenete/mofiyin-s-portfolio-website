import React from 'react';
import Harmoniscript from '../assets/Harmoniscript.png';
import {FaGithub} from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import Fusion from '../assets/fusion.png';
import { RiFilePaper2Line } from "react-icons/ri";
import Divider from "../assets/div.png";
import {motion} from "framer-motion";
import {Portfolio} from "../assets/portfolio.png";

{/* Technical Projects*/} 
const Projects = () => {
  return (
    <div className="w-full flex justify-center items-center mt-14 m-5 md:m-10">
      <div className="flex flex-col justify-center items-center mr-10">
        <h1 className="text-3xl mb-0 mt-14 font-extrabold w-11/12 md:w-4/5 text-center leading-9 tracking-tight text-primary dark:text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Projects</h1>
        <div className="m-14 flex flex-col justify-center items-center p-5 gap-14 w-11/12 md:w-4/5">
          {/* HarmoniScript Project */}        
          <motion.div 
            initial={{ y: -50 , opacity: 0}} whileInView={{ y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 1, ease: "easeInOut", delay:0.5}}
            className="flex flex-wrap justify-center items-center rounded-2xl bg-white hover:shadow-pic border border-black border-width-100px hover:border-primary p-5 md:p-10 gap-5">
            <div className="p-2 w-full lg:w-2/5">
              <img src={Harmoniscript} alt={"HarmoniScript"} className="hover:cursor-pointer"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-7 w-full lg:w-1/2">
              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-xl mb-0 font-bold leading-9 tracking-tight text-black sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">HarmoniScript</h1>
                <h3 className="prose text-sm text-slate-500">August 2024</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="prose pt-5 text-md text-gray-600 dark:text-gray-300 text-center">HarmoniScript is a web application created to empower musicians and composers by turning audio recordings into sheet music instantly and seamlessly. It offers a user-friendly platform that allows users to upload a song and receive sheet music for multiple instruments.</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex flex-wrap justify-center items-left gap-3">
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">Tailwind CSS</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">React.js</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">Express.js</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">Node.js</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">Figma</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3">
                  <div className="flex flex-wrap justify-center items-center p-3 gap-2 border border-primary rounded-xl hover:cursor-pointer hover:bg-primary">
                    <FaGithub />
                    <a href="https://github.com/angiez37/HarmoniScript" target="_blank" className="prose text-black text-md">View Project</a>
                  </div>
                  <div className="flex flex-wrap justify-center items-center p-3 gap-2 border border-primary rounded-xl hover:cursor-pointer hover:bg-primary">
                    <IoVideocamOutline />
                      <a href="https://www.youtube.com/watch?v=FQOqshO2YXc" target="_blank" className="prose text-black text-md">View Demo</a>
                  </div>
              </div>
            </div>
          </motion.div>

          <img src={Divider} alt="Divider" className="w-1/3"/>

          {/* Track Level Fusion Project */}
          <motion.div 
            initial={{ y: -50 , opacity: 0}} whileInView={{ y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 1, ease: "easeInOut", delay:0.5}}
            className="flex flex-wrap justify-center items-center rounded-2xl bg-white hover:shadow-pic border border-black border-width-100px hover:border-primary p-5 md:p-10 gap-5">
            <div className="flex flex-col justify-center items-center gap-7 w-full lg:w-1/2">
              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-xl mb-0 font-bold leading-9 tracking-tight text-black sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">Track Level Fusion</h1>
                <h3 className="prose text-sm text-slate-500">April 2024 - August 2024</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="prose pt-5 text-md text-gray-600 dark:text-gray-300 text-center">I developed a custom track level fusion algorithm for a 1/10 scaled ego vehicle using Global Nearest Neighbor (GNN) Assignment and a Kalman filter. The algorithm is part of a sensor fusion model of two 2D LiDARs and a Zed Camera.</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex flex-wrap justify-center items-left gap-3">
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">MATLAB</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">Simulink</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">Python</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">ROS</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">Gitlab</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3">
                  <div className="flex flex-wrap justify-center items-center p-3 gap-2 border border-primary rounded-xl hover:cursor-pointer hover:bg-primary">
                    <RiFilePaper2Line />
                    <a href='/Mofiyinfoluwa Angel Saka - Research Poster 2024.pdf' target="_blank" className="prose text-black text-md">View Poster</a>
                  </div>
              </div>
            </div>
            <div className="p-2 w-full lg:w-2/5">
              <img src={Fusion} alt={"Track Level Fusion"} className="hover:cursor-pointer"/>
            </div>
          </motion.div>

          <img src={Divider} alt="Divider" className="w-1/3"/>

          {/*Portfolio Website*/}
          <motion.div 
            initial={{ y: -50 , opacity: 0}} whileInView={{ y: 0 , opacity: 1}} viewport={{once: true}} transition={{duration: 1, ease: "easeInOut", delay:0.5}}
            className="flex flex-wrap justify-center items-center rounded-2xl bg-white hover:shadow-pic border border-black border-width-100px hover:border-primary p-5 md:p-10 gap-5">
            <div className="p-2 w-full lg:w-2/5">
              <img src={Portfolio} alt={"Portfolio Website"} className="hover:cursor-pointer"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-7 w-full lg:w-1/2">
              <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-xl mb-0 font-bold leading-9 tracking-tight text-black sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">Personal website</h1>
                <h3 className="prose text-sm text-slate-500">July 2024 - August 2024</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="prose pt-5 text-md text-gray-600 dark:text-gray-300 text-center">My personal portfolio website created using React.js and Tailwind CSS and deployed on Vercel. It includes my background, experiences, projects, resume and more!</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex flex-wrap justify-center items-left gap-3">
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">HTML</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">JavaScript</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">Tailwind CSS</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">React.js</p>
                  <p className="prose p-3 border border-gray-600 bg-gray-100 rounded-3xl text-sm font-serif text-rose-900">Framer Motion</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3">
                  <div className="flex flex-wrap justify-center items-center p-3 gap-2 border border-primary rounded-xl hover:cursor-pointer hover:bg-primary">
                    <FaGithub />
                    <a href="https://github.com/angiez37/Portfolio-Website" target="_blank" className="prose text-black text-md">View Project</a>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default Projects
