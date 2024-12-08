import { useLoaderData } from "react-router-dom";
import Navbar from "./MainLayout/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const detailsData = useLoaderData()
    const { user } = useContext(AuthContext)

    const handleAddToWatchList = (e) => {

        const gameCover = e.gameCover;
        const gameTitle = e.gameTitle;
        const reviewDescription = e.reviewDescription;
        const rating = e.rating;
        const publishingYear = e.publishingYear;
        const genre = e.genre;
        const email = e.userEmail;
        const name = e.userName;

        const userEmail = user.email;
        const userName = user.displayName;



        const addwachlist = { gameCover, gameTitle, reviewDescription, rating, publishingYear, genre, email, name, userEmail, userName }
        console.log(addwachlist)


        fetch('http://localhost:5000/wachlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addwachlist)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'review add to WatchList successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });

                }
            })


    }

    return (
        <div>
            <div>
                <Navbar></Navbar>


            </div>

            <div className="bg-base-100 shadow-xl rounded-lg mx-auto w-10/12 lg:w-8/12 my-6">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold p-2 text-purple-400">Details THE GAME</h1>

                </div>

                <div className="p-6 flex flex-col lg:flex-row lg:space-x-6">
                    <div className=" flex justify-center items-center">
                        <img className="rounded-lg border border-gray-300 shadow-sm w-full lg:max-w-sm max-h-64 object-cover"
                            src={detailsData.gameCover} alt="" />
                    </div>
                    <div className="flex flex-col justify-between space-y-4 mt-4 lg:mt-0">
                        <div>
                            <h1 className="text-3xl font-bold">{detailsData.gameTitle}</h1>

                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                            <p className="p-2 font-medium bg-gray-100 rounded-lg">publish:{detailsData.publishingYear}</p>
                            <p className="p-2 font-medium bg-gray-100 rounded-lg text-yellow-500"> Rating: {detailsData.rating}/5</p>
                            <p className="p-2 font-medium bg-gray-100 rounded-lg">  Genre:{detailsData.genre}</p>
                        </div>
                        <div>
                            <p className="p-4 bg-gray-50 font-bold rounded-lg shadow-sm">{detailsData.reviewDescription}</p>
                        </div>
                        <div className="flex justify-start">
                            <button onClick={() => handleAddToWatchList(detailsData)} className="btn btn-outline">Add to WatchList</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Details;