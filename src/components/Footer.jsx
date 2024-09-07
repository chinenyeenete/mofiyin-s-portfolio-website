import logo from "../assets/Logo.png";
import {TfiEmail} from "react-icons/tfi";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {HiOutlineDocumentText} from "react-icons/hi2";
const Footer = () => {
  return (
    <div className="bg-primary mt-10 flex items-center justify-center y-10 px-10 bottom-0 w-full shadow-2xl">
      <div className="flex flex-row justify-between md:justify-center items-center w-11/12 gap-10 p-3 md:p-5">
        {/*Name and Logo*/}
        <div className="flex justify-center items-center w-1/4 md:w-1/2 gap-4 flex-col lg:flex-row">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-14 w-auto hover:cursor-pointer"/>
          </div>
          <div>
            <p className="prose text-md md:text-lg font-semibold text-center text-white ">Mofiyinfoluwa Angel Saka ©️ 2024</p>
          </div>
        </div>

        {/*Contact*/}
        <div className="flex flex-col justify-center items-center w-1/4 md:w-1/2 gap-4">
          <h2 className="prose text-xl font-semibold text-center text-white">Contact</h2>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="p-3 rounded flex items-center">
              <a href="mailto:angelsaka@yahoo.com" target="_blank"><TfiEmail className="text-pink-900 w-6 h-auto md:w-10 lg:w-10"/></a>
            </div>
            <div className= "p-3 rounded flex items-center">
                <a href="https://www.linkedin.com/in/mofiyinfoluwa-saka/" target="_blank"><FaLinkedin className="text-pink-900 w-6 h-auto md:w-10 lg:w-10"/></a>
            </div>
            <div className= "p-3 rounded flex items-center">
                <a href="https://github.com/angiez37" target="_blank"><FaGithub className="text-pink-900 w-6 h-auto md:w-10 lg:w-10"/></a>
            </div>
            <div className= "p-3 rounded flex items-center">
                <a href="../assets/Angel Saka Resume.pdf" target="_blank"><HiOutlineDocumentText className="text-pink-900 w-6 h-auto md:w-10 lg:w-10"/></a>
            </div>
          </div>
          <p className="prose text-md text-center text-gray-300">Thanks for stopping by!</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
