import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
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
