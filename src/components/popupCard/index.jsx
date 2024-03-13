/* eslint-disable react/prop-types */
import './popUpCard.css'

function PopUpCard ({children}) {
  return (
    <ul className="popUpCard-container">
      {children}
    </ul>
  )
}

export default PopUpCard