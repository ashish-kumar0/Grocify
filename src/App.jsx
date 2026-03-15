import React from "react";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./Components/Fruits/Fruits";
import Dairy from "./Components/Dairy/Dairy";
import Seafood from "./Components/Seafood/Seafood";
import Allproducts from "./Components/Allproducts/Allproducts";
import Layout from "./Components/Navbar/Layout/Layout";
import About from "./Components/About/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <Seafood />,
        },
        {
          path: "/allproducts",
          element: <Allproducts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
