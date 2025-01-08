import { NavLink} from "react-router-dom";
import logoShop from '../assets/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import '../Pages/navbar.css'
const Navbar = () => {
const navItem = (<>
    <NavLink to='/' className="text-white">Home</NavLink>
    <NavLink to='/contact' className="text-white">CONTACT us</NavLink>
    <NavLink to='/dashboard' className="text-white">DASHBOARD</NavLink>
    <NavLink to='/menu' className="text-white">Our Menu</NavLink>
  <div className="flex items-center gap-2">
  <NavLink to={`/shop/${"salad"}`} className="text-white">Our Shop</NavLink>
<img className="w-12" src={logoShop} alt=""/>
  </div>
     </>
)

    return (
        <div>
           <div className="navbar fixed z-10 bg-opacity-30 bg-black w-11/12 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <div className="flex flex-col items-center gap-7">
   {navItem}
   </div>
      </ul>
    </div>
    <a className="text-4xl font-bold mt-2">BISTRO BOSS
        <p className="text-base flex items-center gap-4"> <span>R</span> 
        <span>e</span>
        <span>s</span>
        <span>t</span>
        <span>u</span>
        <span>r</span>
        <span>a</span>
        <span>n</span>
        <span>t</span>
        </p>
    </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal">
   <div className="flex items-center gap-7 font-bold">
   {navItem}
   </div>
    </ul>
  </div>
</div> 
        </div>
    );
};

export default Navbar;