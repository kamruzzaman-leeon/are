import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
    
})
const useAxiosSecure = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    //request interceptor to add auth
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        //   console.log('request stopped by interceptors', token)
        config.headers.authorization = token;
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    //intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async function (error) {
        const status = error.response.status;
        //   console.log('status error in the interceptor', status);
        if (status === 401 || status === 403) {
            await logout();
            navigate('/login')
        }
        return Promise.reject(error)
    })
    //    console.log('all okay')
    return axiosSecure;
};

export default useAxiosSecure; 