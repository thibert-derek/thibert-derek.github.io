import React from 'react'

const Footer = () => {

    const today = new Date();
  const year = today.getFullYear();
  return (
    
    <div className="w-full h-full flex">
         <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1920px] mt-10 mb-5">
            <p>&copy; {year} Derek Thibert</p>
            </div>
        </div>
    </div>
  )
}

export default Footer