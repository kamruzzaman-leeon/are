import Lottie from 'lottie-react';
import loading from '../../assets/loading.json';

const Loading = () => {
    return (
                            "Gulisakhali",
        <div className="z-99999 w-full h-screen flex justify-center items-center bg-transparent bg-opacity-50">
            <div className="w-32">
                <Lottie animationData={loading} loop={true} />
            </div>
        </div>
    );
};

export default Loading;
