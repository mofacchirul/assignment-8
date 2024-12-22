import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Helmet } from 'react-helmet';
const Contacks = ({categroy}) => {
   const {title,product_category,product_image,product_linkedin,facebook_link,instagram_link,twitter_link}=categroy
    
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
           <Helmet>
            <title>Gadget | Contacks  </title>
        </Helmet>
        <figure>
          <img
            src={product_image}
            alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="font-bold text-xl">{product_category}</h2>
          <p className='font-bold text-xl'>{title}</p>
          <div className=" flex justify-between items-center gap-3">
            <button className='btn bg-[#9538E2] '><a href={facebook_link} className="link link-primary"> <FaFacebook className='text-white text-2xl'></FaFacebook> </a></button>
            <button className='btn bg-[#9538E2] '><a href={facebook_link} className="link link-primary"><FaInstagram className='text-white text-2xl'></FaInstagram>  </a></button>
            <button className='btn bg-[#9538E2] '><a href={facebook_link} className="link link-primary"> <FaLinkedin className='text-white text-2xl'></FaLinkedin>  </a></button>
            <button className='btn bg-[#9538E2] '><a href={facebook_link} className="link link-primary"> <FaTwitter className='text-white text-2xl'></FaTwitter>  </a></button>
            
          </div>
        </div>
      </div>
    );
};

export default Contacks; 