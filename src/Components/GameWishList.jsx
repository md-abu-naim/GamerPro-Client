import { useContext, useEffect, useState } from "react";
import Navbar from "./MainLayout/Navbar";
import { AuthContext } from "../Provider/AuthProvider";

const GameWishList = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/GameWatchlist/${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])
    console.log(reviews);
    return (
        <div>
        <div>
            <Navbar></Navbar>
        </div>
        <div className="p-5">
           <div className="flex flex-col items-center justify-center">
           <h1 className="text-4xl font-bold p-4">MORE Watchlist GAMES</h1>
           <p className="font-black p-2 mb-5">There are many most popular games in my life</p>

           </div>
            <div className="overflow-x-auto">
                <table className="table p-5">
                    {/* head */}
                    <thead>
                    <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left text-xl">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Favorite Genre</th>
        </tr>
                    </thead>
                    <tbody>
        {
            reviews?.map((rev, index) => (
                <tr 
                    key={rev._id} 
                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                >
                    <th className="border border-gray-300 px-4 py-2">{index + 1}</th>
                    <td className="border border-gray-300 font-bold px-4 py-2">{rev.gameTitle}</td>
                    <td className="border border-gray-300  px-4 py-2">{rev.reviewDescription}</td>
                    <td className="border border-gray-300 px-4 py-2">{rev.genre}</td>
                </tr>
            ))
        }
    </tbody>
</table>
            </div>


        </div>

    </div>
    );
};

export default GameWishList;