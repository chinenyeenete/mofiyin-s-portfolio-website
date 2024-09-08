import React, { useState } from 'react';
import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub, FaBars} from "react-icons/fa";
import {ImCancelCircle} from "react-icons/im";
import {HiOutlineDocumentText} from "react-icons/hi2";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
    const navigate = useNavigate();

  return (
    <nav className="bg-primary mb-10 flex items-center justify-center y-3 px-4 md:px-9 fixed top-0 w-full shadow-2xl z-10">
        <div className="flex justify-between items-center w-11/12 p-3 md:p-0"> 
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" className="h-14 w-auto hover:cursor-pointer"/>
            </div>
            <div className="flex justify-center items-center font-medium w-48 h-14 rounded-full text-sm border border-opacity-10 backdrop-blur gap-3 md:ml-20">
                <motion.div whileTap={{ scale: 0.9 }} className={`relative bg-zinc-200 bg-opacity-90 flex justify-center items-center w-20 h-9 rounded-full hover:cursor-pointer hover:bg-opacity-40`} onClick={() => navigate('/home')}>
                    <div>Home</div>
                </motion.div>
                <motion.div whileTap={{ scale: 0.9 }} className={`relative bg-zinc-200 bg-opacity-90 flex justify-center items-center w-20 h-9 rounded-full hover:cursor-pointer hover:bg-opacity-40`} onClick={() => navigate('/work')}>
                    <div>Work</div>
                </motion.div>
            </div>
            <div className=" hidden md:flex m-6 items-center justify-center gap-4">
                <div className= "bg-black-500 p-1 rounded flex items-center gap-1">
                    <FaLinkedin/>
                    <a href="https://www.linkedin.com/in/mofiyinfoluwa-saka/" target="_blank">LinkedIn</a>
                </div>
                <div className= "bg-black-500 p-1 rounded flex items-center gap-1">
                    <FaGithub/>
                    <a href="https://github.com/angiez37" target="_blank">Github</a>
                </div>
                <div className= "bg-black-500 p-1 rounded flex items-center gap-1">
                    <HiOutlineDocumentText/>
                    <a href="../assets/Angel Saka Resume.pdf" target="_blank">Resume</a>
                </div>
            </div>

            {/*Mobile Menu*/}
            <motion.div whileTap={{ scale: 0.9 }} onClick={handleClick} className="md:hidden z-10">
                {!nav ?<FaBars className=" text-white w-6 h-auto hover:cursor-pointer"/> : <ImCancelCircle className=" text-white w-6 h-auto hover:cursor-pointer"/>}
            </motion.div>
            <ul className={!nav ? 'hidden' : "absolute top-20 mt-5 right-0 w-1/4 h-40 bg-primary flex flex-col items-center justify-center rounded-3xl gap-3"}>
                <li className= "bg-black-500 py-2 rounded flex items-center gap-1">
                    <FaLinkedin/>
                    <a href="https://www.linkedin.com/in/mofiyinfoluwa-saka/" target="_blank" className="text-md">LinkedIn</a>
                </li>
                <li className= "bg-black-500 py-2 rounded flex items-center gap-1">
                    <FaGithub/>
                    <a href="https://github.com/angiez37" target="_blank" className="text-md">Github</a>
                </li>
                <li className= "bg-black-500 py-2 rounded flex items-center gap-1">
                    <HiOutlineDocumentText/>
                    <a href="../assets/Angel Saka Resume.pdf" target="_blank" className="text-md">Resume</a>
                </li>
            </ul>
        </div>
    </nav>
  );

};

export default Navbar
