import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-screen h-full flex justify-center items-center">
    <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1920px]">
            <div className="sm:text-left pb-8">
                <h1 className ="text-4xl sm:text-5xl border-b-4 font-bold text-[#00FFBF]">Contact</h1>
            </div>
        </div>
        <div className="text-1xl sm:text-2xl px-20">
                <p>Submit the form below or send me an email -- <a href="mailto:thibertderek@gmail.com" className="text-[#00FFBF]">thibertderek@gmail.com</a></p>
            </div>
        <form action="" className="flex flex-col max-w-[1000px] w-screen px-10 sm:px-20">
            <input className="p-2 my-2 bg-[#ccd6f6]" type="text" placeholder="Name" name="name"/>
            <input className="p-2 my-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email"/>
            <textarea className="p-2 my-2 bg-[#ccd6f6]" cols="30" rows="10" type="message" placeholder="Message" name="name"/>
            <button className="border-2 hover:bg-white hover:text-black duration-300">Send</button>
            </form>
    </div>
    </div>
  )
}

export default Contact