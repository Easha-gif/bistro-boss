import Cover from "../Shared/Cover";
import Heading from "../Shared/Heading";
import menuCoverImage from '../assets/assets/menu/banner3.jpg'
import useMenu from "../hooks/useMenu";
import Card1 from "./Card1";
import dessertImg from '../assets/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/assets/menu/pizza-bg.jpg'
import saladImg from '../assets/assets/menu/salad-bg.jpg'
import soupImg from '../assets/assets/menu/soup-bg.jpg'
import { Link } from "react-router-dom";
const MenuBanner = () => {

const [menu]=useMenu()

const offeredItem=menu.filter(item=>item.category==="offered")
const dessertItem=menu.filter(item=>item.category==="dessert")
const pizzaItem=menu.filter(item=>item.category==="pizza")
const saladItem=menu.filter(item=>item.category==="salad")
const soupItem=menu.filter(item=>item.category==="soup")

    return (
       <div>
 <div className="flex items-center justify-center bg-fixed" style={{backgroundImage:`url(${menuCoverImage})`, height:'700px', backgroundSize:'cover'}}>
            
            <Cover title='OUR MENU' description='Would you like to try a dish?'></Cover>
    </div>
       <Heading Heading='TODAY S OFFER' subHeading='Don t miss'></Heading>
{/* offered */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12 w-11/12 mx-auto">
{offeredItem.map(item=><Card1 key={item._id} item={item}></Card1>)}
</div>
<div className="flex justify-center">
<Link to={`/shop/${"salad"}`} className="border-b-4 border-gray-950 rounded-lg text-sm mb-10 px-3">ORDER YOUR FAVOURITE FOOD</Link>
</div>
{/* offered end */}
{/* dessert */}
<div className="flex items-center justify-center rounded-md" style={{backgroundImage:`url(${dessertImg})`, height:'550px', backgroundSize:'cover'}}>
            
            <Cover title='Desserts' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12 mt-16 w-11/12 mx-auto">
{dessertItem.map(item=><Card1 key={item._id} item={item}></Card1>)}
</div>
<div className="flex justify-center">
<Link to={`/shop/${"dessert"}`} className="border-b-4 border-gray-950 rounded-lg text-sm mb-10 px-3">ORDER YOUR FAVOURITE Dessert</Link>
</div>
{/* dessert end */}

{/* pizza */}
<div className="flex items-center justify-center rounded-md" style={{backgroundImage:`url(${pizzaImg})`, height:'550px', backgroundSize:'cover'}}>
            
            <Cover title='Pizzas' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12 mt-16 w-11/12 mx-auto">
{pizzaItem.map(item=><Card1 key={item._id} item={item}></Card1>)}
</div>
<div className="flex justify-center">
<Link to={`/shop/${"pizza"}`} className="border-b-4 border-gray-950 rounded-lg text-sm mb-10 px-3">ORDER YOUR FAVOURITE Pizza</Link>
</div>
{/* pizza end */}

{/* salad */}
<div className="flex items-center justify-center rounded-md" style={{backgroundImage:`url(${saladImg})`, height:'550px', backgroundSize:'cover'}}>
            
            <Cover title='Salads' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12 mt-16 w-11/12 mx-auto">
{saladItem.map(item=><Card1 key={item._id} item={item}></Card1>)}
</div>
<div className="flex justify-center">
<Link to={`/shop/${"salad"}`} className="border-b-4 border-gray-950 rounded-lg text-sm mb-10 px-3">ORDER YOUR FAVOURITE Salads</Link>
</div>
{/* salad end */}

{/* soup */}
<div className="flex items-center justify-center rounded-md" style={{backgroundImage:`url(${soupImg})`, height:'550px', backgroundSize:'cover'}}>
            
            <Cover title='Soups' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12 mt-16 w-11/12 mx-auto">
{soupItem.map(item=><Card1 key={item._id} item={item}></Card1>)}
</div>
<div className="flex justify-center">
<Link to={`/shop/${"soup"}`} className="border-b-4 border-gray-950 rounded-lg text-sm mb-28 px-3">ORDER YOUR FAVOURITE Soup</Link>
</div>
{/* soup end */}

       </div>
    );
};

export default MenuBanner;