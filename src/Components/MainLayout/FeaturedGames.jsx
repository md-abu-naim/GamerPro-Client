import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const FeaturedGames = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('https://gamer-pro-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setGames(data)
            })

    }, [])

    return (
        <div className="mt-24">
            <div className=" flex flex-col p-5 justify-center items-center">
                <h1 className="font-bold text-5xl">Featured  <Typewriter words={['Games', 'Reviews', 'Code', 'Repeat!']}
                    loop={5} /></h1>
                <p className="font-bold p-4">My hobbeis are play this games</p>
            </div>
            <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    games?.slice(0, 9).map(game => <div key={game._id} className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={game.gameCover}
                                alt={game.gameTitle || "Movie"}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">{game.gameTitle}</h2>
                            <p>{game.reviewDescription}</p>
                            <div className="flex justify-between items-center">
                                <p className="font-bold">Genre: <span className="font-normal">{game.genre}</span></p>
                                <p className="font-bold">Ratings: <span className="font-normal">{game.rating}</span></p>
                            </div>
                            <p className="font-bold text-center">Publishing year: <span className="font-normal">{game.publishingYear}</span></p>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedGames;