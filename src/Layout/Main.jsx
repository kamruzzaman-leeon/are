import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

const Main = () => {
    const navigation = useNavigation();
    
    return (
        <div className='relative isolate overflow-hidden bg-white'>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            {/* <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-70 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}

            <div className="font-[Poppins] centerwithfixedwidth flex flex-col justify-between mx-auto px-4 sm:px-6 lg:px-8">
                <Navbar />

                <div className="flex-1">
                    {
                        navigation.state === 'loading' ? (
                            <div className='flex justify-center items-center'>
                                <span className="loading loading-bars loading-lg"></span>
                            </div>
                        ) : (
                            <Outlet className=""/>
                        )
                    }
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Main;
