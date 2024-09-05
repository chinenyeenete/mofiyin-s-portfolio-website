import Pic from '../assets/profile.jpg';
import Crochet from '../assets/crochet.png';

const About = () => {
  return (
    <div className="w-full pb-4 mt-12 lg:mb-35">
        <div className="flex flex-col justify-center items-center lg: items-start">
            <h1 className="text-3xl mb-0 font-extrabold leading-9 tracking-tight text-primary dark:text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">About Me</h1>
            <div className="flex flex-wrap justify-center items-center ">
                <div className="w-full lg:w-1/2">
                    <div className="flex p-20 flex-wrap items-center justify-center">
                        <img src={Pic} alt="Profile Picture" className=" shadow-pic border border-primary border-width-100px border-b rounded-2xl hover:cursor-pointer" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col flex-wrap p-20 justify-center items-center lg:justify-start">
                        <p className="prose text-lg text-gray-600 dark:text-gray-300">
                            <span className="font-bold">Software development</span> has been an interest of mine since high school. Programming isn't just a skill for me, it's a passion. I enjoy the process of turning ideas into reality through code, leveraging critical thinking skills to develop highly efficient solutions to complex problems. I am a <span className="font-bold">problem solver</span> who thrives in challenging environments and I love finding innovative ways to solve <span className="font-bold">real world problems</span>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center w-full px-20 ml-20 items-center">
                <div className="w-full lg:w-2/3">
                    <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">Fun Fact about me, I'm an avid crocheter...</h3>
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
