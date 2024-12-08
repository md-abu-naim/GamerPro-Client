import { useEffect, useState } from "react";

const UpcomingGames = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('/upcoming.json')
            .then(res => res.json())
            .then(data => {
                setGames(data)
            })

    }, [])

    console.log(games);
    return (
        <div className="mt-24">
            <div className="flex p-5 flex-col items-center justify-center text-center">
                <h3 className="text-5xl font-bold">Upcoming Games</h3>
                <p>Discover the latest upcoming games that are set to launch soon. Stay ahead of the curve with exciting releases, explore new genres, and get a glimpse of the adventures waiting for you.</p>
            </div>
            <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    games?.slice(0, 9).map(game => <div key={game._id} className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={game.coverImage}
                                alt={game.title || "Movie"}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">{game.title}</h2>
                            <p>{game.description}</p>
                            <p className="font-bold text-center">Release Date: <span className="font-normal">{game.releaseDate}</span></p>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default UpcomingGames;