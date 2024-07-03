import { FaFacebook, FaLinkedin  } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa6";
import { SiMongodb, SiExpress, SiTailwindcss  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p1b1i0j', 'template_4p72g9t', form.current, {
        publicKey: 'UIbkLpfAyY9h41nE4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          document.getElementById('from_name'). value = "";
          document.getElementById('from_email').value = "";
          document.getElementById('message').value = "";
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (

      <section className="text-white 2xl:text-5xl  w-full h-screen flex items-center justify-center justify-between flex-col" id="contact">
        <div className="2xl:w-8/12 2xl:h-3/6 xl:w-10/12 lg:w-11/12 md:w-full md:px-5 mt-40 max-sm:mt-36 flex flex-col 2xl:gap-5 md:relative max-sm:relative max-sm:w-9/12 ">
          <h1 className="text-4xl font-bold tracking-widest lg:mb-4 max-sm:text-2xl">Contac<span className="text-lime-500">t</span></h1>
          <form className="w-full h-full flex gap-10 max-sm:flex-col max-sm:gap-2" ref={form} onSubmit={sendEmail}>
            <div className="w-full h-full flex flex-col gap-4 max-sm:gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="from_name" className="text-xl text-lime-300 font-semibold max-sm:text-base">Name or Company Name :</label>
                <input type="text"  name="from_name" id="from_name" className="w-full text-base max-sm:text-xs p-2 rounded focus:ring focus:ring-lime-300 focus:border-none shadow-[0_0_5px_5px_rgba(132,204,22,1)] shadow-lime-500 focus:text-lime-300 focus:bg-black text-black" placeholder="Enter your name or your company name" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="from_email" className="text-xl text-lime-300 font-semibold max-sm:text-base">Email :</label>
                <input type="email" name="from_email" id="from_email" className="w-full text-base p-2 rounded focus:ring focus:ring-lime-300 focus:border-none shadow-[0_0_5px_5px_rgba(132,204,22,1)] shadow-lime-500 focus:text-lime-300 focus:bg-black text-black" placeholder="Enter email"/>
              </div>
              <div className="w-full h-16 flex gap-5 text-base max-sm:text-xs justify-center 2xl:static lg:static md:absolute xl:static md:-bottom-16 md:items-center -right-[53px] max-sm:absolute max-sm:-bottom-20 max-sm:w-screen max-sm:gap-1 max-sm:items-center md:-right-0 md:-bottom-18 max-sm:px-1">
                <div className="border-2 border-lime-300 rounded-full w-12 max-sm:text-sm lg:h-9 lg:text-xl lg:w-11 xl:h-10 xl:text-3xl max-sm:h-6 max-sm:w-6 2xl:text-2xl 2xl:w-11 2xl:h-9 h-10  md:h-12 flex items-center justify-center text-lime-300 hover:text-black hover:bg-lime-300 duration-300 transition ease-in md:text-3xl "><FaFacebook/></div>
                <div className="border-2 border-lime-300 rounded-full w-12 max-sm:text-sm lg:text-xl lg:h-9 lg:w-11 xl:h-10 xl:text-3xl max-sm:h-6 max-sm:w-6   2xl:text-2xl 2xl:w-11 2xl:h-9 h-10 md:h-12 flex items-center justify-center text-lime-300 hover:text-black hover:bg-lime-300 duration-300 transition ease-in md:text-3xl" ><FaLinkedin /></div>
                <div className="flex items-center max-sm:text-xs text-lime-300 max-sm:w-16">PH +63 9126448847</div>
                <div className="flex items-center max-sm:text-xs text-lime-300 max-sm:w-48 ">Email: robert.ramos07281021@gmail.com</div>
              </div>
              <input type="hidden" name='to_name' id='to_name' value='Robert' />
            </div>
            <div className="w-full h-full flex flex-col gap-2">
              <label htmlFor="message" className="text-xl text-lime-300 font-semibold max-sm:text-base">Message: </label>
              <textarea name="message" id="message" className=" resize-none w-full text-base p-2 rounded focus:ring focus:ring-lime-300 focus:border-none shadow-[0_0_5px_5px_rgba(132,204,22,1)] shadow-lime-500 focus:text-lime-300 focus:bg-black text-black md:h-56" placeholder="Message"></textarea>
              <div className="flex justify-center mt-4">
                <input className="bg-lime-400 w-44 h-10 max-sm:h-8 max-sm:w-40 text-xl max-sm:text-base rounded-md text-black font-bold border-2 border-lime-400 hover:bg-black hover:text-lime-400 transition easy-in duration-300 shadow-inner shadow-black hover:shadow-lime-300" type="submit" value='Send Message'/>
              </div>
            </div>

          </form>
        </div>
        <footer className="w-full h-16 max-sm:h-16 2xl:h-16 bg-black flex justify-center p-0 items-center shadow-[0px_-2px_7px_7px_rgba(132,204,22,1)] gap-5 max-xl:text-xl xl:h-16 lg:h-10 lg:text-xl md:h-10 max-sm:h-10 max-sm:gap-2">
          <p className="text-lime-300 2xl:text-3xl xl:text-3xl"><FaHtml5/></p>
          <p className="text-lime-300 2xl:text-3xl xl:text-3xl"><FaCss3Alt/></p>
          <p className="text-lime-300 2xl:text-3xl xl:text-3xl"><IoLogoJavascript/></p>
          <p className="text-lime-300 2xl:text-3xl xl:text-3xl"><SiMongodb/></p>
          <p className="text-lime-300 2xl:text-3xl xl:text-3xl"><SiExpress/></p>
          <p className="text-lime-300 2xl:text-3xl xl:text-3xl"><FaReact/></p>
          <p className="text-lime-300 2xl:text-6xl xl:text-6xl"><DiNodejs/></p>
          <p className="text-lime-300 2xl:text-3xl xl:text-3xl"><SiTailwindcss/></p>
          <p className="text-lime-300 2xl:text-3xl xl:text-3xl"><FaBootstrap/></p>
      </footer> 
      </section>

  

  )
}

export default Contact
