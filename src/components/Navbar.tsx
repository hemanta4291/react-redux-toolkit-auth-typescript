
import React from 'react';
import logo from '../assets/images/logo.png'

const Navbar: React.FC = () => {
 
  return (
    <div className='navbar'>
      <div className='container mx-auto flex justify-between py-8'>
          <img src={logo} alt='logo'/>
          <select className='bg-gray-400 rounded-lg px-4 text-gray-500 text-[12px] border-r-[16px] border-transparent focus:outline-none'>
            <option>English(UK)</option>
            <option>Bangladesh(BD)</option>
            <option>India(IN)</option>
            <option>Pakistan(PK)</option>
          </select>
          {/* <select class="h-10 w-full rounded border-r-8 border-transparent px-4 text-sm outline outline-neutral-700">
    <option value="none">Non précisé</option>
    {list?.map((item) => (
    <option key="{item}" value="{item}">{item}</option>
    ))}
  </select> */}
      </div>
      
    </div>
  );
};

export default Navbar;
