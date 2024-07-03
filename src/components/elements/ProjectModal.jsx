import PropTypes from 'prop-types'
import { CgDanger } from "react-icons/cg";

const ProjectModal = (props) => {
  return (
    <div className=" w-60 h-80 max-sm:w-40 max-sm:h-60 hover:scale-110 transition ease-in duration-300">
      <div>
          <img src={props.image} alt="projectlistting" className="2xl:w-60 2xl:h-44 max-sm:w-40 rounded-t-md border border-slate-500"/>
      </div>
      <div>
      <div className="relative">
        <div className="border-b border-x border-slate-500 p-3 text-black 2xl:text-xl max-sm:text-sm bg-lime-400 font-black flex items-center justify-between ">
          <p>{props.title}</p>
          {props.danger && <span className="text-red-500 peer"><CgDanger/></span>}
          {props.danger && <p className="peer-hover:block hidden absolute text-red-500 border-4 border-red-500 2xl:w-[350px] text-center rounded p-2 2xl:-right-[55px] 2xl:-bottom-[160px] max-sm:right-[30px] bg-white border xl:-bottom-[160px] xl:-right-[55px] xl:w-[350px] lg:w-[350px] lg:-bottom-[160px] lg:-right-[55px] text-xs md:w-[350px] md:-bottom-[160px] md:-right-[55px] ">This is not responsive site, for laptop and desktop only.</p>}
        </div>
        </div>
        <p className="border-b border-x border-slate-500 p-3 text-black 2xl:text-sm max-sm:text-xs bg-lime-400 font-black">{props.description}</p>
      </div>
      <a href={props.link} target="_blank">
        <div className="border-b border-x border-slate-500 px-2 py-3 text-black bg-lime-400 font-black rounded-b-md text-xs">
          Link
        </div>
      </a>
    </div>
  )
}

ProjectModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkTitle: PropTypes.string,
  danger: PropTypes.bool,
  image: PropTypes.string
}


export default ProjectModal
