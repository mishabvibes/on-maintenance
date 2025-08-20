'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, Globe, Linkedin } from 'lucide-react'

export default function MaintenancePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Top Logo */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-md font-bold"><img src="/logo.png" className='rounded-full' alt="" /></span>
          </div>
          <span className="text-gray-800 font-medium">Noorul Ulama</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Cooking Icon */}
        {/* Cooking Icon */}
        <div className="flex justify-center mb-8">
          <div className="text-6xl animate-thumbs">👍</div>
        </div>


        {/* Status Text */}
        <div className="space-y-2">
          <p className="text-gray-600 text-sm font-medium tracking-wide uppercase">
            WE’RE BUSY IMPROVING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
            Updating Our Website.
          </h1>
        </div>

        {/* Description */}
        <div className="space-y-2 text-gray-600">
          <p>We’ll be back shortly with new features & a smoother experience.</p>
          <p className="font-medium">Hang tight!</p>
        </div>

        {/* Notify Button */}
        <div className="pt-4">
          <a href="mailto:nusafaizabad@gmail.com" className="w-2/3 md:w-2/5 bg-gray-800 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-3 mx-auto hover:bg-gray-700 transition-colors duration-300">
            <Mail className="w-5 h-5" />
            Notify Me
            <span className="ml-2">›</span>
          </a>
        </div>
      </div>

      {/* Floating Elements */}
      {/* Green Phone Icon - Left */}
      <div className="absolute left-16 top-1/2 transform -translate-y-1/2">
        <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
          <Phone className="w-8 h-8 text-green-700" />
        </div>
      </div>

      {/* Orange/Yellow Dots - Right */}
      <div className="absolute right-16 top-1/2 transform -translate-y-8">
        <div className="flex flex-col gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-400 rounded-full ml-2"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full ml-4"></div>
        </div>
      </div>

      {/* Yellow Triangle - Bottom Right */}
      <div className="absolute bottom-16 right-16">
        <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-yellow-400 rotate-12"></div>
      </div>

      {/* Social Icons - Bottom Center */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-6">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Contact Info - Hidden but accessible */}
      <div className="hidden">
        <a href="tel:+916235687911">+91 6235 687 911</a>
      </div>
      <style>
        {`@keyframes thumbs-bounce {
  0%, 100% {
    transform: translateY(0) rotate(10deg);
  }
  50% {
    transform: translateY(-10px) rotate(0deg);
  }
}

.animate-thumbs {
  animation: thumbs-bounce 1.5s infinite ease-in-out;
}
`}
      </style>
    </div>
  )
}