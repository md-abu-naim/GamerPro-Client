import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HighRated = () => {
    const [rates, setRated] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/high')
            .then(res => res.json())
            .then(data => setRated(data))

    }, [])

    return (
        <div>
            <div className='p-6 flex flex-col justify-center items-center'>

                <h1 className='font-bold text-4xl'>MOST HIGH RATER GAMES</h1>
                <p className='font-bold text-2xl p-3'>Explore our collection of the most highly-rated games that have captured the hearts of gamers worldwide. Dive in and discover your next favorite! </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    rates.map(rate =>
                        <div key={rate._id} className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={rate.gameCover}
                                    alt={rate.gameTitle || "Movie"}
                                    className="w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{rate.gameTitle}</h2>
                                <p>{rate.reviewDescription}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/details/${rate._id}`} className="btn btn-outline">Explore Details</Link>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default HighRated;