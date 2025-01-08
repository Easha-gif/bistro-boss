import { useEffect, useState } from "react";
import Heading from "../Shared/Heading";
import Card1 from "./Card1";

const Menu = () => {
const [menu ,setMenu]=useState([])


useEffect(()=>{
fetch("menu.json")
.then(res=>res.json())
.then(data=>{
 const selected=  data.filter((PoPuItem)=>PoPuItem.category==="popular")
 setMenu(selected)})
},[])

    return (
        <div>
            <Heading Heading="FROM OUR MENU"subHeading="Check it out"></Heading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
          {menu.map(item=><Card1 key={item._id} item={item}></Card1>)}
          </div>
        <div className="flex justify-center mb-20">
        <button className="border-b-4 text-gray-800 font-bold mt-16 border-gray-900 px-4 rounded-lg">View Full Menu</button>
        </div>
        <div className="flex items-center font-bold justify-center bg-gray-950 text-white p-7 py-20 rounded-md">
            <p><span className="text-3xl">Call Us : </span> 
                <span  className="text-3xl">+88019<span className="text-2xl">234</span>5678</span>
                <span  className="text-2xl">910</span>
                 </p>
        </div>
        </div>
    );
};

export default Menu;