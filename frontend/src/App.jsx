import React from 'react';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Homes from './pages/Homes';
import Navbar from './components/Exercise/Navbar';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'

import Footer from './components/Exercise/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

import BMICalculator from './components/BMI/BMICalculator';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import Contact from './Contact';
import { useUser } from '@clerk/clerk-react';



export default function App() {

  const { isSignedIn } = useUser();
       
  return (
    

 <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    {/* <Navbar /> */}
     <Routes>
      <Route path="/exercise" element={<Homes />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
     / <Route path="/" element={!isSignedIn ? <LandingPage /> : <HomePage/>} />
     {/* <Route path="/" element= {<LandingPage />}/>
      <Route path="/homepage" element={<HomePage />} /> */}
      <Route path="/bmi" element={<BMICalculator />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <ToastContainer theme="dark" position="top-center"/>
    </Box>
    
  )
}


