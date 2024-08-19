
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';


const Main = () => {
    return (
        <div className="font-sans centerwithfixedwidth">
           
            <Navbar></Navbar>
            <div className='bg-slate-900'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;