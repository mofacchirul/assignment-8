
import React, { useEffect, useState } from 'react';

import Phon from '../Phon/Phon';
import Navlink from '../Navlink/Navlink';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const AllCategory = () => {

    


    const [products, setProducts] = useState([]);
    const location = useLocation();
    useEffect(() => {
        fetch('Phons.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },)


    const categoryMap = {
        
        '/': 'All',
        '/laptops': 'Laptop',
        '/phones': 'Phone',
        '/accessories': 'Accessories',
        '/smartwatches': 'Smart Watches',
        '/macbook': 'Laptop',
        '/iphon': 'Phone'
    };
    const currentCategory = categoryMap[location.pathname] || 'All';

    const filteredProducts = currentCategory === 'All'
        ? products
        : products.filter(product => product.product_category === currentCategory);



    return (
        <div className=' py-32'>
             <Helmet>
            <title>Gadget | Phone </title>
        </Helmet>
            
            <h1 className='text-2xl md:text-4xl font-bold text-center py-10'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-[4fr,8fr] md:grid-cols-[2fr,8fr]  gap-2 mt-10' >

                <div className='border-2 bg-white shadow-2xl p-5 rounded-xl space-y-3 h-[370px]'>
                    <Navlink></Navlink>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                   
                    {
                        filteredProducts.map(phon => <Phon key={phon.product_id} phon={phon}></Phon>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCategory;