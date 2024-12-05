import React from 'react';
import Header from '../components/Layout/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/Footer';

const DashboardLayout = () => {
    return (
        <div className='w-screen'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;