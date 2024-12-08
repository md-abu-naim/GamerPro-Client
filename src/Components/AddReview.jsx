
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import Navbar from "./MainLayout/Navbar";
import Swal from "sweetalert2";

const AddReview = () => {
    const { user } = useContext(AuthContext)


    const handleAddReview = e => {
        e.preventDefault();

        const gameCover = e.target.gameCover.value;
        const gameTitle = e.target.gameTitle.value;
        const reviewDescription = e.target.reviewDescription.value;
        const rating= e.target.rating.value;
        const publishingYear = e.target.publishingYear.value;
        const genre = e.target.genre.value;
        const userEmail = e.target.userEmail.value;
        const userName= e.target.userName.value;
  

         const newReview = { gameCover,gameTitle,reviewDescription,rating,publishingYear,genre,userEmail,userName}
         console.log(newReview)

        // send data to the server and database
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'review added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })

    }
 
    const genres = ["Action", "RPG", "Adventure", "Simulation", "Sports", "Puzzle"];

   

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen bg-gray-300 text-gray-200 flex items-center justify-center p-6">
                <div className="max-w-lg w-full bg-gray-100 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-center text-lime-800 mb-6">Add New Review</h2>
                    <form onSubmit={handleAddReview}>
                        <div className="form-control mb-4">
                            <label className="label text-gray-300">
                                <span className="label-text">Game Cover Image</span>
                            </label>
                            <input
                                type="photo url"
                                name="gameCover"
                              
                                placeholder="Enter image URL"
                                className="input input-bordered w-full bg-gray-700 text-gray-200"
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label text-gray-300">
                                <span className="label-text">Game Title/Name</span>
                            </label>
                            <input
                                type="text"
                                name="gameTitle"
                           
                                placeholder="game title"
                                className="input input-bordered w-full bg-gray-700 text-gray-200"
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label text-gray-300">
                                <span className="label-text">Review Description</span>
                            </label>
                            <textarea
                                name="reviewDescription"
                       
                                placeholder="Write your review here..."
                                className="textarea textarea-bordered w-full bg-gray-700 text-gray-200"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="form-control">
                                <label className="label text-gray-300">
                                    <span className="label-text">Rating (1-10)</span>
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                
                                    placeholder="Enter rating (1-10)"
                                    min="1"
                                    max="10"
                                    className="input input-bordered w-full bg-gray-700 text-gray-200"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label text-gray-300">
                                    <span className="label-text">Publishing Year</span>
                                </label>
                                <input
                                    type="number"
                                    name="publishingYear"
                                 
                                    placeholder="Enter year (e.g., 2024)"
                                    min="1900"
                                    max="2099"
                                    className="input input-bordered w-full bg-gray-700 text-gray-200"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label text-gray-300">
                                <span className="label-text">Genres</span>
                            </label>
                            <select
                                name="genre"
                            
                                className="select select-bordered w-full bg-gray-700 text-gray-200"
                                required
                            >
                                {genres.map((genre) => (
                                    <option key={genre} value={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label text-gray-300">
                                <span className="label-text">User Email</span>
                            </label>
                            <input
                                type="email"
                                name="userEmail"
                                 value={user?.email}
                            
                                readOnly
                                className="input input-bordered w-full bg-gray-700 text-gray-200"
                            />
                        </div>
                        <div className="form-control mb-6">
                            <label className="label text-gray-300">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                type="text"
                                name="userName"
                                value={user?.displayName}
                            
                                readOnly
                                className="input input-bordered w-full bg-gray-100 text-gray-200"
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-full">
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        
        </div>
    );
};

export default AddReview;