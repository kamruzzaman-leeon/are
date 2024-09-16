import React from 'react';

import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const handleGoogleSignIn=()=>{

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