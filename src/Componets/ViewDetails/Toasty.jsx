import React from 'react';
import Grop from '../imges/Group.png'
const Toasty = ({Phon}) => {
    const {rating}= Phon;
    
    return (
<div>

<div className='text-center'>
<img className='mx-auto' src={Grop} alt="" />
<h1 className='font-bold text-2xl'>Payment Successfully</h1>
<div className="divider"></div>
<p>Thanks For purchasing</p>
<p>Total : {rating}</p>

 <button className="btn flex flex-col w-full mt-10">Close</button>
      
</div>



</div>
    );
};

export default Toasty;