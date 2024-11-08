import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import Loading from '../Component/Loading/Loading';
import useAuth from '../hooks/useAuth';

const Main = () => {
    const { loading } = useAuth();  // Get loading state from useAuth
    const navigation = useNavigation();
    const location = useLocation();

    // Check if we need to hide the header/footer based on the path
    const noHeaderFooter = ['login', 'registration'].some(path => location.pathname.includes(path));

    // Show loading if authentication or page navigation is loading
    if (loading || navigation.state === 'loading') {
        return <Loading />;
    }

    return (
        <div>
            {/* Conditionally render Navbar and Footer based on the path */}
            {!noHeaderFooter && <Navbar />}
            
            <div className="font-[Poppins] flex flex-col justify-between mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex-1">
                    <Outlet className="max-h-screen" />
                </div>
            </div>
            
            {/* Conditionally render Footer */}
            {!noHeaderFooter && <Footer />}
        </div>
    );
};

export default Main;
