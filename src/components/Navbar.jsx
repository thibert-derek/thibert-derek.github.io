import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="sm:bg-[#000235] fixed w-screen h-[100px] flex justify-between items-center">
        
        {/* Menu */}
        <div>
        <ul className ="hidden sm:flex">
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>    
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className ="sm:hidden hover:text-2xl duration-300 z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#000235]'}>
            <li className = "py-4 text-3xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className = "py-4 text-3xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li className = "py-4 text-3xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className = "py-4 text-3xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li className = "py-4 text-3xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <ul className="hidden sm:flex fixed flex-col top-[25%] left-0">
          <li className = "py-2 text-4xl hover:ml-[10px] duration-300"><a href="https://www.linkedin.com/in/derek-thibert/"><FaLinkedin /></a></li>
          <li className = "py-2 text-4xl hover:ml-[10px] duration-300"><a href="https://github.com/thibert-derek"><FaGithub /></a></li>
        </ul>
    </div>
  )
}

export default Navbar