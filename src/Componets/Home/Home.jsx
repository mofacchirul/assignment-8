
import Banner from '../Banner/Banner';
import AllCategory from '../AllCategory/Phons';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Home = () => {
   
   


    return (


        <div>
             <Helmet>
            <title>Gadget | Home </title>
        </Helmet>
            <Banner></Banner>
            <AllCategory  ></AllCategory>
            <NavLink  ></NavLink>



        </div>
    );
};

export default Home;