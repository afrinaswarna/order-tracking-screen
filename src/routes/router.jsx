import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";

export const routes = createBrowserRouter(
   [
     {
      path:'/',
      Component:MainLayout,
      children:[
        {
            index:true,
            Component:Home
        }

      ]
    }
   ]
)