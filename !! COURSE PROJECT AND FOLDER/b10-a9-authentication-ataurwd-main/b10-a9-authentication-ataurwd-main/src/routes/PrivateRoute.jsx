import React, { useContext } from 'react';
import { AuthContest } from '../Context/FormContext';
import { Navigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContest)
    const location = useLocation()
    if(loading){
        return <div className="w-10 h-10 mx-auto mt-[50vh]"><div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full"><span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span> <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span><span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span><span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span></div></div>

    }
    if(user && user?.email){
        return children;
    }
    if(!user){
        toast.error('Please Login To See Details');
    }
    return (
        <Navigate state={location.pathname} to="/login" />
    );
};
export default PrivateRoute;