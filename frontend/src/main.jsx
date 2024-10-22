import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './LandingPage'
import Navbar from './components/Exercise/Navbar'

import HomePage from './HomePage'
import BMICalculator from './components/BMI/BMICalculator'
import Exercises from './components/Exercise/Exercises'
import Contact from './Contact.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')).render(

  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter >
        <App/>
      </BrowserRouter>
  </ClerkProvider>
)
