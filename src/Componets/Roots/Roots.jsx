import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';


const Roots = () => {
  const LOder = useLoaderData()
    return (
        <div className='max-w-6xl mx-auto'>
          <Navbar></Navbar>        
          <Outlet></Outlet>    
          <Footer></Footer>
        </div>
    );
};

export default Roots;