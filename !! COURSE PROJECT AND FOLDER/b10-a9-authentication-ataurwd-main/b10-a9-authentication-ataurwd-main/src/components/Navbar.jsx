import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContest } from '../Context/FormContext';

const Navbar = () => {
    const {user ,hanldeLogout} = useContext(AuthContest)

    const userLogOut = () => {
        hanldeLogout();
    }
    return (
<div className="navbar bg-base-100 lg:px-20 md:px-10 px-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <NavLink to={'/'} className={({ isActive }) =>
        isActive ? "text-MainBg" : ''}>Home</NavLink>
      <NavLink to={'/about'} className={({ isActive }) =>
        isActive ? "text-MainBg" : ''}>About</NavLink>
      <NavLink to={'/learning'} className={({ isActive }) =>
        isActive ? "text-MainBg" : ''}>Learning</NavLink>
        {
          user ? <NavLink to={'/tutorials'} className={({ isActive }) =>
            isActive ? "text-MainBg" : ''}>Tutorials</NavLink> : ''
        }
        {
          user ? <NavLink to={'/profile'} className={({ isActive }) =>
            isActive ? "text-MainBg" : ''}>Profile</NavLink> : ''
        }
      </ul>
    </div>
    <Link to={'/'} className="text-2xl font-bold">Vocable</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold space-x-8">
      <NavLink to={'/'} className={({ isActive }) =>
        isActive ? "text-MainBg" : ''}>Home</NavLink>
      <NavLink to={'/about'} className={({ isActive }) =>
        isActive ? "text-MainBg" : ''}>About</NavLink>
      <NavLink to={'/learning'} className={({ isActive }) =>
        isActive ? "text-MainBg" : ''}>Learning</NavLink>
        {
          user ? <NavLink to={'/tutorials'} className={({ isActive }) =>
            isActive ? "text-MainBg" : ''}>Tutorials</NavLink> : ''
        }
        {
          user ? <NavLink to={'/profile'} className={({ isActive }) =>
            isActive ? "text-MainBg" : ''}>Profile</NavLink> : ''
        }
    </ul>
  </div>
  <div className="navbar-end flex items-center space-x-4">
    {user ? (
      <>
        <img src={user.photoURL} className="rounded-full w-10 h-10" alt="User" />
        <Link to={'/login'} onClick={userLogOut} className="px-5 bg-MainBg text-white py-1 rounded-md">Logout</Link>
      </>
    ) : (
      <>
        <Link to={'/login'}>
          <button className="px-5 bg-MainBg text-white py-1 rounded-md">Login</button>
        </Link>
      </>
    )}
  </div>
</div>

    );
};

export default Navbar;