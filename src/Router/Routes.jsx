import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";

import Layout from './../layouts/Layout';
import WishList from "../Pages/WishList";
import Loader from './../components/Loader';
import Products from "../Pages/Products";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    hydrateFallbackElement:<Loader/>,
    children: [
      {
        index: true,
        loader: () => fetch("/furnitureData.json"),
        element: <Home />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
    ],
  },
]);