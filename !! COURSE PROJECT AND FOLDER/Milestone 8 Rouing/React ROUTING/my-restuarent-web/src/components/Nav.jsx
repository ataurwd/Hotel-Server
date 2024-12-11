import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <div className=''>
           <div className="navbar bg-base-100 px-20">
            <div className="flex-1">
                <NavLink to="/" className="text-2xl font-bold text-primary">DevZone</NavLink>
            </div>

            <nav className="flex-none hidden md:flex space-x-6">
                <NavLink to="/home" className="hover:text-primary">Home</NavLink>
                <NavLink to="/about" className="hover:text-primary">Our Menu</NavLink>
                <NavLink to="/contact" className="hover:text-primary">Contact</NavLink>
            </nav>
        </div>
        </div>
        <Outlet/>
        </div>
    );
};

export default Nav;