import React, { useContext } from 'react';
import { AuthContest } from '../Context/FormContext'; // Assuming you have a context for authentication
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user } = useContext(AuthContest); // Get the user data from context
    const navigate = useNavigate();


    return (
        <div className="container mx-auto p-6">
            <div className="bg-white p-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Welcome, {user.displayName}!</h2>
                    <div className="flex flex-col items-center mb-6">
                    <img 
                        src={user.photoURL || "https://i.ibb.co/7WVJ6V1/default-avatar.png"} 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full mb-4 object-cover" 
                    />
                    <p className="text-xl font-medium text-center">{user.displayName || 'No Name Provided'}</p>
                    <p className="text-lg text-center text-gray-600">{user.email}</p>
                </div>
                <div className="flex justify-center mt-6">
                    <Link to={'/update-profile'}
                        
                        className="px-6 py-2 bg-MainBg text-white font-semibold rounded-lg shadow-md hover:bg-MainPrimary hover:text-black transition-all"
                    >
                        Update Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
