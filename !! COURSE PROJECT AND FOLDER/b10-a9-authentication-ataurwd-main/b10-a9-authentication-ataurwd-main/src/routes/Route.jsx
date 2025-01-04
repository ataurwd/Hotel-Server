import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './../pages/Home';
import MainLayout from '../Layout/MainLayout';
import About from '../pages/About';
import Learning from '../pages/Learning';
import Tutorials from '../pages/Tutorials';
import Login from '../users/Login';
import Register from './../users/Register';
import { ToastBar } from 'react-hot-toast';
import LessonsDetails from './../components/LessonsDetails';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/Profile';
import UpdateProfile from './../users/UpdateProfile';
import ErrorPage from '../pages/ErrorPage';

    const route = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/learning',
                    element: <Learning/>,
                    loader: () => fetch('/category.json')
                },
                {
                    path: '/learning/:id',
                    element: <PrivateRoute>
                        <LessonsDetails/>
                    </PrivateRoute>,
                    loader: () => fetch('/card.json'),
                },
                {
                    path: '/tutorials',
                    element: (<PrivateRoute>
                        <Tutorials/>
                    </PrivateRoute>)
                },
                {
                    path: '/login',
                    element: <Login/>
                },
                {
                    path: '/register',
                    element: <Register/>
                },
                {
                    path: "/profile",
                    element: <PrivateRoute> <Profile/></PrivateRoute>
                },
                {
                    path: '/update-profile',
                    element: <UpdateProfile/>
                }
            ]
        }
    ])

const Route = () => {
    return (
    <div>
    <RouterProvider router={route}/>
    </div>
    );
};

export default Route;