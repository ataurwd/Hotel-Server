import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav";
import Conatact from "./components/Conatact";
import Home from "./components/Home";
import About from "./components/About";
import MillDetails from "./components/MillDetails";
import Category from "./components/Category";


function App() {
  const routeFun = createBrowserRouter([
    {
      path: "/",
      element: <Nav/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s'),
        },
        {
          path: '/home',
          element: <Home/>,
          loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s'),
        },
        {
          path: '/home/:postId',
          loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.postId}`),
          element: <MillDetails/>
        },
        {
          path: '/about',
          element: <About/>,
        },
        {
          path: '/contact',
          element: <Conatact/>,
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={routeFun}/>
    </div>
  )
}

export default App
