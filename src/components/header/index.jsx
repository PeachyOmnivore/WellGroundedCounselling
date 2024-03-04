/* eslint-disable react/no-unescaped-entities */
import "./header.css"
import WellGroundedIconWithBackground from "../../components/wellgroundedIconWithBackground/index.jsx"
import sunsetForest from '../../assets/images/sunsetForest.jpg'
import { useNavigate } from "react-router-dom"

function Header() {

  const navigate = useNavigate()
  return (
    <>
      <div className="header">
        <WellGroundedIconWithBackground size="400px" />
      </div>

      <div className="home-grid">
        <div>
          <img className="home-img" src={sunsetForest} alt="A sunset in a forest of trees" />
        </div>

        <section>
          <h4>Healing and growth for a more grounded life</h4>
          <p>
            Welcome! Well Grounded Counselling provides a nurturing space to help you navigate life's challenges. I will work with you to find a compassionate perspective and support your growth as you learn to take ownership of your emotional landscape.
          </p>
          <br />
          <p>
            Life inevitably brings difficulties but my aim is to support people in living with a grounded balance. This means having a regulated nervous system so you can move away from "survival mode", where you impulsively react to life, sometimes in painful ways. Grounding enables you to take ownership of your internal world, empowering you to respond in more helpful ways. It facilitates a connection with your authentic self and promotes meaningful connections with others. While a permanent state of groundedness is unrealistic, counselling can help you by actively addressing barriers and allow you to return to a grounded state with greater ease.
          </p>
          <button onClick={() => navigate('/contact')}>Get In Touch</button>
        </section>
      </div>
    </>
  )
}

export default Header