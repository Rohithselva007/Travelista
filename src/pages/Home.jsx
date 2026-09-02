import Destinations from '../components/Destinations/PopularDestinations'
import FlightSearch from "../components/FlightSearch/FlightSearch";
import AffordablePackages from "../components/AffordablePackages/AffordablePackages";
import OtherIssues from "../components/OtherIssues/OtherIssues";
import Testimonials from "../components/Testimonials/Testimonials";
import CustomPackage from "../components/CustomPackage/CustomPackage";
import BlogSection from "../components/BlogSection/BlogSection";
import HeroSection from "../components/HeroSection/HeroSection";


const Home = () => {
    return (
        <>
            
            <FlightSearch />
            <HeroSection/>
            <Destinations />
            <AffordablePackages />
            <OtherIssues />
            <Testimonials />
            <CustomPackage />
            <BlogSection limit={3} showControls={false} title="From Our Blog" />
        </>
    );
};

export default Home;