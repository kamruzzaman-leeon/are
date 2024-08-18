import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div className='flex flex-col content-around'>
            
            <div className='h-screen'>
               <Banner></Banner>
                <h1 className='text-center text-6xl'>this is home</h1>
                
            </div>

        </div>
    );
};

export default Home;