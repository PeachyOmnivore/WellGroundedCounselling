import './footer.css'
import Button from '../button'
import { useNavigate } from 'react-router-dom'
import mncpsLogo from '../../assets/images/thumbnail_mncps.png'

function Footer() {
  const navigate = useNavigate()
  return (
    <div className="footer">
      <img src={mncpsLogo} alt="NCPS Accredited Registrant logo, professional standards authority accredited register logo " />
      <section>
        <p>Fiona Hutchison - Diploma in Integrative Counselling</p>
        <p>NCPS Accredited Registrant number - NCS23-05409</p>
      </section>
      <Button text={"Privacy Policy"} onClick={() => navigate('/privacy-policy')} />
    </div>
  )
}

export default Footer