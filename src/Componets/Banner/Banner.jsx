import React from 'react';
import banner from '../imges/banner.jpg'
const Banner = () => {
    return (
        <div>
           <div className=" min-h-screen bg-[#9538E2] rounded-2xl text-white ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn text-[#9538E2]">Shop Now</button>
    </div>
  </div>

</div>
<div className=' -mt-[180px]  '>
    <img className='w-[500px] p-2 border-4 rounded-xl  mx-auto' src={banner} alt="" />
</div>

        </div>
    );
};

export default Banner;