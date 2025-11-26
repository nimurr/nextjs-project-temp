'use client';
import { useGetDemoDataQuery } from '@/redux/fetures/Demo/demoDataGet';
import React from 'react';

const Page = () => {

    const { data } = useGetDemoDataQuery();
    console.log(data)

    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-semibold text-center my-5'>Demo Api Data Get For Check Rediux </h2>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    data?.map((item) => (
                        <div className='bg-purple-500 hover:bg-purple-600 rounded-lg p-5 text-white' key={item.id}>
                            <h1 className='font-semibold mb-2 capitalize'>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Page;
