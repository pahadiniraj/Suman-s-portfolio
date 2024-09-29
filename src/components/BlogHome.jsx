import React from 'react'
import BlogNavbar from './BlogNavbar'
import { Outlet } from 'react-router-dom'

export default function BlogHome() {
  return (
    <div>
      <BlogNavbar/>
      <Outlet/>
    </div>
  )
}
