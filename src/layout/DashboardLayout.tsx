import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout: React.FC = () => {
  return (
    <>
      <Navbar2/>
      <div className='inner-main-container pl-[290px] pt-[166px] w-[calc(100%-36px)]'>
      <Outlet/>
      </div>
      <Sidebar/>
    </>
  )
}

export default DashboardLayout