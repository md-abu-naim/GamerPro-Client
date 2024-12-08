import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Banner from "./Banner";
import FeaturedGames from "./FeaturedGames";
import HighRated from "../HighRated";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
                <HighRated></HighRated>
                <FeaturedGames></FeaturedGames>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default MainLayout;