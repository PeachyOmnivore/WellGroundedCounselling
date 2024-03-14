import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { get } from './client-functions/index.js'
import Home from './pages/home'
import About from './pages/about'
import MyApproach from './pages/myApproach'
import ServicesAndFees from './pages/servicesAndFees'
import Contact from './pages/contact'
import PrivacyPolicy from './pages/privacyPolicy'
import NavigationBar from './components/navigationBar'
import Booking from './pages/booking'
import Login from './pages/login'
import Register from './pages/register'


function App() {

  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    async function findUser() {
      try {
        const foundUser = await get("users/me");
        setCurrentUser(foundUser);
        if (!foundUser) {
          navigate('/')
        }
      } catch (err) {
        console.error('Error fetching user info:', err);
      }
    }
    findUser()
  }, [navigate])

  console.log(currentUser)

  return (
    <>
      <NavigationBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="my-approach" element={<MyApproach />} />
        <Route path="services-and-fees" element={<ServicesAndFees />} />
        <Route path="booking" element={<Booking currentUser={currentUser}/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
