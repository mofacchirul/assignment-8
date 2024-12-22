import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbXboxXFilled } from "react-icons/tb";
import { Helmet } from 'react-helmet';







const cart = ({ phon,HandleDelet }) => {






    const { product_id, product_title, product_image, price,description } = phon;
    return (
        <div>
 <Helmet>
            <title>Gadget | card </title>
        </Helmet>

            <Link to={`/phons/${product_id}`}>
                <div className='flex justify-between mt-3 items-center shadow-xl p-4 border-2  border-[#9538E2] border-solid rounded-xl'>
                    <div className=" flex  ">
                        <figure>
                            <img
                                src={product_image}
                                alt={product_title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="font-semibold text-2xl">{product_title}</h2>
                            <p>{description}</p>
                            <p className='font-medium'>Price : {price}</p>
                            <div className="card-actions">
                                <button className="btn border-2 border-solid border-[#9538E2] text-[#9538E2]">View Details</button>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div>
                       <button className='bg-[#9538E2] text-3xl rounded-full text-white ' onClick={()=>HandleDelet(product_id)}><TbXboxXFilled ></TbXboxXFilled></button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default cart;





