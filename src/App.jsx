import './App.css'
import { Route, Routes } from 'react-router-dom'
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

  const [currentUser, setCurrentUser] = useState('')

  async function findUser() {
    try {
      const foundUser = await get("users/me");
      setCurrentUser(foundUser);
      if (!foundUser) {
        console.log("No logged in user")
      }
    } catch (err) {
      console.error('Error fetching user info:', err);
    }
  }

  useEffect(() => {
    findUser()
  }, [])

  console.log(currentUser)

  return (
    <>
      <NavigationBar currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="my-approach" element={<MyApproach />} />
        <Route path="services-and-fees" element={<ServicesAndFees />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
