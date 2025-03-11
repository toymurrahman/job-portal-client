import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const MainLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayouts;