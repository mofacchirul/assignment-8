import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Phon = ({phon}) => {
    
    const {product_id,product_title,product_image,price}= phon;
    
    return (
      <div>
      
       <Link to={`/phons/${product_id}`}>
         <div className="card bg-base-100 p-4 border-4 rounded-xl  shadow-xl">
        <figure>
          <img
            src={product_image}
            alt={product_title} />
        </figure>
        <div className="card-body">
          <h2 className="font-semibold text-2xl">{product_title}</h2>
          <p className='font-medium'>Price : {price}</p>
          <div className="card-actions">
          <button className="btn border-2 border-solid border-[#9538E2] text-[#9538E2]">View Details</button>
          </div>
        </div>
      </div>
       </Link>
      </div>
    );
};
Phon.propTypes ={
    phon:PropTypes.object
}
export default Phon;