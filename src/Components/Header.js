import React, { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (

        <div className='md:flex justify-between items-center bg-orange-400'>

            <div className='flex justify-between p-5'>
                <h1 className='md:mr-10 font-bold text-white'>Home</h1>
                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
                  
                            <div>
                                <div className='bg-white w-5 h-1'></div>
                                <div className='bg-white w-5 h-1 mt-1'></div>
                                <div className='bg-white w-5 h-1 mt-1'></div>
                            </div>
                </div>
            </div>
            <ul className={`md:flex justify-end absolute p-5 md:static bg-orange-400 w-full duration-500 ease-in ${open ? 'top-10': 'top-[-120px]'}`}>
                <div className='bg-white w-full h-1 md:hidden'></div>
                <li className='md:mr-10 font-bold text-white'>About</li>
                <li className='md:mr-10 font-bold text-white'>Contract</li>
                <li className='md:mr-10 font-bold text-white'>Service</li>
                
            </ul>
        </div>
    );
};

export default Header;