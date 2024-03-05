/* eslint-disable react/prop-types */
import './button.css'

function Button ({text, onClick}) {
  return (
  <button className="button" onClick={onClick}>{text}</button>
  )
}

export default Button