
import React from 'react';
import useAuthCheck from '../hooks/useAuthCheck';
import useAuth from '../hooks/useAuth';

const Dashboard: React.FC = () => {

  useAuthCheck()
  const authr = useAuth()
  console.log(authr)
  
  return (
    <div>
       <h2 className='font-semibold text-2xl text-gray-900'>Dashboard</h2>
      {/* Your dashboard content */}
    </div>
  );
};

export default Dashboard;
