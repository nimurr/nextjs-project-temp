import React from 'react';

const Loading = ({ item, line }) => {
    return (
        [...Array(item)].map((item) => (
            <div class="mx-auto w-full max-w-sm rounded-md border border-gray-300 p-4">
                <div class="animate-pulse">
                    <div class="flex-1 space-y-6 py-1">
                        {
                            [...Array(line)].map((item) => (
                                <div class="h-2 rounded bg-gray-200"></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        ))
    );
}

export default Loading;
