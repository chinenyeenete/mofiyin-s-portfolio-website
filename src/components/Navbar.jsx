import logo from "../assets/Logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {HiOutlineDocumentText} from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="bg-main mb-20 flex items-center justify-between py-3 px-7">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-14 w-auto"/>
        </div>
        <div className="m-6 flex items-center justify-center gap-8">
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
    </nav>
  );

};

export default Navbar
