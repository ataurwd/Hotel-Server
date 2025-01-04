import React, { useContext } from 'react';
import { AuthContest } from '../Context/FormContext';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase/Firebase.init';

const UpdateProfile = () => {
    const {user, setUser} = useContext(AuthContest)
    const navigate = useNavigate()
    const handelUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const photoURl = e.target.photo.value

        // Update user profile
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURl
        })
       .then(() => {
        toast.success('Profile updated successfully')
        navigate('/profile')
        setUser({
            ...user,
            displayName: name,
            photoURL: photoURl,
        });
       })
       .catch((error) => {
        toast.error('Error updating profile', error)
       });
    }
    return (
<div className="mx-auto w-full max-w-md space-y-4 rounded-lg border lg:my-10 md:my-8 my-5 bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
            <h1 className="text-3xl font-semibold tracking-tight">Updata Profile</h1>

            <form onSubmit={handelUpdateProfile} action="#" className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                        Name
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="username"
                        placeholder="Enter Name"
                        name="name"
                        type="text"
                        required
                    />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                        Photo URL
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="password"
                        placeholder="Enter password"
                        name="photo"
                        type="text"
                        required
                    />
                </div>
                <button className="rounded-md w-full bg-MainBg px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Update</button>
            </form>
        </div>
    );
};

export default UpdateProfile;