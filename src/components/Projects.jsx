import React from 'react'
import weather from '../assets/weather.jpeg'

const Projects = () => {
  return (
    <div name="projects" className="w-screen h-full flex">
         <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1920px]">
                <div className="sm:text-left pb-8">
                    <h1 className ="text-4xl sm:text-5xl border-b-4 font-bold text-[#00FFBF]">Projects</h1>
                </div>
                </div>
                <div className = "text-2xl px-20">
                    <p>Check out some of my work.</p>
                </div>
                
                <div>
                    
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 px-10 sm:px-20 py-10 justify-center gap-4 items-center">
                            <span className='border-2 justify-center'>
                                <div>
                                <img className="sm:max-h-[600px] w-full" src={weather}/>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className = "font-bold text-2xl text-[#00FFBF]">Eye To The Sky</h3>
                                    <p className="py-4">Personal project building a weather application. Used OpenWeatherAPI, React and Tailwind.</p>
                                    <div className = "justify-between items-right">
                                        {/* <a className="px-4 my-2 border-2 hover:bg-white hover:text-black duration-300" href="/">
                                        Demo
                                        </a> */}
                                        <a className="px-4 mx-2 my-2 border-2 md:hover:bg-white md:hover:text-black md:duration-300" href="https://github.com/thibert-derek/eyetothesky">
                                        Code
                                        </a>
                                    </div>
                                </div>
                            </span>
                            {/* <span className='border-2'>
                                <div>
                                <img className="sm:max-h-[500px]" src={weather}/>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className = "font-bold text-2xl text-[#00FFBF]">Eye To The Sky</h3>
                                    <p className="py-4">Personal project building a weather application. Used OpenWeatherAPI, React and Tailwind.</p>
                                    <div className = "justify-between items-right">
                                        <a className="px-4 my-2 border-2 hover:bg-white hover:text-black duration-300" href="/">
                                        Demo
                                        </a>
                                        <a className="px-4 mx-2 my-2 border-2 hover:bg-white hover:text-black duration-300" href="https://github.com/thibert-derek/eyetothesky">
                                        Code
                                        </a>
                                    </div>
                                </div>
                            </span>
                            <span className='border-2 justify-center'>
                                <div>
                                <img className="sm:max-h-[500px]" src={weather}/>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className = "font-bold text-2xl text-[#00FFBF]">Eye To The Sky</h3>
                                    <p className="py-4">Personal project building a weather application. Used OpenWeatherAPI, React and Tailwind.</p>
                                    <div className = "justify-between items-right">
                                        <a className="px-4 my-2 border-2 hover:bg-white hover:text-black duration-300" href="/">
                                        Demo
                                        </a>
                                        <a className="px-4 mx-2 my-2 border-2 hover:bg-white hover:text-black duration-300" href="https://github.com/thibert-derek/eyetothesky">
                                        Code
                                        </a>
                                    </div>
                                </div>
                            </span> */}
                        </div>
                    </div>
                </div>
                </div>
                </div>
  )
}

export default Projects