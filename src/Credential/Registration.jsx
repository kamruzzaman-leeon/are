import Lottie from 'lottie-react';
import React, { useState } from 'react';
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
    const [isLoading, setIsLoading] = useState(false);

    const password = useWatch({ control, name: 'password' });
    const defaultImageURL = "https://www.flaticon.com/free-icons/user";

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Passwords do not match',
                text: 'Please make sure your passwords match.',
            });
            return;
        }

        setIsLoading(true); // Start loading state

        try {
            const result = await createUser(data.email, data.password);
            const photoURL = data.photoURL || defaultImageURL;

            await updateUserProfile(data.name, photoURL);

            const userInfo = {
                name: data.name,
                email: data.email,
                photo: photoURL,
            };

            const res = await axiosPublic.post('/users', userInfo);
            if (res.data.insertedId) {
                reset();
                logOut();
                Swal.fire({
                    position: "center",
                    title: "User created successfully!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/login');
            }
        } catch (error) {
            console.error("Error during registration:", error);
            Swal.fire({
                icon: 'error',
                title: error.response ? 'Failed to save user data' : 'Registration Failed',
                text: 'An error occurred. Please try again.',
            });
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <>
            <Helmet>
                <title>Registration | aRe</title>
            </Helmet>
            <div className="h-screen flex justify-center content-center">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="max-w-screen-sm content-center px-5">
                        <Lottie animationData={registration} loop={true} />
                    </div>
                    <div className="flex-1 flex flex-col justify-center p-5">
                        <div className="mx-auto w-full md:max-w-screen-sm shadow-md">
                            <h2 className="text-5xl text-center font-extrabold text-blue-600 my-5">Register now!</h2>
                            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                                {['name', 'email'].map((field, index) => (
                                    <div key={index} className="form-control">
                                        <label className="label">
                                            <span className="label-text">{field.charAt(0).toUpperCase() + field.slice(1)}</span>
                                        </label>
                                        <input type={field === 'email' ? 'email' : 'text'} placeholder={field}
                                            {...register(field, { required: `${field} is required` })}
                                            className="input input-bordered"
                                        />
                                        {errors[field] && <p className="text-gray-600 p-2 text-sm">{errors[field].message}</p>}
                                    </div>
                                ))}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        {...register('password', {
                                            required: "Password is required",
                                            minLength: { value: 8, message: "Minimum 8 characters required" },
                                            maxLength: { value: 20, message: "Maximum 20 characters allowed" },
                                            pattern: {
                                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                                message: "Password must include uppercase, lowercase, number, and special character",
                                            },
                                        })}
                                        className="input input-bordered"
                                    />
                                    <label className="p-2">
                                        <small className="text-sm">
                                            {[
                                                { test: password && password.length >= 8, label: "Minimum 8 characters" },
                                                { test: password && /[A-Z]/.test(password), label: "At least one uppercase letter" },
                                                { test: password && /[a-z]/.test(password), label: "At least one lowercase letter" },
                                                { test: password && /[0-9]/.test(password), label: "At least one number" },
                                                { test: password && /[#?!@$%^&*-]/.test(password), label: "At least one special character" },
                                            ].map(({ test, label }, idx) => (
                                                <span key={idx} className={`flex items-center ${test ? 'text-green-600' : 'text-gray-400'}`}>
                                                    {test ? "✔ " : "✖ "} {label}
                                                </span>
                                            ))
                                            }
                                        </small>
                                    </label>
                                    {errors.password && <p className="text-gray-600 text-sm">{errors.password.message}</p>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="confirm password"
                                        {...register('confirmPassword', { required: "Confirm Password is required" })}
                                        className="input input-bordered"
                                    />
                                    {errors.confirmPassword && <p className="text-gray-600 text-sm">{errors.confirmPassword.message}</p>}
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" disabled={isLoading}>
                                        {isLoading ? 'Registering...' : 'Register'}
                                    </button>
                                </div>

                                <p className="text-center">
                                    <small>Already Registered? <Link to="/login" className="text-blue-600">Login Now</Link></small>
                                    <br />
                                    <small>Go to <Link to="/" className="text-blue-600">Home Page</Link>  </small>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;
