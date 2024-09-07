import Pic from '../assets/profile.jpg';
import Crochet from '../assets/crochet.png';

const About = () => {
  return (
    <div className="w-full pb-4 mt-12 lg:mb-20 flex justify-center items-center ">
        <div className="flex flex-col justify-between items-center lg: items-start w-11/12">
            <h1 className="text-3xl mb-0 font-extrabold leading-9 tracking-tight text-primary dark:text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">About Me</h1>
            <div className="flex flex-wrap justify-center items-center ">
                <div className="w-full lg:w-1/2">
                    <div className="flex p-20 flex-wrap items-center justify-center">
                        <img src={Pic} alt="Profile Picture" className=" shadow-pic border border-primary border-width-100px border-b rounded-3xl hover:cursor-pointer" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col flex-wrap p-20 justify-center items-center lg:justify-start gap-7">
                        <p className="prose text-lg text-gray-600 dark:text-gray-300">I'm in my second year of Software Engineering and Management at <span className="font-bold">McMaster University</span>. I am currently working at McMaster University. In my freetime, I enjoy developing side projects and learning new technologies.</p>
                        <p className="prose text-lg text-gray-600 dark:text-gray-300">
                            <span className="font-bold">Software development</span> has been an interest of mine since high school and I love the process of turning ideas into reality through code.
                        </p>
                        <p className="prose text-lg text-gray-600 dark:text-gray-300">I am intersted in aerospace, autonomous systems, full stack development, machine learning and more. I am actively seeking internship opportunities for <span className="font-bold">spring/summer 2025.</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center w-full px-20 ml-20 lg:mb-14 items-center gap-7">
                <div className="w-full lg:w-1/2">
                    <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">Fun fact about me, I love to crochet</h3>
                </div>
                <div className="w-full lg:w-1/3 ">
                    <img src={Crochet} alt="Crochet Pillow" className="hover:cursor-pointer" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
