import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";

const Home = () => {
    const allEvent = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Services events={allEvent}></Services>
        </div>
    );
};

export default Home;