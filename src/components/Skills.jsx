import React from 'react'
import {FaHtml5, FaReact, FaCss3, FaJava, FaPython, FaNodeJs} from 'react-icons/fa'
import { BsFiletypeSql } from 'react-icons/bs'
import { SiC, SiJavascript } from 'react-icons/si'
const Skills = () => {
  return (
    <div name="skills" className="w-screen h-screen last:flex">
         <div className="flex flex-col justify-center items-center w-screen h-full">
            <div className="max-w-[1920px]">
                <div className="sm:text-left pb-8">
                    <h1 className ="text-4xl sm:text-5xl border-b-4 font-bold text-[#00FFBF]">Skills</h1>
                </div>
            </div>
            <div>
                <div className = "text-2xl px-20">
                    <p>Here are the technologies I've worked with.</p>
                </div>
            </div>
            <div>
                <div >
                    <ul className="py-10 grid grid-cols-3 sm:grid-cols-5">
                        <li className="my-3 text-3xl sm:text-6xl">
                            <FaHtml5 />
                        </li>
                        <li className="my-3 text-3xl sm:text-6xl">
                            <FaReact />
                        </li>
                        <li className="my-3 text-3xl sm:text-6xl">
                            <FaCss3 />
                        </li>
                        <li className="my-3 text-3xl sm:text-6xl">
                            <BsFiletypeSql />
                        </li>
                        <li className="my-3 text-3xl sm:text-6xl">
                            <FaJava />
                        </li>
                        <li className="my-3 text-3xl sm:text-6xl">
                            <SiJavascript />
                        </li>
                        <li className="my-3 text-3xl sm:text-6xl">
                            <FaPython />
                        </li>
                        <li className="my-3 text-3xl sm:text-6xl">
                            <FaNodeJs />
                        </li>
                        <li className="my-3 text-3xl sm:text-6xl">
                            <SiC />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills