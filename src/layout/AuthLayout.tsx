import React from 'react'
import { Outlet, useMatch } from 'react-router-dom'
import Navbar from '../components/Navbar'

const AuthLayout: React.FC = () => {
  const match = useMatch('*')

  console.log('match')
  console.log(match)
  return (
    <div>
        <>
        <Navbar/>
        <Outlet/>
        </>
    </div>
  )
}

export default AuthLayout