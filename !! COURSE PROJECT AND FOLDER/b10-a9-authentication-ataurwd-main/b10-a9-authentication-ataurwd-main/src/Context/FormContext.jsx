import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './../firebase/Firebase.init';

export const AuthContest = createContext(null)
const FormContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)    
    const googleProvider = new GoogleAuthProvider()

    // loging with google
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // register user with email and password
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user with email and password
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const hanldeLogout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // for save user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, []);


    const obj = {
        googleLogin,
        registerUser,
        loginUser,
        user,
        setUser,
        hanldeLogout,
        loading,
        setLoading,
    }

    return (
        <AuthContest.Provider value={obj}>
            {children}
        </AuthContest.Provider>
    );
};

export default FormContext;