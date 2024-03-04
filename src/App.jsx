import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import MyApproach from './pages/myApproach'
import ServicesAndFees from './pages/servicesAndFees'
import Contact from './pages/contact'
import PrivacyPolicy from './pages/privacyPolicy'


function App() {

  return (
    <>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="my-approach" element={<MyApproach />} />
            <Route path="services-and-fees" element={<ServicesAndFees />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  )
}

export default App
