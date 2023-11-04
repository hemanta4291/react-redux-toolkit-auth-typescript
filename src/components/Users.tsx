// src/components/Dashboard.tsx
import React, { useState } from 'react';
import userPic from '../assets/images/user.png'
import { icons } from './Icons';
import { useUsersQuery } from '../features/users/userApi';

interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type NumberType = number

const Users: React.FC = () => {
  const [page, setPage] = useState<NumberType>(1)
  const { data, isLoading, error, isFetching } = useUsersQuery(page);



  console.log(data)
  return (
    <div>
      <h2 className='font-semibold text-2xl text-gray-900 pb-10'>Users</h2>
      <div className='h-[calc(100vh-345px)] overflow-y-auto'>
        <table className='w-full text-left'>
          <thead>
            <tr className='h-[44px] bg-gray-100 text-xs text-gray-700 font-semibold rounded-xl '>
              {/* <th colSpan={2}>The table header</th> */}
              <th className='pb-1 px-12 rounded-tl-xl rounded-bl-xl'>#ID</th>
              <th className='pb-1 px-12'>USER</th>
              <th className='pb-1 px-12'>EMAIL</th>
              <th className='pb-1 px-12 text-right rounded-tr-xl rounded-br-xl'>OPTIONS</th>
            </tr>
          </thead>
          <tbody className='text-gray-700 font-semibold text-sm'>
            {data?.data?.map((user: User) => (
              <tr>
                <td className='py-[10px] px-12'>{user.id}</td>
                <td className='py-[10px] px-12'>
                  <div className='flex items-center gap-5'>
                    <img className='w-[60px] h-[60px] rounded-2xl' src={user.avatar} alt='user' />
                    <h4>{user.first_name}</h4>
                  </div>
                </td>
                <td className='py-[10px] px-12'>{user.email}</td>
                <td className='py-[10px] px-12 text-right'>
                  <button>{icons.moreIcon}</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className='pt-12'>
        <ul className='flex items-center gap-[5px]'>
          <li className='border w-8 h-8 rounded-lg border-border-gray flex justify-center items-center font-bold text-sm cursor-pointer'>

            <button
            className='flex justify-center items-center w-full h-full'
              onClick={() => setPage(1)}
              disabled={page === 1}
            >
              {icons.leftDoubleAngleIcon}
            </button>
          </li>
          <li className='border w-8 h-8 rounded-lg border-border-gray flex justify-center items-center font-bold text-sm cursor-pointer'>

            <button
            className='flex justify-center items-center w-full h-full'
              onClick={() => setPage((prevPage) => prevPage - 1)}
              disabled={page === 1}
            >
              {icons.leftAngleIcon}
            </button>
          </li>
          {Array.from({ length: data?.total_pages }, (_, index) => (
            <li className={`${page === index + 1 ? 'bg-primary-900 text-white' : '' } border w-8 h-8 rounded-lg border-border-gray flex justify-center items-center font-bold text-sm cursor-pointer hover:bg-primary-900 hover:text-white`}>
              <button
                key={index + 1}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}

              </button>

            </li>

          ))}
        <li className='border w-8 h-8 rounded-lg border-border-gray flex justify-center items-center font-bold text-sm cursor-pointer'>
          <button
            className='flex justify-center items-center w-full h-full'
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={data?.page === data?.total_pages}
          >
            {icons.rightAngleIcon}
          </button>
        </li>
        <li className='border w-8 h-8 rounded-lg border-border-gray flex justify-center items-center font-bold text-sm cursor-pointer'>

          <button
          className='flex justify-center items-center w-full h-full'
            onClick={() => setPage(data?.total_pages)}
            disabled={page === data?.total_pages}
          >
            {icons.rightDoubleAngleIcon}
          </button>
        </li>
      </ul>
    </div>
    </div >
  );
};

export default Users;
