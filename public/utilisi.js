// import Group from '../src/Componets/imges/Group.png'

import { toast } from "react-toastify";


const getAddcard = () => {
    const stordcard= localStorage.getItem('card-list');
    if(stordcard){
        const stordCardstr = JSON.parse(stordcard);
        return stordCardstr;
    }
    else{
        return [];
    }
};

const Addtocards = (id) =>{
const storedCard = getAddcard();
if(storedCard.includes(id)){
    console.log(id,'card list already')
}
else{
    storedCard.push(id)
    const storedLiscard = JSON.stringify(storedCard);
    localStorage.setItem("card-list",storedLiscard)
   
}








}
const getAddheart = () => {
    const stordheart= localStorage.getItem('heart-list');
    if(stordheart){
        const stordstrheart= JSON.parse(stordheart);
        return stordstrheart;
    }
    else{
        return [];
    }
};

const Addtoheart = (id) =>{
const storedheart = getAddheart();
if(storedheart.includes(id)){
    console.log(id,'heart list already')
}
else{
    storedheart.push(id)
    const storedLisheart = JSON.stringify(storedheart);
    localStorage.setItem("heart-list",storedLisheart)
}
}


export {Addtocards,Addtoheart,getAddcard}