import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { AuthContest } from '../Context/FormContext';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase/Firebase.init';

const Login = () => {
    const [password, setPassword] = useState({});
    const {googleLogin, setUser, loginUser, user} = useContext(AuthContest)
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef()

    const handelGoogleLogin = () => {
        googleLogin()
        .then(res =>{
            setUser(res.user)
            navigate(location?.state ? location.state : '/')            
            toast.success(`${res.user.displayName} welcome to our website.`)
        })
        return
    }

    const handleFormLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        loginUser(email, password)
        .then(res => {
            setUser(res.user)
            navigate('/')
            toast.success('Logged in successfully')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`${errorMessage}`)
          });
    }
    const handelforgetPassword =() => {
        const email = emailRef.current.value
        if(!email){
            toast.error('Please enter your email')
            return;
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Your password has been reset check your email')
            })
        }
    }

    return (
    <div className='mx-4 mb-5'>
    <Helmet>
        <title>Vocable | Login</title>
    </Helmet>
        <div className="mx-auto  lg:mb-10 md:mb-5 w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900 mt-[10vh]">
        <h1 className="text-3xl font-semibold tracking-tight text-center text-MainBg">Login your account</h1>
        <div className='border-b-[2px]'></div>

        <form onSubmit={handleFormLogin} action="#" className="space-y-6">
            <div className="space-y-2 text-sm">
                <label htmlFor="username" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                    Email
                </label>
                <input
                    ref={emailRef}
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                    id="username"
                    placeholder="Enter username"
                    name="email"
                    type="email"
                    required
                />
            </div>
            <div className="space-y-2 text-sm relative">
                <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                    Password
                </label>
                <input
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                    id="password"
                    placeholder="Enter password"
                    name="password"
                    type={password ? "password" : 'text' }
                    required
                />
                    <div onClick={() => setPassword(!password)}>
                    {
                        password ? <p className='absolute top-10 right-5'><FaEyeSlash size={18}/></p>
                        : 
                        <p className='absolute top-10 right-5'><FaEye  size={18}/></p>
                    }
                    </div>
                
                <div className="flex justify-end text-xs">
                    <a onClick={handelforgetPassword} href="#" className="text-zinc-700 hover:underline dark:text-zinc-300">
                        Forgot Password?
                    </a>
                </div>
            </div>
            <button className="rounded-md bg-MainBg px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700 w-full">Login</button>
            <div className='border-b-2'></div>
        </form>
        <button onClick={handelGoogleLogin} className="mx-auto mb-4 mt-8 block rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="mr-2 inline-block h-5 w-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                    Continue with Google
            </button>
        <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
            Don&apos;t have an account?
            <Link to={'/register'} className="font-semibold underline">
                Signup
            </Link>
        </p>
    </div>
        </div>

    );
};

export default Login;