import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-MainPrimary  text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Navigation Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 space-x-5">
            <NavLink to={'/'} className={({ isActive }) =>
              isActive ? "text-MainBg" : ''}>
              Home
            </NavLink>
            <NavLink to={'/about'} className={({ isActive }) =>
              isActive ? "text-MainBg" : ''}>
              About
            </NavLink>
            <NavLink to={'/learning'} className={({ isActive }) =>
              isActive ? "text-MainBg" : ''}>
              Learning
            </NavLink>
            <NavLink to={'/tutorials'} className={({ isActive }) =>
              isActive ? "text-MainBg" : ''}>
              Tutorials
            </NavLink>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>Email: support@vocable.com</p>
          <p>Phone: +123 456 789</p>
          <p>Address: 123 Winter Street, Snow City</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-MainBg">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-MainBg">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-MainBg">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-MainBg">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Vocable. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
