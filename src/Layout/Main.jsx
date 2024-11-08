import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import Loading from '../Component/Loading/Loading';
import useAuth from '../hooks/useAuth';

const Main = () => {
    const navigation = useNavigation();
    const location = useLocation();
    // console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('registration');
    const { loading } = useAuth(); // Get user and loading state from useAuth

    if (loading) {
        return <Loading />
    }
    return (
        
        <div className='bg-white'>
        {/* <div className='relative isolate overflow-hidden bg-white'> */}
            {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" /> */}
            {/* <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-70 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
            {noHeaderFooter || <Navbar />}
            <div className="font-[Poppins] flex flex-col justify-between mx-auto px-4 sm:px-6 lg:px-8">
                

                <div className="flex-1">
                    {
                        navigation.state === 'loading' ? (
                            <div className='flex justify-center items-center'>
                                {/* <span className="loading loading-bars loading-lg"></span> */}
                                <Loading></Loading>
                            </div>
                        ) : (
                           
                                <Outlet className="max-h-screen"/>
                            
                        )
                    }
                </div>

                
            </div>
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;
