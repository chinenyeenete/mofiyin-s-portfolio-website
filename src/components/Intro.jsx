import Avatar from '../assets/avatar.jpeg';
const Intro = () => {
  return (
    <div className="border-b border-white pb-4 lg:mb-35">
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/2 p-9">
                <div className="flex flex-col items-center lg: items-start">
                    <div className=" flex items-center justify-center gap-4">
                        <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Hi, I'm </h1>
                        <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-primary dark:text-primary-dark sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Angel!</h1>
                    </div>
                    <p className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
                        I am a second year student at McMaster University studying Software Engineering and Management. In my freetime, I enjoy devloping side projects and learning new technologies I am actively seeking internship opportunities for spring/summer 2025.
                    </p>
                    <p className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">Thanks for stopping by!</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg: p-9">
                <div className="flex justify center">
                    <img src={Avatar} alt="Avatar" className="rounded-full" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Intro
