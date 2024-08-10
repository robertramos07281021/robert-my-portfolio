// import myHeroImage from '../assets/avatar.avif'
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
        <h1><span className="text-lime-200 max-sm:text-xs">console</span><span>.log</span><span className="text-rose-400">&#40;</span><span className="text-orange-400">&#34;Hello World!&#34;</span><span className="text-rose-400">&#41;</span></h1>
        <h1 className="text-6xl font-bold max-sm:text-5xl">Hi, I&#39;m <span className="text-lime-400">Robert</span></h1>
        <p className="mb-5 text-lg max-sm:text-base">I`m a Full-Stack Web Developer using MongoDB, Express, ReactJS, VueJS And NodeJS.</p>
        <div className="flex gap-5 flex max-sm:justify-center">
        <a href="https://github.com/robertramos07281021" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="40px" height="40px" className="rounded-full p-1 hover:bg-lime-300 border-2 border-lime-300 hover:stroke-black hover:bg-lime-300 ease-in duration-300 fill-lime-300 hover:fill-black">
            <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 13 2.1875 C 18.960938 2.1875 23.8125 7.039063 23.8125 13 C 23.8125 13.46875 23.777344 13.921875 23.71875 14.375 C 23.519531 14.324219 22.894531 14.164063 22.21875 14.15625 C 21.613281 14.148438 20.886719 14.25 20.5 14.3125 C 20.601563 13.898438 20.6875 13.457031 20.6875 13 C 20.6875 11.859375 20.257813 10.75 19.5 9.8125 C 19.78125 8.929688 20.171875 6.921875 19.40625 6.15625 C 17.53125 6.15625 16.476563 7.347656 16.28125 7.59375 C 15.421875 7.28125 14.492188 7.125 13.5 7.125 C 12.53125 7.125 11.59375 7.265625 10.75 7.5625 C 10.488281 7.246094 9.453125 6.15625 7.65625 6.15625 C 6.90625 6.90625 7.28125 8.839844 7.5625 9.75 C 6.769531 10.703125 6.3125 11.832031 6.3125 13 C 6.3125 13.429688 6.347656 13.859375 6.4375 14.25 C 6.109375 14.222656 4.777344 14.125 4.25 14.125 C 3.722656 14.125 2.855469 14.238281 2.28125 14.375 C 2.222656 13.921875 2.1875 13.46875 2.1875 13 C 2.1875 7.039063 7.039063 2.1875 13 2.1875 Z M 4.25 14.375 C 4.769531 14.375 6.371094 14.519531 6.53125 14.53125 C 6.558594 14.625 6.589844 14.71875 6.625 14.8125 C 6.097656 14.769531 4.96875 14.695313 4.25 14.78125 C 3.371094 14.886719 2.722656 15.234375 2.46875 15.375 C 2.414063 15.128906 2.351563 14.875 2.3125 14.625 C 2.863281 14.496094 3.761719 14.375 4.25 14.375 Z M 22.21875 14.40625 C 22.875 14.414063 23.519531 14.554688 23.6875 14.59375 C 23.671875 14.707031 23.644531 14.824219 23.625 14.9375 C 23.539063 14.914063 22.757813 14.675781 21.9375 14.65625 C 21.535156 14.644531 20.898438 14.710938 20.40625 14.75 C 20.429688 14.6875 20.449219 14.625 20.46875 14.5625 C 20.808594 14.515625 21.617188 14.398438 22.21875 14.40625 Z M 21.90625 14.90625 C 22.703125 14.925781 23.546875 15.175781 23.59375 15.1875 C 22.855469 18.777344 20.335938 21.699219 17 23.03125 L 17 21.3125 C 17 20.230469 16.355469 18.824219 15.4375 18.125 C 18.023438 17.753906 19.632813 16.609375 20.3125 15 C 20.777344 14.960938 21.488281 14.894531 21.90625 14.90625 Z M 5.0625 15 C 5.777344 15.003906 6.417969 15.039063 6.71875 15.0625 C 7.414063 16.636719 9.011719 17.757813 11.5625 18.125 C 11.273438 18.347656 11.003906 18.636719 10.78125 18.96875 C 10.773438 18.980469 10.757813 18.988281 10.75 19 C 10.25 19.601563 9.3125 19.5625 8.4375 19.5625 C 7.542969 19.5625 7.007813 18.847656 6.53125 18.21875 C 6.050781 17.59375 5.425781 17.539063 5.09375 17.5 C 4.761719 17.464844 4.671875 17.632813 4.84375 17.75 C 5.816406 18.433594 6.199219 19.269531 6.59375 20 C 6.949219 20.65625 7.679688 21 8.5 21 L 10.03125 21 C 10.019531 21.101563 10 21.214844 10 21.3125 L 10 23.375 C 6.316406 22.3125 3.464844 19.359375 2.53125 15.625 C 2.726563 15.515625 3.414063 15.132813 4.28125 15.03125 C 4.488281 15.007813 4.765625 15 5.0625 15 Z M 13.5 21 C 13.777344 21 14 21.222656 14 21.5 L 14 23.75 C 13.667969 23.78125 13.339844 23.8125 13 23.8125 L 13 21.5 C 13 21.222656 13.222656 21 13.5 21 Z M 11.5 21.59375 C 11.777344 21.59375 12 21.816406 12 22.09375 L 12 23.75 C 11.667969 23.71875 11.324219 23.683594 11 23.625 L 11 22.09375 C 11 21.816406 11.222656 21.59375 11.5 21.59375 Z M 15.5 21.59375 C 15.777344 21.59375 16 21.816406 16 22.09375 L 16 23.375 C 15.671875 23.46875 15.339844 23.5625 15 23.625 L 15 22.09375 C 15 21.816406 15.222656 21.59375 15.5 21.59375 Z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/robert-ramos-45866628a/" target="_black">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="40px" height="40px" className="rounded-full p-1 hover:bg-lime-300 border-2 border-lime-300 hover:stroke-black hover:bg-lime-300 ease-in duration-300 fill-lime-300 hover:fill-black ">
            <path d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 22.501953 18.503906 C 20.872953 18.503906 19.552734 19.824172 19.552734 21.451172 C 19.552734 23.078172 20.871953 24.400391 22.501953 24.400391 C 24.126953 24.400391 25.447266 23.079172 25.447266 21.451172 C 25.447266 19.826172 24.126953 18.503906 22.501953 18.503906 z M 37.933594 26.322266 C 35.473594 26.322266 33.823437 27.672172 33.148438 28.951172 L 33.078125 28.951172 L 33.078125 26.728516 L 28.228516 26.728516 L 28.228516 43 L 33.28125 43 L 33.28125 34.949219 C 33.28125 32.826219 33.687359 30.771484 36.318359 30.771484 C 38.912359 30.771484 38.945312 33.200891 38.945312 35.087891 L 38.945312 43 L 44 43 L 44 34.074219 C 44 29.692219 43.054594 26.322266 37.933594 26.322266 z M 19.972656 26.728516 L 19.972656 43 L 25.029297 43 L 25.029297 26.728516 L 19.972656 26.728516 z"/></svg>
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
