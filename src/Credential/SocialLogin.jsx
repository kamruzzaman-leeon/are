import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn, loading } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    image: result.user?.photoURL,
                };
                
                // Send user information to the backend
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log("User successfully created:", res.data);
                        navigate('/');
                    })
                    .catch(error => {
                        console.error("Error saving user to database:", error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'There was an error saving your information. Please try again later.',
                        });
                    });
            })
            .catch(error => {
                console.error("Google Sign-In failed:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Sign-In Failed',
                    text: 'Unable to sign in with Google. Please try again later.',
                });
            });
    };

    return (
        <div className="mx-auto">
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FcGoogle className='text-2xl' />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
