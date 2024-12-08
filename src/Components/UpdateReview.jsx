import Swal from "sweetalert2";
import Navbar from "./MainLayout/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const UpdateReview = () => {

    const update = useLoaderData();



    const { user } = useContext(AuthContext)
    const handleUpdate = e => {
        e.preventDefault();

        const gameCover = e.target.gameCover.value;
        const gameTitle = e.target.gameTitle.value;
        const reviewDescription = e.target.reviewDescription.value;
        const rating = e.target.rating.value;
        const publishingYear = e.target.publishingYear.value;
        const genre = e.target.genre.value;


        const updateReview = { gameCover, gameTitle, reviewDescription, rating, publishingYear, genre }

        // send data to the server and database
        fetch(`http://localhost:5000/updatereview/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'update added successfully',
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
                    <h2 className="text-2xl font-bold text-center text-lime-800 mb-6">Update the Review</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control mb-4">
                            <label className="label text-gray-300">
                                <span className="label-text">Game Cover Image</span>
                            </label>
                            <input
                                type="photo url"
                                name="gameCover"
                                defaultValue={update.gameCover}

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
                                defaultValue={update.gameTitle}

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
                                defaultValue={update.reviewDescription}
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
                                    defaultValue={update.rating}

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
                                    defaultValue={update.publishingYear}
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
                                defaultValue={update.genres}
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
                                className="input input-bordered w-full bg-gray-700 text-gray-200"
                            />
                        </div>
                        <button data-tooltip-id="my-tooltip" data-tooltip-content="Update the review" type="submit" className="btn btn-success w-full">
                            Update Review
                        </button>
                    </form>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default UpdateReview;