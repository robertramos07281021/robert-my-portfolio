import { useState } from "react"
import { getImageUrl } from "../utils"

const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  function showMenu() {
    const navMenu = document.getElementById('navMenu')
    setToggleMenu(!toggleMenu);
    if(!toggleMenu) {
      navMenu.classList.add('flex')
      navMenu.classList.remove('hidden')
    } else {
      navMenu.classList.remove('flex')
      navMenu.classList.add('hidden')
    }
  }

  const [mouseHoverHome, setMouseHoverHome] = useState(false)
  const handleMouseHoverHome =() => {
    setMouseHoverHome(true)
  }
  const handleMouseHoverLeaveHome = ()=> {
    setMouseHoverHome(false)
  }
  const [mouseHoverAbout, setMouseHoverAbout] = useState(false)
  const handleMouseHoverAbout =() => {
    setMouseHoverAbout(true)
  }
  const handleMouseHoverLeaveAbout = ()=> {
    setMouseHoverAbout(false)
  }




  const [scrollLocation, setScrollLocation] = useState() 

  window.addEventListener("scroll", () => {
    setScrollLocation(window.scrollY);
  });
  console.log(scrollLocation)

  return (
    <nav className=" h-20 flex justify-between items-center lg:px-10 bg-black hover:shadow-lg hover:shadow-lime-500 fixed w-screen z-50 duration-500 transition ease-in-out"> 
      <a href='/' className=" lg:text-3xl xl:text-4xl font-bold text-white hover:text-lime-400"><p className="hover:scale-110 duration-500 ease-in-out "><span className="text-lime-400">My</span> Portfolio</p></a>
      <img src={toggleMenu ? `${getImageUrl('closebutton.png')}` : `${getImageUrl('menubutton.png')}`} alt="menubutton" className="w-10 h-10 block md:hidden lg:hidden xl:hidden 2xl:hidden" onClick={showMenu}/>
      <ul id="navMenu" className=" flex text-white text-2xl lg:gap-20 2xl:gap-24">
        <li className="w-auto">
          <a href="#home" accessKey="h"><p className={`hover:scale-110 ease-in-out duration-500 transition  hover:text-lime-400 ${scrollLocation < 739 ? 'text-lime-400' : "" }`} onMouseEnter={handleMouseHoverHome} onMouseLeave={handleMouseHoverLeaveHome}>Home</p></a>
          <div className={`border  border-lime-400 rounded-full ${mouseHoverHome ? 'w-full' : 'w-0'} ${scrollLocation < 739 ? 'w-full' : ""} hover:w-full w-0 ease-in-out duration-500 transition-width`}></div>
        </li>
        <li className="w-auto">
          <a href="#about" accessKey="a"><p className={`hover:scale-110 ease-in-out duration-500 transition  hover:text-lime-400 ${scrollLocation < 1478 && scrollLocation >= 739 ? 'text-lime-400' : "" } `} onMouseEnter={handleMouseHoverAbout} onMouseLeave={handleMouseHoverLeaveAbout}>About Me</p></a>
          <div className={`border  border-lime-400 rounded-full ${mouseHoverAbout ? 'w-full' : 'w-0'} ${scrollLocation < 1478 && scrollLocation >= 739 ? 'w-full' : ""} hover:w-full w-0 ease-in-out duration-500 transition-width`}></div>
        </li>
        <li className="w-auto">
          <a href="#projects" accessKey="p"><p className={`hover:scale-110 ease-in-out duration-500 transition  hover:text-lime-400 ${scrollLocation >= 1478 && scrollLocation < 3218 ? 'text-lime-400' : "" } `} onMouseEnter={handleMouseHoverAbout} onMouseLeave={handleMouseHoverLeaveAbout}>Projects</p></a>
          <div className={`border  border-lime-400 rounded-full ${mouseHoverHome ? 'w-full' : 'w-0'} ${scrollLocation >= 1478 && scrollLocation < 3218   ? 'w-full' : ""} hover:w-full w-0 ease-in-out duration-500 transition-width`}></div>
        </li>
        <li className="w-auto">
          <a href="#contact" accessKey="c"><p className="hover:scale-110">Contact</p></a> 
          <div className={`border  border-lime-400 rounded-full ${mouseHoverHome ? 'w-full' : 'w-0'} ${scrollLocation < 739 ? 'w-full' : ""} hover:w-full w-0 ease-in-out duration-500 transition-width`}></div>
        </li>
      </ul>
    </nav>
  )
}

export default Header
