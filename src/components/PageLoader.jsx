import React from 'react'
import { useSelector } from 'react-redux'
import quantum from "../assets/svg/quantum.svg";

export default function PageLoader() {
    const isDarkMode = useSelector(state => state.darkMode);
  return (
    <div className={`${isDarkMode ? "bg-custom-dark" : "bg-custom-light-high"} z-50 absolute h-screen w-full flex justify-center items-center`}>
      <img className='h-36 w-36 animate-spin-slow' src={quantum} alt="Loading..." />
    </div>
  )
}
