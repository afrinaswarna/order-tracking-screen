import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

import OrderTrackingPage from "../pages/OrderTrackingPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: OrderTrackingPage,
      },
    ],
  },
]);
