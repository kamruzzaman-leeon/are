import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';


const SocialLogin = () => {
    const {googleSignIn, loading}=useAuth();
    

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const userInfo = {
                email:result.user?.email,
                name: result.user?.name,
                image: result.user?.photoURL,
            }
        })
    }
    return (
        <div className="mx-auto">
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                <FcGoogle className='text-2xl'></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;