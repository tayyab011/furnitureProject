import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Product from '../Pages/ProductCard';
import Layout from './../layouts/Layout';
import WishList from "../Pages/WishList";
import Loader from './../components/Loader';


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
        element: <Product />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
    ],
  },
]);