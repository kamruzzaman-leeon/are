import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { app } from "../Firebase/firebase.config";
import { 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile 
} from "firebase/auth";
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            return result;
        } catch (error) {
            console.error("Error creating user:", error);
            setLoading(false);
            throw error;
        }
    };

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return result;
        } catch (error) {
            console.error("Error signing in:", error);
            setLoading(false);
            throw error;
        }
    };

    const googleSignIn = async () => {
        setLoading(true);
        try {
            return await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error with Google sign-in:", error);
            setLoading(false);
            throw error;
        }
    };

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            localStorage.removeItem('access-token');
            setUser(null);
        } catch (error) {
            console.error("Error signing out:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateUserProfile = async (name, photo) => {
        try {
            return await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            });
        } catch (error) {
            console.error("Error updating profile:", error);
            throw error;
        }
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Reset loading regardless of user status

            if (currentUser) {
                const userInfo = { email: currentUser.email };
                try {
                    const res = await axiosPublic.post('/jwt', userInfo, { withCredentials: true });
                    // console.log(res); // For debugging, remove in production
                } catch (error) {
                    console.error("Error fetching JWT:", error);
                }
            } 
        }, (error) => {
            console.error("Error in onAuthStateChanged:", error);
            setLoading(false); // Ensure loading is stopped on error
        });
        return () => unSubscribe();
    }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
