import React from 'react'
import Face from '../assets/face.jpg'

const Home = () => {
  return (
    <div name='home' className='w-screen h-screen'>
        <div className = 'max-w-[1920px] sm:items-center px-20 flex flex-col justify-center h-full'>
            <div className="py-10">
                <img className="rounded-lg border-2 left-0 max-w-full justify-center items-center sm:items-center sm:max-w-[300px]" src={Face}/>
            </div>
            <h1 className='text-[#00FFBF] font-bold text-4xl sm:text-6xl'>Derek Thibert</h1>
            <h2 className ='text-3xl sm:text-4xl'>Full Stack Web Developer</h2>
        </div>

    </div>
  )
}

export default Home