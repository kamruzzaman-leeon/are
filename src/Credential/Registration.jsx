import Lottie from 'lottie-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import registration from '../assets/registration.json';
import Swal from 'sweetalert2';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, useWatch } from 'react-hook-form';

const Registration = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile, logOut } = useAuth();
    const { register, handleSubmit, reset, formState: { errors }, watch, control } = useForm();
    const navigate = useNavigate();
    
    const password = useWatch({ control, name: 'password' });

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Passwords do not match',
                text: 'Please make sure your passwords match.'
            });
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            image: data.photoURL,
                        };
                        // axiosPublic.post('/users', userInfo)
                    //         .then(res => {
                    //             if (res.data.insertedId) {
                    //                 reset();
                    //                 logOut();
                    //                 Swal.fire({
                    //                     position: "center",
                    //                     title: "Successfully User created!",
                    //                     icon: "success",
                    //                     showConfirmButton: false,
                    //                     timer: 1500
                    //                 });
                    //                 navigate('/login');
                    //             }
                    //         });
                    // }).catch(error => console.log(error));
            });
    };

    return (
        <>
            <Helmet>
                <title>Registration | aRe</title>
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="max-w-screen-sm content-center px-5">
                    <Lottie animationData={registration} loop={true} />
                </div>
                <div className="flex-1 flex flex-col content-center justify-center p-5">
                    <div className='mx-auto w-full md:max-w-screen-sm shadow-md'>
                        <h2 className="text-5xl text-center font-extrabold text-blue-600 my-5">Register now!</h2>
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name?.type === 'required' && <p className='text-gray-600 text-sm'>Name is required</p>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register('email', { required: true })} className="input input-bordered" />
                                {errors.email?.type === 'required' && <p className='text-gray-600 text-sm'>Email is required</p>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register('password', {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                                })} className="input input-bordered" />
                                <label className='p-2' htmlFor="password">
                                    <small className='text-sm'>
                                        <span className={`flex items-center ${password && password.length >= 8 ? 'text-green-600' : 'text-gray-400'}`}>
                                            {password && password.length >= 8 ? "✔ " : "✖ "} Minimum 8 characters
                                        </span>
                                        <span className={`flex items-center ${password && /[A-Z]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                                            {password && /[A-Z]/.test(password) ? "✔ " : "✖ "} At least one uppercase letter
                                        </span>
                                        <span className={`flex items-center ${password && /[a-z]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                                            {password && /[a-z]/.test(password) ? "✔ " : "✖ "} At least one lowercase letter
                                        </span>
                                        <span className={`flex items-center ${password && /[0-9]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                                            {password && /[0-9]/.test(password) ? "✔ " : "✖ "} At least one number
                                        </span>
                                        <span className={`flex items-center ${password && /[#?!@$%^&*-]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                                            {password && /[#?!@$%^&*-]/.test(password) ? "✔ " : "✖ "} At least one special character
                                        </span>
                                    </small>
                                </label>
                                {errors.password && <p className='text-gray-600 text-sm'>{errors.password.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" {...register('confirmPassword', { required: true })} className="input input-bordered" />
                                {errors.confirmPassword?.type === 'required' && <p className='text-gray-600 text-sm'>Confirm Password is required</p>}
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            
                            <p className='text-center'>
                                <small>Already Registered Here?</small>
                                <small className='text-blue-600'> <Link to="/login">Login Now</Link></small>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;
