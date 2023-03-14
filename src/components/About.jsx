import React from 'react'
import Sky from '../assets/sky.jpg'

const About = () => {
  return (
    <div name="about" className="w-screen h-screen flex">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1920px]">
                <div className="md:text-left pb-8">
                    <h1 className ="text-4xl sm:text-5xl border-b-4 font-bold text-[#00FFBF]">About</h1>
                </div>
            </div>
            <div className="max-w-[1920px] w-full grid md:grid-cols-2 gap-5">
                <div className="md:text-left text-center px-20 md:border-r-2 col-span-1">
                    <p className ="text-[#00FFBF] font-bold text-2xl py-2">Greetings, my name is Derek!</p>
                    <p>I am a Canadian student graduating from the University of Windsor with a Bachelor's Degree in Computer Science.
                    I have in interest in full stack web development as well as software development.
                    </p>
                </div>
                <div className="px-20 md:px-5 text-center flex items-center justify-center">
                    <img className="border-2 w-[200px] justify-center items-center md:items-center left-0" src={Sky}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About