import { useLoaderData } from "react-router-dom";
import Navbar from "./MainLayout/Navbar";

const AllReview = () => {
    const allReviews = useLoaderData()
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 ">
            {
                allReviews.length === 0 ? <p>NO REVIEW FOUND</p> : allReviews.map(review => 
                
                <div key={review._id} className="card bg-base-100 w-96 mt-6 shadow-xl border space-y-4">
                     <figure className="px-10 pt-10">
                            <img
                                src={review.gameCover}
                                alt=""
                                className="rounded-xl" />
                        </figure>
                    <div className="card-body items-center text-center">
                      <h3 className="text-xl font-semibold text-gray-800">{review.gameTitle}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Genres:</span>{review.genre}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Publishing year:</span>{review.publishingYear}
                      </p>
                    <div className="card-actions">
                  
                    </div>
                     
                    </div>
                  </div> )
            }
          </div>
        </div>
    );
};

export default AllReview;