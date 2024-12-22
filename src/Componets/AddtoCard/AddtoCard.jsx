import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAddcard } from '../../../public/utilisi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../cart/cart';
import { Helmet } from 'react-helmet';



const AddtoCard = () => {
    const [cards, setCard] = useState([]);
    const loder = useLoaderData();
console.log(cards);

    useEffect(() => {
        const Addcard = getAddcard();

        const cardlist = loder.filter(card => Addcard.includes(card.product_id))
        setCard(cardlist);
    }, [])

   
    const HandleDelet=(deletId)=>{
        console.log(deletId);
        
     const updatedelet = cards.filter((card) =>card.product_id !== deletId)
     setCard(updatedelet)
        
    }



    return (
        <div>

<Helmet>
            <title>Gadget | Add card  </title>
        </Helmet>
            <Tabs>
                <div className='bg-[#9538E2] py-16 max-w-6xl mx-auto' >
                    <div className='max-w-[550px] mx-auto text-center space-y-2 text-white '>
                        <h1>Dashboard</h1>
                        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <TabList className={`border-none flex justify-center gap-2`}>
                            <Tab className={`px-5 py-2 border-white border-sol font-bold  border-2 rounded-xl`}>Cart</Tab>
                            <Tab className={`px-5 py-2 border-white border-sol font-bold  border-2 rounded-xl`}>Wishlist</Tab>
                        </TabList>
                    </div>
                    
                </div>
                <div className='flex justify-between items-center py-10'>
                        <h3 className='font-bold text-2xl'>cart</h3>
                        <div className='flex items-center gap-5'>
                        <h3 className='font-bold text-2xl'>Total cost: 999.99</h3>
                       <div className='flex gap-2'>
                        <button className='flex font-bold btn  border-[#9538E2] '>sort by price</button>
                        <button className='flex font-bold btn  border-[#9538E2] '>Purchase</button>
                       </div>

                        </div>
                    </div>

                <TabPanel>
                   <div className=''>
                    {
                       cards.map(phon => <Card key={phon.product_id} phon={phon} HandleDelet={HandleDelet}></Card> ) 
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className=''>
                    {
                       cards.map(phon => <Card key={phon.product_id} phon={phon} HandleDelet={HandleDelet} ></Card> ) 
                    }
                   </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AddtoCard;