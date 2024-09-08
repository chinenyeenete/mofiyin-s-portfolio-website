import logo from "../assets/logo.png";
import {TfiEmail} from "react-icons/tfi";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {HiOutlineDocumentText} from "react-icons/hi2";
import {motion} from "framer-motion";
const Footer = () => {
  return (
    <div className="bg-primary mt-8 flex items-center justify-center px-2 md:px-5 bottom-0 w-full shadow-2xl">
      <div className="flex flex-row justify-between md:justify-center items-center w-11/12 gap-10 p-3 md:p-5">
        {/*Name and Logo*/}
        <motion.div 
          whileInView={{ scale: [1, 1.1, 1] }} viewport={{ once: false, amount: 0.5 }} transition={{duration: 1}}
          className="flex justify-center items-center w-1/3 md:w-1/2 gap-4 flex-col lg:flex-row">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-14 w-auto hover:cursor-pointer"/>
          </div>
          <div>
            <p className="prose text-md md:text-lg font-semibold text-center text-white ">Mofiyinfoluwa Angel Saka ©️ 2024</p>
          </div>
        </motion.div>

        {/*Contact*/}
        <motion.div 
          whileInView={{ scale: [1, 1.1, 1] }} viewport={{ once: false, amount: 0.5 }} transition={{duration: 1}}
          className="flex flex-col justify-center items-center w-1/2 gap-4">
          <h2 className="prose text-xl font-semibold text-center text-white">Contact</h2>
          <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
            <div className="p-3 rounded flex items-center">
              <a href="mailto:angelsaka@yahoo.com" target="_blank"><TfiEmail className="text-pink-900 w-4 h-auto md:w-10 lg:w-10"/></a>
            </div>
            <div className= "p-3 rounded flex items-center">
                <a href="https://www.linkedin.com/in/mofiyinfoluwa-saka/" target="_blank"><FaLinkedin className="text-pink-900 w-5 h-auto md:w-10 lg:w-10"/></a>
            </div>
            <div className= "p-3 rounded flex items-center">
                <a href="https://github.com/angiez37" target="_blank"><FaGithub className="text-pink-900 w-5 h-auto md:w-10 lg:w-10"/></a>
            </div>
            <div className= "p-3 rounded flex items-center">
                <a href="../assets/Angel Saka Resume.pdf" target="_blank"><HiOutlineDocumentText className="text-pink-900 w-5 h-auto md:w-10 lg:w-10"/></a>
            </div>
          </div>
          <p className="prose text-md text-center text-gray-300">Thanks for stopping by!</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer
