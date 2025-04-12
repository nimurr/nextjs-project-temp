'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    // State to toggle password visibility for each field
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Function to toggle password visibility
    const togglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    // Function to toggle confirm password visibility
    const toggleConfirmPassword = () => {
        setShowConfirmPassword(prevState => !prevState);
    };

    return (
        <div className='h-screen bg-gradient-to-b from-[#f9f5ff] to-[#b6a7ca]'>
            <Link href="/">
                <img className='md:pl-10 pt-10  md:w-60 w-48 mx-auto md:ml-0' src="/Images/Auth/logo2.png" alt="" />
            </Link>
            <div className='flex justify-center mt-20'>
                <div className='min-w-80'>
                    <h2 className='text-3xl font-medium text-center'>Update Password</h2>
                    <p className='text-center mt-5 text-gray-600'>Please Enter your New Password and Confirm Password</p>

                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Enter your password'
                                className='mt-2 w-full p-2 border border-green-400 rounded-md focus:outline-0 ring-0 bg-white'
                                type={showPassword ? "text" : "password"} // Toggle password visibility
                                name="password"
                                id="password"
                            />
                            {/* Show/Hide Password Icon */}
                            <button
                                type="button"
                                onClick={togglePassword}
                                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="confirm-password">Confirm Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Confirm your password'
                                className='mt-2 w-full p-2 border border-green-400 rounded-md focus:outline-0 ring-0 bg-white'
                                type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                                name="confirm-password"
                                id="confirm-password"
                            />
                            {/* Show/Hide Password Icon */}
                            <button
                                type="button"
                                onClick={toggleConfirmPassword}
                                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showConfirmPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <Link href={'/login'} className='mt-5 block'>
                        <button className='cursor-pointer w-full p-2 bg-green-400 font-semibold text-white rounded-md'>
                            Update
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
