import PropTypes from 'prop-types'

const Button = (props) => {


  return (
    <button className={`h-${props.height} w-${props.width} rounded bg-gray-900 hover:bg-lime-300 hover:text-black font-bold transition ease-in duration-300 ${props.isOpen && 'bg-lime-300 text-black' }`} onClick={props.onclick}>{props.label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onclick: PropTypes.func,
  isOpen: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string
}

export default Button
