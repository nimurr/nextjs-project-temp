'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

const Page = () => {

    const [otp, setOtp] = useState('');
    console.log(otp);

    return (
        <div className='h-screen bg-gradient-to-b  from-[#f9f5ff] to-[#b6a7ca] '>
            <Link href="/">
                <img className='md:pl-10 pt-10  md:w-60 w-48 mx-auto md:ml-0' src="/Images/Auth/logo2.png" alt="" />
            </Link>
            <div className='flex justify-center mt-20'>
                <div className='min-w-80'>
                    <h2 className='text-3xl font-medium text-center'>Verify OTP</h2>
                    <p className='text-center mt-5 text-gray-600'>Please Enter the OTP sented to your email . </p>
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="email">Enter OTP </label>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            containerStyle={{ justifyContent: 'space-between' }}
                            renderInput={(props) => (
                                <input
                                    {...props} // Spread props from OTPInput (like value, onChange, etc.)
                                    className="!border bg-gray-200 border-green-400 rounded-md px-2 py-1" // Custom styles for the input
                                    style={{ width: '50px', height: '50px', textAlign: 'center' }} // Optional: adjust input size if needed
                                />
                            )}
                        />


                    </div>
                    <Link href="/update-password" className='mt-5 block'>
                        <button className='cursor-pointer w-full p-2 bg-green-400 font-semibold text-white rounded-md'>Verify</button>
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default Page;
