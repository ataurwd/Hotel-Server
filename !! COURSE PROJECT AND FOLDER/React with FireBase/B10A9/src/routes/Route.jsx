import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './../pages/Home';

    const route = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        }
    ])

const Route = () => {
    return (
        <RouterProvider router={route}/>
    );
};

export default Route;