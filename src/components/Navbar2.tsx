
import React from 'react';
import user from '../assets/images/user.png'
import { icons } from './Icons';
import { userLoggedOut } from '../features/auth/authSlice';
import { useAppDispatch } from '../hooks/reduxHooks';

const Navbar2: React.FC = () => {
  const dispatch = useAppDispatch()

 const handleLogout = ()=>{
  dispatch(userLoggedOut())
  // console.log("logout")
 }
  return (
    <div className='navbar fixed top-0 left-0 w-full pl-[252px]'>
      <div className='flex justify-between py-8 px-9 '>
          <div className='flex-1 relative  w-full max-w-[539px]'>
             <input className='bg-gray-400 py-[15px] px-6 rounded-[14px] w-full max-w-[539px] focus:outline-none ' placeholder='search' alt='search' />
             <button className='absolute right-6 top-5'>{icons.searchIcon}</button>
          </div>
          
          <div className='flex items-center gap-11 flex-1 justify-end'>
            <span className='cursor-pointer'>{icons.notifyIcon}</span>
            <img className='rounded-full' src={user} alt='user' />
            <button onClick={handleLogout}>Logout</button>
          </div>
      </div>
      
    </div>
  );
};

export default Navbar2;
