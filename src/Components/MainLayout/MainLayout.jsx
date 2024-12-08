import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Banner from "./Banner";
import FeaturedGames from "./FeaturedGames";
import HighRated from "../HighRated";
import UpcomingGames from "../UpcomingGames";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
                <HighRated></HighRated>
                <FeaturedGames></FeaturedGames>
                <Outlet></Outlet>
                <UpcomingGames />
                <Footer></Footer>

            </div>
        </div>
    );
};

export default MainLayout;