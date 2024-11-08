import Lottie from 'lottie-react';
import loading from '../../assets/loading.json';

const Loading = () => {
    return (
        <div className="z-99999 w-full h-screen flex justify-center items-center bg-slate-300 bg-opacity-50">
            <div className="w-32">
                <Lottie animationData={loading} loop={true} />
            </div>
        </div>
    );
};

export default Loading;
