import React from 'react';
import { ComposedChart,Bar,Area,CartesianGrid,Legend,BarChart, Tooltip,Line, XAxis, YAxis } from 'recharts';


const Statistic = () => {
    
 const   products = [
          {
            "id": "1",
            "name": "iPhone 13",
            "category": "phone",
            "price": 799
          },
          {
            "id": "2",
            "name": "MacBook Pro 14\"",
            "category": "laptop",
            "price": 1999
          },
          {
            "id": "3",
            "name": "AirPods Pro",
            "category": "airpods",
            "price": 249
          },
          {
            "id": "4",
            "name": "MacBook Air 13\"",
            "category": "laptop",
            "price": 999
          },
          {
            "id": "5",
            "name": "iPhone 14",
            "category": "phone",
            "price": 899
          },
          {
            "id": "6",
            "name": "iPhone 12",
            "category": "phone",
            "price": 699
          },
          {
            "id": "7",
            "name": "MacBook Air 15\"",
            "category": "laptop",
            "price": 1299
          },
          {
            "id": "8",
            "name": "AirPods Max",
            "category": "airpods",
            "price": 549
          },
          {
            "id": "9",
            "name": "iPhone SE",
            "category": "phone",
            "price": 429
          },
          {
            "id": "10",
            "name": "MacBook Pro 16\"",
            "category": "laptop",
            "price": 2499
          },
          {
            "id": "11",
            "name": "AirPods (3rd Generation)",
            "category": "airpods",
            "price": 179
          },
          {
            "id": "12",
            "name": "iPhone 14 Pro",
            "category": "phone",
            "price": 999
          }
        ]
      
      
    return (

<div className='py-20'>
  <div className='bg-[#9538E2] py-10'>
   <div className='max-w-[500px] mx-auto text-center text-white'>
<h1 className='font-bold text-3xl'>Statistics</h1>
<p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
   </div>
  </div>
<div className=' p-3 border-2 shadow-xl rounded-xl border-solid border-[#9538E2] mt-10 flex flex-col justify-center'>
            <ComposedChart width={930} height={250} data={products}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="name" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="price" barSize={20} fill="#9538E2" />
  <Line type="monotone" dataKey="category" stroke="#ff7300" />
</ComposedChart>
        </div>
</div>






       
    )
};

export default Statistic;