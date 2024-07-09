import "./hamburger.css"

// eslint-disable-next-line react/prop-types
function Hamburger({ isOpen }) {
  return (
  <>
  <div className="hamburger">
    <div className={`burger burger1 ${isOpen ? 'burger1Open' : ''}`}></div>
    <div className={`burger burger2 ${isOpen ? 'burger2Open' : ''}`}></div>
    <div className={`burger burger3 ${isOpen ? 'burger3Open' : ''}`}></div>
  </div>
  </>
  )
}

export default Hamburger