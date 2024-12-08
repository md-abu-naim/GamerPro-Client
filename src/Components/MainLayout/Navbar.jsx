import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const { user, logOut} = useContext(AuthContext)

    const links = <>

        <li data-tooltip-id="my-tooltip" data-tooltip-content="Home"><NavLink to='/'>Home</NavLink></li>
        <li data-tooltip-id="my-tooltip" data-tooltip-content="All Reviews"><NavLink to='/allreviews'>All Reviews</NavLink></li>
        <li data-tooltip-id="my-tooltip" data-tooltip-content="Add Reviews"><NavLink to='/addreview'>Add Review</NavLink></li>
        <li data-tooltip-id="my-tooltip" data-tooltip-content="My Reviews"><NavLink to='/myreview'>My Reviews</NavLink></li>
        <li data-tooltip-id="my-tooltip" data-tooltip-content="My Game watchlist"><NavLink to='/gamewishlist'>Game WatchLis</NavLink></li>
        {
            <>
                {/* <li><NavLink to='/'> About Dev Profile</NavLink></li> */}

            </>

        }
    </>
    return (
        <div>
            <div className="navbar bg-emerald-700 border-green-500 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">PRO GAMER</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {user && user?.email ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between bg-black">
                                        {user.email}

                                    </a>
                                </li>

                                <li data-tooltip-id="my-tooltip" data-tooltip-content="Log Out">
                                    <button onClick={logOut} className="btn btn-neutral rounded-none">

                                        Log-Out
                                    </button>
                                </li>
                            </ul>
                        </div>



                    ) : (
                        <Link to="/login" data-tooltip-id="my-tooltip" data-tooltip-content="This login button" className="btn btn-neutral rounded-none">
                            Login
                        </Link>
                    )}
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;