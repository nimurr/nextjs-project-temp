'use client';
import { useGetDemoDataQuery } from '@/redux/fetures/Demo/demoDataGet';
import React from 'react';

const Page = () => {

    const { data, isLoading } = useGetDemoDataQuery();
    console.log(data)

    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-semibold bg-primary text-center my-10 rounded-md py-2'>Demo Api Data Get For Check Rediux </h2>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    data?.map((item) => (
                        <div className='bg-purple-500 hover:bg-purple-600 rounded-lg p-5 text-white' key={item.id}>
                            <h1 className='font-semibold mb-2 capitalize'>{item.title}</h1>
                            <p className='text-gray-300 capitalize'>{item.body}</p>
                        </div>
                    ))
                }
                {
                    isLoading &&
                    [...Array(12)].map((item) => (
                        <div class="mx-auto w-full max-w-sm rounded-md border border-purple-500 p-4">
                            <div class="flex animate-pulse space-x-4">
                                <div class="size-10 rounded-full bg-gray-200"></div>
                                <div class="flex-1 space-y-6 py-1">
                                    <div class="h-2 rounded bg-gray-200"></div>
                                    <div class="h-2 rounded bg-gray-200"></div>
                                    <div class="h-2 rounded bg-gray-200"></div>
                                    <div class="space-y-3">
                                        <div class="grid grid-cols-3 gap-4">
                                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                        </div>
                                        <div class="h-2 rounded bg-gray-200"></div>
                                        <div class="h-2 rounded bg-gray-200"></div>
                                        <div class="h-2 rounded bg-gray-200"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Page;
