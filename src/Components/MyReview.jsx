import { Link } from "react-router-dom";
import Navbar from "./MainLayout/Navbar";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch(`https://gamer-pro-server.vercel.app/myreview/${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                // delete from the database
                fetch(`http://localhost:5000/reviews/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.deletedCount);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingUsers = reviews.filter(user => user._id !== id);
                            setReviews(remainingUsers);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Genre </th>
                                <th>Rating</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews?.map(rev => <tr key={rev._id}>
                                    <th>1</th>
                                    <td>{rev.gameTitle}</td>
                                    <td>{rev.reviewDescription}</td>
                                    <td>{rev.genre}</td>
                                    <td>{rev.rating}</td>



                                    <td data-tooltip-id="my-tooltip" data-tooltip-content="If you update the review please click"><Link to={`/updatereview/${rev._id}`} className="btn btn-outline">Update</Link> </td>
                                    <td data-tooltip-id="my-tooltip" data-tooltip-content="If you delete the review please click"><button onClick={() => handleDelete(rev._id)} className="btn btn-outline">Delate</button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>


            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default MyReview;