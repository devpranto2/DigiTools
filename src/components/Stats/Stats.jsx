import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-purple-800 to-purple-600 mt-20'>
            <div className='flex p-10 md:w-9/12 mx-auto justify-between  '>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-4xl text-white font-bold'>50K+</h1>
                    <p className='text-white'>Active Users</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-4xl text-white font-bold'>200+</h1>
                    <p className='text-white'>Premim Tools</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-4xl text-white font-bold'>4.9</h1>
                    <p className='text-white'>Rating Users</p>
                </div>
                
            </div>
        </div>
    );
};

export default Stats;