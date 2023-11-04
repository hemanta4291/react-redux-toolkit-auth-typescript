
import React from 'react';
import logo from '../assets/images/logo.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { icons } from './Icons';

const Sidebar: React.FC = () => {

  const location = useLocation();

  const activeStyle = 'bg-gray-400';
  const commonStyle = 'flex items-center gap-4 font-medium text-sm text-gray-500 py-5 px-4 rounded-xl hover:bg-gray-400';

  return (
    <div className='sidebar fixed top-0 left-0 w-[249px] h-full border-r-[1px] p-4 border-gray-200 bg-white z-[2]'>
      <div className='pt-7 pb-10'>
        <img src={logo} alt='logo'/>
      </div>
      <ul>
      <li>
        <NavLink
          to="/dashboard"
          className={location.pathname === '/dashboard' ? `${commonStyle} ${activeStyle}` : commonStyle}
        >
          {icons.dashboardIcon}<span>Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/users"
          className={location.pathname === '/dashboard/users' ? `${commonStyle} ${activeStyle}` : commonStyle}
        >
          {icons.userIcon}<span>Users</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/sales"
          className={location.pathname === '/dashboard/sales' ? `${commonStyle} ${activeStyle}` : commonStyle}
        >
          {icons.invoiceIcon}<span>Sales</span>
        </NavLink>
      </li>
    </ul>
    </div>
  );
};

export default Sidebar;
