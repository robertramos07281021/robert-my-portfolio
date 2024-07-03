import PropTypes from 'prop-types'

const SkillsModal = (props) => {
  return (
      <div className="w-full flex border-2 border-lime-400 rounded-r-lg text-center ">
          <p className="w-28 text-black h-20 flex items-center justify-center bg-lime-400 font-black text-xl max-sm:text-base md:text-base">{props.label}</p>
          <p className="w-full  bg-black/20 text-white indent-10 py-1 px-2 flex items-center text-justify ">{props.text}</p>
        </div>
 
  )
}


SkillsModal.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
}

export default SkillsModal
