import PropTypes from 'prop-types'

const MobileButton = (props) => {
  return (
    <button className={`${props.toggle ?  "bg-black text-lime-300": "bg-lime-300 text-black" }  border-2 p-2 border-lime-300 text-2xl  rounded-full `} onClick={props.onclick}>{props.content}</button>
  )
}

MobileButton.propTypes = {
  content: PropTypes.element,
  onclick: PropTypes.func,
  toggle: PropTypes.bool
}
export default MobileButton
