import React from 'react';
import { Link } from 'react-router-dom';


const NotFound: React.FC= () => {
  return (
    <div className='container mx-auto'>
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium mr-3">NOT FOUND ???</span>
    </div>
    <Link to='/'>Back to home</Link>
    </div>
  );
}

export default NotFound;
