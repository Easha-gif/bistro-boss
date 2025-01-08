import { useParams } from "react-router-dom";
import Card2 from "../Pages/Card2";
import Cover from "../Shared/Cover";
import shopImg from '../assets/assets/shop/banner2.jpg'
import useMenu from "../hooks/useMenu";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Shop = () => {


    const [menu]=useMenu()
const categories =['salad','pizza','soup','dessert','drinks']
const {category}=useParams()
const initial=categories.indexOf(category)

const [tabIndex,setTabIndex]=useState(initial)
    const dessert=menu.filter(item=>item.category==="dessert")
    const pizza=menu.filter(item=>item.category==="pizza")
    const salad=menu.filter(item=>item.category==="salad")
    const soup=menu.filter(item=>item.category==="soup")
    const drinks=menu.filter(item=>item.category==="drinks")


    return (
        <div>
          <div className="flex items-center justify-center bg-fixed" style={{backgroundImage:`url(${shopImg})`, height:'700px', backgroundSize:'cover'}}>
            
            <Cover title='OUR SHOP' description='Would you like to try a dish?'></Cover>
    </div>  

<div className="mt-10 mb-28">



    {/* tab */}

    <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <TabList>
      <Tab>SALAD</Tab>
      <Tab>PIZZA</Tab>
      <Tab>SOUP</Tab>
      <Tab>DESSERTS</Tab>
      <Tab>DRINKS</Tab>
    </TabList>

    <TabPanel>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
    {salad.map(item=><Card2 key={item._id} item={item}></Card2>)}
    </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
    {pizza.map(item=><Card2 key={item._id} item={item}></Card2>)}
    </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
    {soup.map(item=><Card2 key={item._id} item={item}></Card2>)}
    </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
    {dessert.map(item=><Card2 key={item._id} item={item}></Card2>)}
    </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
    {drinks.map(item=><Card2 key={item._id} item={item}></Card2>)}
    </div>
    </TabPanel>
  </Tabs>



</div>

        </div>
    );
};

export default Shop;