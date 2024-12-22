import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Componets/Roots/Roots.jsx';
import ErrosPage from './Componets/ErrosPage/ErrosPage.jsx';
import Home from './Componets/Home/Home.jsx';
import ViewDetails from './Componets/ViewDetails/ViewDetails.jsx';
import AddtoCard from './Componets/AddtoCard/AddtoCard.jsx';
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import Statistic from './Componets/Statistic/Statistic.jsx';

import AllCategory from './Componets/AllCategory/Phons.jsx';
import Contack from './Componets/Contac/Contack.jsx';
import HelmetExport, { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,   
    errorElement: <ErrosPage></ErrosPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      
       
      },
      {
        path:'/statistic',
        element:<Statistic></Statistic>
      },
      {
          path:'/contack',
          element:<Contack></Contack>,
          loader:()=>fetch("/Category.json")
      },
      {
        path: '/dashbord',
        element: <AddtoCard></AddtoCard>,
        loader : () => fetch('/Phons.json'),
      },     
      {
        path: 'phons/:phonsId',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('/Phons.json'),
      },
      { path: "/laptops",
       
         element: <AllCategory>
         
         </AllCategory> },

      { path: "/phones",
         element: <AllCategory></AllCategory> },

      { path: "/accessories", 
        element: <AllCategory></AllCategory> },
      { path: "/smartwatches", 
        element: <AllCategory></AllCategory> },
      { path: "/macbook", 
        element: <AllCategory></AllCategory> },
      { path: "/iphon",
         element: <AllCategory></AllCategory> },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <HelmetProvider>
 <RouterProvider router={router} />
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce
/>
 </HelmetProvider>
  </StrictMode>,
)
