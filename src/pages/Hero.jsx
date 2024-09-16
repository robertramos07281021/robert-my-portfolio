import { getImageUrl } from '../utils'

const Hero = () => {

  const downloadFileAtURL = (url) => {
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download',url);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <section className="text-white w-full h-screen flex items-center max-sm:flex-col max-sm:pt-32 max-sm:px-2 pt-20" id="home">
      <div className="w-full 2xl:ps-28 md:ps-14 max-sm:p-0 max-sm:order-last max-sm:py-4 max-sm:text-center"> 
        <h1 className="text-6xl font-bold max-sm:text-5xl">Hi, I&#39;m <span className="text-lime-400">Robert</span></h1>
        <p className="mb-5 text-lg max-sm:text-base">I`m a Full-Stack Web Developer using MongoDB, MySQL Express, ReactJS, VueJS And NodeJS.</p>
        <div className="flex gap-5 max-sm:justify-center">
          <a href="https://github.com/robertramos07281021" target="_blank" className='flex items-center justify-center rounded-full border-2 w-11 pt-1 border-lime-300 hover:bg-lime-300 duration-300 ease-in hover:text-black text-3xl text-lime-300'>
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/robert-ramos-45866628a/" target="_blank" className='flex items-center justify-center rounded-full border-2 w-11 pt-1 border-lime-300 hover:bg-lime-300 duration-300 ease-in hover:text-black text-xl text-lime-300'>
            <i className="bi bi-linkedin"></i>
          </a>
          <button className="border-2 border-lime-300 flex items-center py-2 px-4 rounded-full text-lime-300 hover:bg-lime-300 hover:text-black transition ease-in duration-300 font-bold" onClick={()=> {downloadFileAtURL(getImageUrl('CV.pdf'))}}>DOWNLOAD CV</button>
        </div>
      
      </div>
      <div className="w-full flex justify-center relative ">
        <div className="absolute rounded-full 2xl:w-96 2xl:h-96 lg:w-96 lg:h-96 max-sm:h-72 max-sm:w-72 md:h-72 md:w-72 shadow-[0px_0px_35px_2px_rgba(0,0,0,0.2)] shadow-lime-500 max-sm:max-w-72 animate-pulse"></div>
        <img src={getImageUrl("avatar.avif")} alt="hero image of me" className=" 2xl:w-96 2xl:h-96 lg:h-96 lg:w-96 rounded-full max-sm:max-w-72 max-sm:max-h-72 md:h-72 md:w-72"/>
      </div>
    </section>
  )
}

export default Hero
