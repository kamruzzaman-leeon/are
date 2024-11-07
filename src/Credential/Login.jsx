import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SocialLogin from './SocialLogin';
import Lottie from 'lottie-react';
import login from '../assets/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Loading from '../Component/Loading/Loading';
import useAuth from '../hooks/useAuth';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import Swal from 'sweetalert2';


const Login = () => {
    const { signIn, loading } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Sign In!",
                    showConfirmButton: false,
                    timer: 1500
                });


                reset();
                navigate(from, { replace: true })
            }).catch(error => {
                console.log(error)
                Swal.fire({
                    title: "Invaild password!",
                    showClass: {
                        popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
                    },
                    hideClass: {
                        popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
                    }
                });


            })

    }
    // console.log(watch("email"))

    return (
        <div className='h-screen flex justify-center content-center'>
            <Helmet>
                <title>Login | Are</title>
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="max-w-screen-sm content-center px-5">
                    <Lottie animationData={login} loop={true} />
                </div>
                <div className="flex-1 flex flex-col content-center justify-center p-5">
                    <div className='mx-auto w-full md:max-w-screen-sm shadow-md'>
                        <h2 className="text-5xl text-center font-extrabold text-blue-600 my-5">Login Now!</h2>
                       <div className='card-body'>
                       <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email",{required:true})} className="input input-bordered" />
                                {errors.email?.type === 'required' && <p className='text-red-600 p-2'>Email is require</p>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        {...register("password",{required:true})}
                                        className="input input-bordered w-full pr-10" // add padding to the right
                                    />
                                    <div
                                        className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <IoEye /> : <IoEyeOff />}
                                    </div>
                                </div>

                                {errors.password?.type === 'required' && (
                                    <p className='text-red-600 p-2'>Password is required</p>
                                )}
                                <p className="mt-2">
                                    <small>Forget Password?</small>
                                    <small className='text-blue-600'>
                                        <Link to="#"> Click Here!</Link>
                                    </small>
                                </p>
                            </div>
                            {/* <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleValidateCaptcha} name='captcha' ref={captchaRef} placeholder='captcha' className="input input-bordered" required />
                            <button className='btn btn-outline btn-sm mt-2'>Validate</button>
                        </div> */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            
                        </form>
                        
                        <p className='text-center'><small>New Here?</small><small className='text-blue-600'> <Link to="/registration">Registration Now</Link></small></p>                                                            
                            <p className='text-center'><small>Go to</small><small className='text-blue-600'> <Link to="/">Home Page</Link></small></p>                         
                           <div className="divider">Sign In With</div>
                            <SocialLogin></SocialLogin>
                        </div>
                      
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;