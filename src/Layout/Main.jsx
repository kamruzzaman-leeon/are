
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="max-w-[1250px] mx-auto font-sans">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;