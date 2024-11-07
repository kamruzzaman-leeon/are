import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';

import JoinSection from '../JoinSection/JoinSection';
import Review from '../Review/Review';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Stats from '../Stats/Stats';


const Home = () => (
    <div className='centerwithfixedwidth'>
        <Banner></Banner>
        <Stats></Stats>
        <JoinSection title={`Join Us in Revolutionizing Education!`} desc={`Are you passionate about teaching and eager to reach more students? Our platform offers you the tools and support you need to connect with learners from all over the world. By joining us, you'll have the opportunity to share your knowledge, inspire students, and be part of a vibrant community dedicated to making education accessible to everyone. We're committed to providing you with a seamless online experience, so you can focus on what you do best—teaching. Join us today and be a part of the future of education!`} img={`https://i.ibb.co/1rTrFZr/person-holding-light-bulb-with-graduation-cap.jpg`}></JoinSection>
        <Section2></Section2>
        <Section3></Section3>        
        <Review></Review>
              <JoinSection title={'Your Journey Begins'} desc={'we believe in the power of education to transform lives. Our platform is designed to bridge the gap between teachers and students, creating a space where learning knows no boundaries.'} img={'https://i.ibb.co/syrBhRf/graduation-cap-with-globe-digital-art-style-education-day.jpg'}></JoinSection>
        <Faq></Faq>
        
        

    </div>
);

export default Home;