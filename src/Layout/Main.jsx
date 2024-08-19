import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

const Main = () => {
    return (
        <div
            // style={{
            //     background: "linear-gradient(90deg, rgba(2,0,36,0.2806372549019608) 0%, rgba(9,9,121,0) 35%, rgba(0,212,255,0.3702731092436975) 100%)"
            // }}
        >
            <div className="font-sans centerwithfixedwidth flex flex-col justify-between">
                <Navbar />
               <div className='h-screen'>
               <Outlet />
               </div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;
