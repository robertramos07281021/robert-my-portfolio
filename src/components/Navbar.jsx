import { useState } from "react"



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



  return (
    <nav className=" h-20 flex justify-between items-center max-sm:px-6 md:px-8 lg:px-10 xl:px-10 2xl:px-10 bg-black text-lime-400  shadow-lg shadow-lime-500 fixed w-screen z-50"> 
      <a href='/' className=" max-sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold "><p className="hover:scale-125"><span>My</span> Portfolio</p></a>
      <img src={toggleMenu ? './src/assets/closebutton.png' : "./src/assets/menubutton.png"} alt="menubutton" className="w-10 h-10 block md:hidden lg:hidden xl:hidden 2xl:hidden" onClick={showMenu}/>
      <ul id="navMenu" className=" sm:gap-2 md:gap-8 lg:gap-12 lx:gap-20 2xl:gap-24 text-2xl hidden md:flex lg:flex xl:flex 2xl:flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-col max-sm:absolute max-sm:top-20 max-sm:right-0 max-sm:w-32 max-sm:items-center bg-black font-semibold max-sm:shadow-lg max-sm:shadow-lime-500 max-sm:backdrop-blur-lg">
        <li>
          <a href="#home"><p className="hover:scale-125">Home</p></a>
        </li>
        <li>
          <a href="#about"><p className="hover:scale-125">About Me</p></a>
        </li>
        <li>
          <a href="#projects"><p className="hover:scale-125">Projects</p></a>
        </li>
        <li>
          <a href="#contact"><p className="hover:scale-125">Contact</p></a> 
        </li>
      </ul>
    </nav>
  )
}

export default Header
