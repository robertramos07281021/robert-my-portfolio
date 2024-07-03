import PropTypes from 'prop-types'

const CertModals = (props) => {
  return (
    <a href={props.href} target='_blank' className='relative'>
      <div className=" w-56 h-72 rounded-md p-2 flex flex-col bg-lime-500 hover:-skew-y-3 transition duration-300 ease-out peer max-sm:w-40 max-sm:h-60">
          <img src={props.src} alt="kodego cert" className="w-60 h-full rounded-md"/>
          <div className="h-full flex items-center justify-center">
            <div className="flex flex-col items-center text-black font-black">
                <h1 className='text-2xl max-sm:text-lg'>{props.title}</h1>
                <p className='text-center max-sm:text-base text-xl'>{props.desc}</p>
                <p className='text-center max-sm:text-base text-xl'>{props.year}</p>
            </div>
          </div>
        </div>
        <div className='bg-white absolute top-0 w-56 h-72 max-sm:h-60 max-sm:w-40 -z-10 rounded-md peer-hover:skew-y-3 transition duration-300 ease-out'>

        </div>
    </a>
  )
}
CertModals.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  year: PropTypes.string,
  src: PropTypes.string,
  href: PropTypes.string
}

export default CertModals
