import { useState } from "react"


const Header = () => {
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
  const [mouseHoverProject, setMouseHoverProject] = useState(false)
  const handleMouseHoverProject =() => {
    setMouseHoverProject(true)
  }
  const handleMouseHoverLeaveProject = ()=> {
    setMouseHoverProject(false)
  }
  const [mouseHoverContact, setMouseHoverContact] = useState(false)
  const handleMouseHoverContact =() => {
    setMouseHoverContact(true)
  }
  const handleMouseHoverLeaveContact = ()=> {
    setMouseHoverContact(false)
  }

  const [scrollLocation, setScrollLocation] = useState() 
  window.addEventListener("scroll", () => {
    setScrollLocation(window.scrollY);
  });

  console.log(scrollLocation)
  const [mobileNav, setMobileNav] = useState(false)
  const [closeNav, setCloseNav] = useState(false)
  const MobileNavOpen = ()=> {
    setMobileNav(true);
    setTimeout(()=> {
      setCloseNav(true)
    },500)
  }
  const MobileNavClose = ()=> {
    setMobileNav(false);
    setCloseNav(false)
  }

  const mobileNavOnclick = ()=> {
    setMobileNav(false);
    setCloseNav(false)
  }
  

  return (
    <>

    <nav className=" h-20 xs:hidden lg:flex justify-between items-center px-10 bg-black hover:shadow-lg hover:shadow-lime-500 fixed w-screen z-50 duration-500 transition ease-in-out"> 
      <a href='/' className=" lg:text-3xl xl:text-4xl font-bold text-white hover:text-lime-400"><p className="hover:scale-110 duration-500 ease-in-out "><span className="text-lime-400">My</span> Portfolio</p></a>
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
          <a href="#projects" accessKey="p"><p className={`hover:scale-110 ease-in-out duration-500 transition  hover:text-lime-400 ${scrollLocation >= 1478 && scrollLocation < 2217 ? 'text-lime-400' : "" } `} onMouseEnter={handleMouseHoverProject} onMouseLeave={handleMouseHoverLeaveProject}>Projects</p></a>
          <div className={`border  border-lime-400 rounded-full ${mouseHoverProject ? 'w-full' : 'w-0'} ${scrollLocation >= 1478 && scrollLocation < 2217   ? 'w-full' : ""} hover:w-full w-0 ease-in-out duration-500 transition-width`}></div>
        </li>
        <li className="w-auto">
          <a href="#contact" accessKey="c"><p className={`hover:scale-110 ease-in-out duration-500 transition  hover:text-lime-400 ${scrollLocation >= 2217 ? 'text-lime-400' : "" } `} onMouseEnter={handleMouseHoverContact} onMouseLeave={handleMouseHoverLeaveContact}>Contact</p></a> 
          <div className={`border  border-lime-400 rounded-full ${mouseHoverContact ? 'w-full' : 'w-0'} ${scrollLocation >= 2217 ? 'w-full' : ""} hover:w-full w-0 ease-in-out duration-500 transition-width`}></div>
        </li>
      </ul>
    </nav>
    <nav className="xs:flex lg:hidden w-full h-10 py-8 px-3 fixed  items-center justify-between z-50 bg-black">
      <a href='/' className=" font-bold text-3xl text-white hover:text-lime-400"><p className="hover:scale-105 duration-500 ease-in-out "><span className="text-lime-400 ps-4">My</span> Portfolio</p></a>
      <i className="bi bi-list text-white text-4xl" onClick={MobileNavOpen}></i>
      <div className={`w-screen h-screen  absolute top-0 left-0 ${mobileNav ? 'translate-x-0' : 'translate-x-full'}  flex duration-500 transition ease-in-out`}>
        <div className={`w-full bg-lime-500/30 ${closeNav ? "opacity-100" : "opacity-0"}`} onClick={MobileNavClose}></div>
        <ul className=" text-lime-400 w-[600px] bg-black text-2xl p-5 flex flex-col gap-5">
          <a href="#home" onClick={mobileNavOnclick}>
            <li>Home</li>
          </a>
          <a href="#aboutm" accessKey="a" onClick={mobileNavOnclick}>
            <li>About</li>
          </a>
          <a href="#projects" onClick={mobileNavOnclick}>
            <li>Project</li>
          </a>
          <a href="#contact" onClick={mobileNavOnclick}>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header
