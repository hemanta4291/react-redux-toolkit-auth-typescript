// src/components/SignIn.tsx
import React, { useEffect, useState } from 'react';
import * as yup from 'yup'
import {useFormik} from "formik"
import { icons } from './Icons';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../features/auth/authApi';
import Error from './Error';
import loading from '../assets/images/loading.gif'

const signUpSchema = yup.object({
  name:yup.string().required("Name is Required"),
  email:yup.string().email("Email should be valid").required("Email is Required"),
  password:yup.string().min(6).max(31).required("Password is Required"),
  termsAndConditions: yup.bool().oneOf([true], 'You need to accept the terms and conditions')
})

type Password = string

const SignUp: React.FC = () => {

  const [register, { data, isLoading, error }] =
    useRegisterMutation();
  const navigate = useNavigate();
  const [passType, setPassType] = useState<Password>('password');

  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      termsAndConditions:false
    },
    validationSchema:signUpSchema,
    onSubmit:(values)=>{
      const {email, password ,termsAndConditions,name} = values
      console.log(termsAndConditions,name)
      register({ email, password })
    }
  })


  useEffect(() => {
    if (data?.token) {
      navigate("/dashboard");
    }
  }, [data, error, navigate]);

  const handlePassType = () => {
    if (passType === 'password') {
      setPassType('text')
    } else {
      setPassType('password')
    }
  }

  let content = undefined
  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      content = 'error' in error ? error.error : JSON.stringify(error.data)
      content = JSON.parse(content).error
    } 
  }
  
  return (
    <div className='sign-up'>
      <div className='container mx-auto flex justify-center'>
        <div>
          <h2 className='text-[26px] font-bold text-gray-900 text-center pb-4'>Getting Started</h2>
          <h4 className='text-[18px] font-medium text-gray-600 text-center'>Create an account to continue!</h4>
          <div className='flex justify-center items-center gap-[30px] pt-[30px]'>
            <button className='bg-gray-400 text-gray-600 text-base rounded-2xl py-4 px-8 flex items-center justify-center gap-3'>
              {icons.googleIcon}
              <span>Sign Up with Google</span>
            </button>
            <button className='bg-gray-400 text-gray-600 text-base rounded-2xl py-4 px-8 flex items-center justify-center gap-3'>
              {icons.appleIcon}
              <span>Sign Up with Apple ID</span>
            </button>
          </div>
          <div className='flex items-center gap-7 py-7'>
            <span className='flex-inline h-[2px] w-[230px] bg-gray-400 rounded'></span>
            <span className='flex-inline text-[20px] font-medium text-gray-500'>OR</span>
            <span className='flex-inline h-[2px] w-[230px] bg-gray-400 rounded'></span>
          </div>

          {
            content && <Error msg={content} />
          }

          <form onSubmit={formik.handleSubmit}>
            <div className={`relative  ${formik.touched.email && formik.errors.email ? 'pb-[16px]':'pb-[30px]'}`}>
              <span className='absolute left-4 top-6'>{icons.emailIcon}</span>
              <input type='email' 
                className={`${formik.touched.email && formik.errors.email ? 'border-error-900' : 'border-gray-200'} w-full border  text-gray-500 text-base rounded-2xl py-5 pr-4 pl-[46px] focus:outline-none`}
                placeholder='Your Email'
                value={formik.values.email} 
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              <div className='text-error-900 font-medium text-sm pt-4'>
             {formik.touched.email && formik.errors.email}
            </div>
            </div>
            <div className={`relative  ${formik.touched.email && formik.errors.email ? 'pb-[16px]':'pb-[30px]'}`}>
              <span className='absolute left-4 top-6'>{icons.peopleIcon}</span>
              <input type='text' 
                className={`${formik.touched.name && formik.errors.name ? 'border-error-900' : 'border-gray-200'} w-full border  text-gray-500 text-base rounded-2xl py-5 pr-4 pl-[46px] focus:outline-none`}
                placeholder='Your Name'
                value={formik.values.name} 
                onChange={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
               />
               <div className='text-error-900 font-medium text-sm pt-4'>
             {formik.touched.name && formik.errors.name}
            </div>
            </div>
            <div className={`relative pb-[25px]`}>
              <span className='absolute left-4 top-6'>{icons.passwordIcon}</span>
              <input type={passType}
                className={`${formik.touched.name && formik.errors.name ? 'border-error-900' : 'border-gray-200'} w-full border  text-gray-500 text-base rounded-2xl py-5 pr-4 pl-[46px] focus:outline-none`}
                placeholder='Create Password'
                value={formik.values.password} 
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
              />
              {/* <div className='text-error-900 font-medium text-sm pt-4'>
             {formik.touched.password && formik.errors.password}
            </div> */}
              <button onClick={handlePassType} className='absolute right-4 top-6'>{icons.eyeIcon}</button>
            </div>
            {
              formik.touched.password && formik.errors.password ? 
              <div className='flex justify-center items-center px-4 gap-5'>
                <span className='h-1 flex-1 rounded-sm bg-green-900'></span>
                <span className='h-1 flex-1 rounded-sm bg-green-900'></span>
                <span className='h-1 flex-1 rounded-sm bg-green-900'></span>
                <span className='h-1 flex-1 rounded-sm bg-gray-200'></span>
                <span className='h-1 flex-1 rounded-sm bg-gray-200'></span>
                <span className='h-1 flex-1 rounded-sm bg-gray-200'></span>
              </div>
              : <div className='flex justify-center items-center px-4 gap-5'>
                  <span className='h-1 flex-1 rounded-sm bg-green-900'></span>
                  <span className='h-1 flex-1 rounded-sm bg-green-900'></span>
                  <span className='h-1 flex-1 rounded-sm bg-green-900'></span>
                  <span className='h-1 flex-1 rounded-sm bg-green-900'></span>
                  <span className='h-1 flex-1 rounded-sm bg-green-900'></span>
                  <span className='h-1 flex-1 rounded-sm bg-green-900'></span>
              </div>
            }
           

            <div className='pb-[35px] pt-[30px]'>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={formik.values.termsAndConditions}
                  onChange={formik.handleChange("termsAndConditions")}
                  onBlur={formik.handleBlur("termsAndConditions")}
                />
                <div className="w-7 h-7 border border-gray-400 bg-checkbox-bg rounded-md flex items-center justify-center">
                  {formik.values.termsAndConditions ?  icons.checkIcon : icons.unCheckIcon}
                </div>
                <span className="ml-4 text-gray-500 text-base font-medium">I agree to the Terms & Conditions</span>
              </label>
              <div className='text-error-900 font-medium text-sm pt-4'>
             {formik.touched.termsAndConditions && formik.errors.termsAndConditions}
            </div>
            </div>

            <button disabled={isLoading} type='submit' className='w-full flex justify-center items-center gap-4 rounded-2xl py-5 bg-primary-900 text-base text-white font-medium'>
              {
                isLoading && <span><img className='w-6' src={loading} /></span>
              }
               Sign Up
              </button>
            <p className='py-9 text-base font-medium text-gray-500 text-center'>Already have an account? <Link className='text-primary-900' to={'/'}>Sign In</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
