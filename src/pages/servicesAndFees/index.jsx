import "./servicesAndFees.css"
import Button from "../../components/button"
import { useNavigate } from "react-router-dom"

function ServicesAndFees() {
  const navigate = useNavigate()
  return (
    <div className="services-and-fee-container">
      <div>
        <h1>Services and fees</h1>
        <p>The fee for all counselling sessions is <strong>£55</strong></p>
      </div>
      <div className="types-of-counselling">
        <section>
          <h2><em>In Person Counselling Session</em></h2>
          <p>In person counselling sessions take place in Aviemore. </p>
        </section>
        <section>
          <h2><em>Counselling Session Online</em></h2>
          <p>This can be a convenient way of fitting counselling in to a busy schedule. I can meet with clients from anywhere in the UK using a secure video call platform.</p>
        </section>
        <section>
          <h2><em>Counselling Session outdoors</em></h2>
          <p>A counselling session while we take a walk somewhere in the Strathspey area.  This will only be offered to some clients after we have had at least one session and assessed suitability.</p>
        </section>
      </div>
      <section>
        <p>I offer a free 15 minute discovery call before booking your first session.</p>
      </section>
      <Button text={"Get in touch"} onClick={() => navigate("/contact")} />
    </div>
  )
}

export default ServicesAndFees