import PropTypes from 'prop-types'

const ProjectModal = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div className="bg-white/10 hover:scale-[1.02] relative hover:shadow-md hover:shadow-lime-500 p-5 rounded w-80 h-96 flex flex-col gap-3 text-white hover:text-lime-300 duration-500 transition ease-in-out">
        <div className="flex justify-between">
          <h1 className="text-2xl">{props.title}</h1>
          <i className="bi bi-box-arrow-right"></i>
        </div>
        <p className='text-xs font-normal'>({props.tech})</p>
        <p className="text-xs text-justify h-32">{props.description}</p>
        <img src={props.image} alt="" className="w-full h-full" />
        {
          props.danger &&
          <i className="bi bi-exclamation-circle-fill absolute bottom-10 right-10 text-3xl text-white peer"></i>
        }
        <div className="absolute text-black hidden peer-hover:flex w-full px-10 bottom-20  left-0">
          <p className="w-full bg-white rounded text-sm font-semibold p-1 border-black border-2 shadow-md">This project is not responsive for mobile and tablet.</p>
        </div>
      </div>
    </a>
  )
}

ProjectModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  danger: PropTypes.bool,
  image: PropTypes.string,
  tech: PropTypes.string
}


export default ProjectModal
