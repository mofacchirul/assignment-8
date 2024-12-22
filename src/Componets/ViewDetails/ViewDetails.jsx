import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { MdOutlineShoppingCart } from "react-icons/md";
import { Addtocards, Addtoheart } from '../../../public/./utilisi';

import { toast } from 'react-toastify';
import Toasty from './Toasty';
import { Helmet } from 'react-helmet';


const ViewDetails = () => {
    const {phonsId} = useParams();
    const id = parseInt(phonsId);

    const datas = useLoaderData();
   
  
    
   const Phon = datas.find(Phon => Phon.product_id === id )
   
   
   

   const HandleAddtocard = (id)=>{
    toast(<Toasty Phon={Phon}></Toasty>)
Addtocards(id)
 
  }
  
  const Handleaddtoheart = (id)=>{
 
 Addtoheart(id)

  }






    
    const {product_title,product_image,product_category,price,description,specification,availability,rating,product_id} = Phon;
    
    return (
    
        <div>
            <Helmet>
            <title>Gadget | view Details </title>
        </Helmet>
        <div className=" h-[400px] bg-[#9538E2] rounded-2xl text-white ">
<div className="hero-content text-center">
 <div className="max-w-md">
   <h1 className="text-4xl font-bold">Product Details</h1>
   <p className="py-6">
   Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
   </p>
  
 </div>
</div>

</div>
<div className='max-w-3xl mx-auto p-5 -mt-[200px]  shadow-xl bg-white rounded-2xl  '>
<div className='md:flex  items-center  '>
<img className=' w-[500px] h-[500px]   rounded-xl  ' src={product_image} alt={product_title} />
<div className=' space-y-2'>
    <h1 className='font-semibold text-3xl'>{product_title}</h1>
    <p className='font-semibold text-xl'>Price : {price}</p>
    <button className="btn text-[#9538E2] border-2 border-solid border-[#9538E2] ">{product_category}</button>
        <p>{description}</p>
       <div>
        <h4 className=' font-bold text-xl'>Specification :</h4>
        {specification.map((specifications,index)=>  <li key={index} className='list-none'>{index + 1}. {specifications} </li>)}
        </div> 
        <h3 className='font-bold text-xl flex gap-2 items-center'>Rating  <FaRegStar className='text-orange-400'></FaRegStar> </h3>
<div className='flex items-center gap-2'>
<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<button className='btn font-bold'>{rating}</button>
</div>




<div className='flex gap-2'>
    <button className='flex font-bold btn  bg-[#9538E2] text-white' onClick={()=>HandleAddtocard(product_id)}>Add to Card <MdOutlineShoppingCart className='text-2xl'></MdOutlineShoppingCart> </button>
<button className='btn  text-black block ' onClick={()=>Handleaddtoheart(product_id)} ><CiHeart className='text-3xl font-bold flex items-center justify-center w-5 h-5 rounded-full'></CiHeart></button>

</div>




</div>

</div>
</div>

     </div>
    );
};

export default ViewDetails;