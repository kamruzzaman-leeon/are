import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SocialLogin from './SocialLogin';
import Lottie from 'lottie-react';
import loginAnimation from '../assets/login.json';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);  // Local loading state
    const from = location.state?.from?.pathname || '/';

    // Toggle password visibility
    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    const onSubmit = async (data) => {
        const { email, password } = data;
        setLoading(true);  // Start loading

        try {
            const result = await signIn(email, password);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Signed In!',
                showConfirmButton: false,
                timer: 1500
            });
            reset();
            navigate(from, { replace: true });
        } catch (error) {
            Swal.fire({
                title: 'Invalid Password!',
                icon: 'error',
                showClass: { popup: 'animate__animated animate__fadeInUp animate__faster' },
                hideClass: { popup: 'animate__animated animate__fadeOutDown animate__faster' }
            });
        } finally {
            setLoading(false);  // Stop loading
        }
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <Helmet>
                <title>Login | Are</title>
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
                <div className="px-5">
                    <Lottie animationData={loginAnimation} loop />
                </div>

                <div className="flex flex-col justify-center p-5 w-full max-w-screen-sm shadow-md">
                    <h2 className="text-5xl text-center font-extrabold text-blue-600 my-5">Login Now!</h2>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label-text">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", { required: 'Email is required' })}
                                className="input input-bordered"
                            />
                            {errors.email && <p className='text-red-600 p-2'>{errors.email.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label-text">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    {...register("password", { required: 'Password is required' })}
                                    className="input input-bordered w-full pr-10"
                                />
                                <button
                                    type="button"
                                    aria-label="Toggle password visibility"
                                    className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <IoEye /> : <IoEyeOff />}
                                </button>
                            </div>
                            {errors.password && <p className='text-red-600 p-2'>{errors.password.message}</p>}
                            <p className="mt-2 text-sm">
                                <Link to="/forgot-password" className="text-blue-600">Forgot Password?</Link>
                            </p>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit" disabled={loading}>
                                {loading ? 'Logging In...' : 'Login'}
                            </button>
                        </div>
                    </form>

                    <p className="text-center">
                        <small>New Here? <Link to="/registration" className="text-blue-600">Register Now</Link></small>
                        <br />
                        <small>Go to <Link to="/" className="text-blue-600">Home Page</Link></small>
                    </p>
                    <div className="divider"><small>Sign In With</small></div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
