import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signout = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    title: "Successfully Signed Out!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Redirect to the home page after logging out
                navigate('/');
            })
            .catch(error => console.log(error));
    }, [logOut, navigate]);
   
};

export default Signout;