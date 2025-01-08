import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import Menu from "./Menu";
import Shop from "./Shop";
import Contact from "./Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/shop/:category',
            element:<Shop></Shop>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
      ]
    },
  ]);