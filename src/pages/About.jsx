import { useState } from "react"
import Skill from "../components/sections/Skill";
import Certificate from "../components/sections/Certificate";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Button from "../components/elements/Button";
import { SiAboutdotme   } from "react-icons/si"
import { GiSkills } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import MobileButton from '../components/elements/MobileButton';
import { MdCastForEducation } from "react-icons/md";
import { TbStarsFilled } from "react-icons/tb";



const About = () => {
  const [contentPicker, setContentPicker] = useState('skill');
  const [isSkill, setIsSkill] = useState(true)
  const [isCert, setIsCert] = useState(false)
  const [isEduc, setIsEduc] = useState(false)
  const [isExp, setIsExp] = useState(false)

  function skill(){
    setContentPicker('skill')
    setIsSkill(true)
    setIsCert(false)
    setIsEduc(false)
    setIsExp(false)
  }
  function certificate(){
    setContentPicker('cert')
    setIsSkill(false)
    setIsCert(true)
    setIsEduc(false)
    setIsExp(false)
  }
  function education(){
    setContentPicker('educ')
    setIsSkill(false)
    setIsCert(false)
    setIsEduc(true)
    setIsExp(false)
  }
  function experience(){
    setContentPicker('exp')
    setIsSkill(false)
    setIsCert(false)
    setIsEduc(false)
    setIsExp(true)
  }

  const [isToggleAbout, setIsToggleAbout] = useState(true)
  const [isToggleSkill, setIsToggleSkill] = useState(false)
  const [isToggleCert, setIsToggleCert] = useState(false)
  const [isToggleEduc, setIsToggleEduc] = useState(false)
  const [isToggleExp, setIsToggleExp] = useState(false)

  function selectAbout() {
    setIsToggleAbout(true)
    setIsToggleSkill(false)
    setIsToggleCert(false)
    setIsToggleEduc(false)
    setIsToggleExp(false)
  }
  function selectSkill() {
    setIsToggleAbout(false)
    setIsToggleSkill(true)
    setIsToggleCert(false)
    setIsToggleEduc(false)
    setIsToggleExp(false)
  }
  function selectCert() {
    setIsToggleAbout(false)
    setIsToggleSkill(false)
    setIsToggleCert(true)
    setIsToggleEduc(false)
    setIsToggleExp(false)
  }
  function selectEduc() {
    setIsToggleAbout(false)
    setIsToggleSkill(false)
    setIsToggleCert(false)
    setIsToggleEduc(true)
    setIsToggleExp(false)
  }
  function selectExp() {
    setIsToggleAbout(false)
    setIsToggleSkill(false)
    setIsToggleCert(false)
    setIsToggleEduc(false)
    setIsToggleExp(true)
  }


  
  return (
    <>  
      {window.innerWidth > 425 && 
      <section className="w-full h-screen flex items-center max-sm:flex-col pt-20 text-white 2xl:px-36 md:px-5 md:gap-5" id="about">
        <div className="flex flex-col items-center gap-5 2xl:w-2/3 xl:w-2/3 ">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">About <span className="text-lime-500">Me</span></h1>
            <p className="2xl:w-96 xl:w-96 text-justify indent-10 md:text-sm md:w-80">An inventive Web Developer in order to create a websites and is skilled in all advanced web development. Capable of using tech-stack including HTML/CSS, JavaScript, MongoDB, Express, Node js, React js. Functionally effective in self-manage during independent projects, as well as collaborating with other teams, and also can adopt other tech-stack.</p>
          </div>
          <div className="flex flex-col justify-end gap-4 2xl:w-96 xl:w-96 md:w-80">
            <Button label="Skills" onclick={skill} height={'10'} width={''} isOpen={isSkill}/>
            <Button label="Certificates" onclick={certificate} height={'10'} width={''} isOpen={isCert}/>
            <Button label="Education" onclick={education} height={'10'} width={''} isOpen={isEduc}/>
            <Button label="Experience" onclick={experience} height={'10'} width={''} isOpen={isExp}/>
          </div>
        </div>
        <div className="w-full h-full flex items-center xl:pe-16 2xl:pe-10 ">
          {contentPicker == 'skill' ?  <Skill/> : ""}
          {contentPicker == 'cert' ?  <Certificate/> : ""}
          {contentPicker == 'educ' ?  <Education /> : ""}
          {contentPicker == 'exp' ?  <Experience /> : ""}
        </div>
      </section>}
      {window.innerWidth <= 425 && 
      <section className="w-full h-screen flex items-center max-sm:flex-col pt-20 text-white px-0 relative " id="about">
        {isToggleAbout && <div className="flex flex-col gap-3 max-sm:p-10">
          <h1 className="text-4xl font-bold">About <span className="text-lime-500">Me</span></h1>
          <p className=" text-justify indent-10">An inventive Web Developer in order to create a websites and is skilled in all advanced web development. Capable of using tech-stack including HTML/CSS, JavaScript, MongoDB, Express, Node js, React js. Functionally effective in self-manage during independent projects, as well as collaborating with other teams, and also can adopt other tech-stack.</p>
        </div> }
        {isToggleSkill && <Skill/>}
        {isToggleCert && <Certificate/>}
        {isToggleEduc && <Education/>}
        {isToggleExp && <Experience/>}

        <div className="flex gap-6 absolute  bottom-10">
          <MobileButton content={<SiAboutdotme/>} onclick={selectAbout} toggle={isToggleAbout}/>
          <MobileButton content={<GiSkills/>} onclick={selectSkill} toggle={isToggleSkill} />
          <MobileButton content={<PiCertificate/>} onclick={selectCert} toggle={isToggleCert} />
          <MobileButton content={<MdCastForEducation/>} onclick={selectEduc} toggle={isToggleEduc} />
          <MobileButton content={<TbStarsFilled/>} onclick={selectExp} toggle={isToggleExp}/>
        </div>
      </section>

      }
    </>

  )
}

export default About
