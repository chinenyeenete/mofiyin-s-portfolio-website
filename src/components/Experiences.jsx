import {motion} from 'framer-motion'

{/*Work Experiences & Extracurriculars*/}
const Experiences = () => {
  return (
    <div className="w-full m-5 md:m-10">
      <div className="flex flex-col justify-center items-center mr-10 pb-4">
        <h1 className="text-3xl mb-2 md:mb-8 text-center p-5 md:w-5/6 font-extrabold leading-9 tracking-tight text-primary dark:text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Experiences</h1>
        <div className="flex flex-col justify-center items-center p-5 gap-10 md:w-5/6">
          {/*Tech@RBC*/}
          <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col md:flex-row justify-start items-start p-5 gap-2 md:gap-10 bg-gradient-to-r from-white to-pink-50 dark:from-pink-50 dark:to-pink-600 rounded-3xl shadow-lg w-11/12">
            <p className="text-gray-700 dark:text-white font-bold text-2xl p-5 2xl:text-5xl md:text-4xl text-shadow-lg md:text-shadow-lg text-lg text-center w-full md:w-1/2"> Tech@RBC Women's Advisory Program</p>
            <div className="flex flex-col justify-start items-start p-2 md:p-5 gap-3 w-full md:w-1/2">
              <p className="font-semibold text-pink-900 dark:text-pink-300 text-base md:text-xl 2xl:text-2xl text-lg text-left">Participant</p>
              <p className="text-sm text-gray-700 dark:text-gray-400 font-serif">Sep 2024 - Present</p>
              <p className="text-md text-gray-700 dark:text-gray-400 font-serif">A professional development program by RBC to empower the next generation of tech leaders through mentorship and networking opportunities.</p>
            </div>
          </motion.div>
          {/*DeltaHacks*/}
          <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col md:flex-row justify-start items-start p-5 gap-2 md:gap-10 bg-gradient-to-r from-white to-pink-50 dark:from-pink-50 dark:to-pink-600 rounded-3xl shadow-lg w-11/12">
            <p className="text-gray-700 dark:text-white font-bold text-2xl p-5 2xl:text-5xl md:text-4xl text-shadow-lg md:text-shadow-lg text-lg text-center w-full md:w-1/2"> DeltaHacks</p>
            <div className="flex flex-col justify-start items-start p-2 md:p-5 gap-3 w-full md:w-1/2">
              <p className="font-semibold text-pink-900 dark:text-pink-300 text-base md:text-xl 2xl:text-2xl text-lg text-left">Logistics Executive</p>
              <p className="text-sm text-gray-700 dark:text-gray-400 font-serif">Jul 2024 - Present</p>
              <p className="text-md text-gray-700 dark:text-gray-400 font-serif">Planning McMaster University's annual hackathon for change.</p>
            </div>
          </motion.div>
          {/*NSBE McMaster*/}
          <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col md:flex-row justify-start items-start p-5 gap-2 md:gap-10 bg-gradient-to-r from-white to-pink-50 dark:from-pink-50 dark:to-pink-600 rounded-3xl shadow-lg w-11/12">
            <p className="text-gray-700 dark:text-white font-bold text-2xl p-5 2xl:text-5xl md:text-4xl text-shadow-lg md:text-shadow-lg text-lg text-center w-full md:w-1/2"> NSBE McMaster</p>
            <div className="flex flex-col justify-start items-start p-2 md:p-5 gap-3 w-full md:w-1/2">
              <p className="font-semibold text-pink-900 dark:text-pink-300 text-base md:text-xl 2xl:text-2xl text-lg text-left">Membership Co-Chair</p>
              <p className="text-sm text-gray-700 dark:text-gray-400 font-serif">May 2024 - Present</p>
              <p className="text-md text-gray-700 dark:text-gray-400 font-serif">Planning social events to support black students in the Faculty of Engineering.</p>
            </div>
          </motion.div>
          {/*McSCert*/}
          <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col md:flex-row justify-start items-start p-5 gap-2 md:gap-10 bg-gradient-to-r from-white to-pink-50 dark:from-pink-50 dark:to-pink-600 rounded-3xl shadow-lg w-11/12">
            <p className="text-gray-700 dark:text-white font-bold text-2xl p-5 2xl:text-5xl md:text-4xl text-shadow-lg md:text-shadow-lg text-lg text-center w-full md:w-1/2">McSCert Lab</p>
            <div className="flex flex-col justify-start items-start p-2 md:p-5 gap-3 w-full md:w-1/2">
              <p className="font-semibold text-pink-900 dark:text-pink-300 text-base md:text-xl 2xl:text-2xl text-lg text-left">Software Engineering Research Assistant</p>
              <p className="text-sm text-gray-700 dark:text-gray-400 font-serif">Apr 2024 - Aug 2024</p>
              <p className="text-md text-gray-700 dark:text-gray-400 font-serif">Developed a track level fusion algorithm for a 1/10 scaled ego vehicle.</p>
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  )
}

export default Experiences
