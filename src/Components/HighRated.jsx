import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Typewriter } from 'react-simple-typewriter'


const HighRated = () => {
    const [rates, setRated] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/high')
            .then(res => res.json())
            .then(data => {
                setRated(data)
                setLoading(false)
            })

    }, [])


    return (
        <>

            {
                loading ? <div><span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span></div> : 
                <div>
            
                <div className='p-6 flex flex-col justify-center items-center text-center'>
    
                    <h1 className='font-bold text-4xl'>MOST HIGH RATER  <Typewriter words={['GAMES', 'Review', 'Code', 'Repeat!']}loop={5}></Typewriter></h1>
                    <p className='font-bold text-2xl p-3'>Explore our collection of the most highly-rated games that have captured the hearts of gamers worldwide. Dive in and discover your next favorite! </p>
    
                </div>
                <div className='grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
                                        <Link to={`/details/${rate._id}`} data-tooltip-id="my-tooltip" data-tooltip-content="Explore the review" className="btn btn-outline">Explore Details</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            }
             <Tooltip id="my-tooltip" />
        </>
    );
};

export default HighRated;