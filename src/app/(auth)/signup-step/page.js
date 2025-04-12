'use client'
import React, { useState } from "react";
import { MdWork, MdHomeWork } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Page = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useRouter();

    const handleGoNext = () => {
        if (selectedRole) {
            navigate.push(`/signup?role=${selectedRole}`);
        }
    };

    return (
        <div className="h-screen  bg-gradient-to-b from-[#f9f5ff] to-[#b6a7ca]">
            {/* Logo Section */}
            <Link href="/">
                <img className='md:pl-10 pt-10  md:w-60 w-48 mx-auto md:ml-0' src="/Images/Auth/logo2.png" alt="" />
            </Link>

            {/* Sign Up Section */}
            <div className="mt-10 text-center">
                <h2 className="text-3xl font-semibold text-gray-900">Sign Up</h2>
                <p className="text-gray-500 my-2">Select Your Role to Signup</p>
            </div>

            {/* Role Selection Cards */}
            <div className="flex justify-center mt-10">
                <div className="mt-6 space-y-4 w-96 ">
                    {/* Job Seeker Card */}
                    <div
                        className={`relative flex items-center p-5 bg-[#553283] text-white rounded-xl cursor-pointer transition-all duration-300 ${selectedRole === "jobSeeker" ? "ring-4 ring-purple-400" : ""
                            }`}
                        onClick={() => setSelectedRole("jobSeeker")}
                    >
                        <div className="min-w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <MdWork className="text-green-500 text-xl" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">Job Seeker</h3>
                            <p className="text-sm text-gray-200">Explore companies and apply to job opportunities</p>
                        </div>
                        <input
                            type="checkbox"
                            className="absolute right-5 w-5 h-5"
                            checked={selectedRole === "jobSeeker"}
                            readOnly
                        />
                    </div>
                    {/* Company Card */}
                    <div
                        className={`relative flex items-center p-5 bg-[#553283] text-white rounded-xl cursor-pointer transition-all duration-300 ${selectedRole === "company" ? "ring-4 ring-purple-400" : ""
                            }`}
                        onClick={() => setSelectedRole("company")}
                    >
                        <div className="min-w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <MdHomeWork className="text-green-500 text-2xl" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">Company</h3>
                            <p className="text-sm text-gray-200">Enhance your employer branding and discover top talent</p>
                        </div>
                        <input
                            type="checkbox"
                            className="absolute right-5 w-5 h-5"
                            checked={selectedRole === "company"}
                            readOnly
                        />
                    </div>
                    <div>
                        <button onClick={handleGoNext} className="w-full p-2 bg-[#553283] mt-10 font-semibold text-white rounded-md flex items-center justify-center cursor-pointer">Go Next <GrLinkNext className="ml-2 text-xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
