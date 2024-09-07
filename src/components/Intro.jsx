import Avatar from '../assets/avatar.jpeg';
const Intro = () => {
  return (
    <div className="border-b border-white px-9 py-5 mt-20 justify-center items-center lg:mb-20">
        <div className="flex flex-wrap justify-center items-center w-full ">
            <div className="w-full lg:w-1/2 p-12">
                <div className="flex flex-col mt-14 justify-center items-center gap-3">
                    <div className=" flex items-center justify-start gap-4">
                        <h1 className="pb-3 text-4xl text-left font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Hi I'm </h1>
                        <h1 className="pb-3 text-4xl text-left font-extrabold leading-9 tracking-tight text-primary dark:text-primary-dark sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Angel,</h1>
                    </div>
                    <p className="prose pt-5 text-2xl font-semibold text-center text-gray-600 dark:text-gray-300">
                        A Software Engineering & Management student at McMaster University {/*I am actively seeking internship opportunities for <span className="font-bold">spring/summer 2025.</span>*/}
                    </p>
                    <p className="prose pt-5 font-semibold text-xl text-left text-primary dark:text-gray-300">Thanks for stopping by!</p>
                </div>
            </div>
            <div className="w-full lg:w-2/5 p-12">
                <div className="flex justify-center items-center mt-14">
                    <img src={Avatar} alt="Avatar" className="rounded-full hover:cursor-pointer" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Intro
