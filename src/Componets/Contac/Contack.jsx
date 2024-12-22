import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Contacks from './Contacks';
import { Helmet } from 'react-helmet';

const Contack = () => {
    const categroys = useLoaderData();
    
    
    return (
        <div>
             <Helmet>
            <title>Gadget | Contack </title>
        </Helmet>
           <div className='bg-[#9538E2] py-10'>
   <div className='max-w-[500px] mx-auto text-center text-white'>
<h1 className='font-bold text-3xl'>Contack</h1>
<p >Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
   </div>
  </div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {
        categroys.map(categroy => <Contacks key={categroy.product_id}  categroy={categroy} ></Contacks>)
    }
</div>

        </div>
    );
};

export default Contack;