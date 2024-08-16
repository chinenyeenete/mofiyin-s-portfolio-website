import logo from "../assets/Logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {HiOutlineDocumentText} from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    
    {/*const location = useLocation();
    const navigate = useNavigate();

    const toggleTab = (destination) =>{
        navigate(destination);
    }

    //Header tabs
    const [tab, setTab] = useState(false); 
    
    //toggle between tabs
    const toggleTab = () => { 
        setTab(!tab);
    }*/}
  return (
    <nav className="bg-primary mb-8 flex items-center justify-between y-3 px-9 fixed top-0 w-full shadow-2xl">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-14 w-auto hover:cursor-pointer"/>
        </div>
        <div className="flex justify-center items-center font-medium w-48 h-14 rounded-full text-sm border border-opacity-10 backdrop-blur gap-3">
            <div className={`relative bg-zinc-200 bg-opacity-90 flex justify-center items-center w-20 h-9 rounded-full hover:cursor-pointer hover:bg-opacity-40`}>
                <div>Home</div>
            </div>
            <div className={`relative bg-zinc-200 bg-opacity-90 flex justify-center items-center w-20 h-9 rounded-full hover:cursor-pointer hover:bg-opacity-40`}>
                <div>Work</div>
            </div>
        </div>
        <div className="m-6 flex items-center justify-center gap-4">
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
