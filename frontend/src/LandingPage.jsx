import React from 'react'
import { SignInButton, SignUpButton, SignedOut } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <nav className="w-full absolute top-0 left-0 p-6">
        <h1 className="text-4xl font-extrabold text-white">Wellnest</h1>
      </nav>
      <main className="text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Welcome to Wellnest:
            <span className="block text-yellow-300">Your Path to</span>
            Better Health
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Achieve your wellness goals with Wellnest's BMI calculator, personalized workouts, exercise info, and communication tools
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-full sm:w-auto px-8 py-3 text-lg font-medium text-blue-600 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Login
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="w-full sm:w-auto px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </main>
    </div>
  )
}