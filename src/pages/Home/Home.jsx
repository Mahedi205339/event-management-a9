import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import SwipeMessage from "../../components/SwipeMessage/SwipeMessage";
import StaffSwipe from "../../components/StaffSwipe/StaffSwipe";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
    const allEvent = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Services events={allEvent}></Services>
            <div className="my-10">
            <SwipeMessage></SwipeMessage>
            </div>
            <StaffSwipe></StaffSwipe>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;