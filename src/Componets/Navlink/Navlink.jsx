
import { NavLink } from 'react-router-dom';
import './Navlink.css'
import { Helmet } from 'react-helmet';
// import Banner from '../Banner/Banner';


const Navlink = () => {
   
    return (
        <div>
             <Helmet>
            <title>Gadget |Navber</title>
        </Helmet>
            <NavLink to="/"><button className="btn  btn-ghost text-xl">All Product</button></NavLink>
                <NavLink to="/laptops"><button className="btn btn-ghost text-xl">Laptops</button></NavLink>
                <NavLink to="/phones"><button className="btn btn-ghost text-xl">Phones</button></NavLink>
                <NavLink to="/accessories"><button className="btn btn-ghost text-xl">Accessories</button></NavLink>
                <NavLink to="/smartwatches"><button className="btn btn-ghost text-xl">Smart Watches</button></NavLink>
                <NavLink to="/macbook"><button className="btn btn-ghost text-xl">MacBook</button></NavLink>
                <NavLink to="/iphon"><button className="btn btn-ghost text-xl">Iphone</button></NavLink>
        </div>
    );
};

export default Navlink;