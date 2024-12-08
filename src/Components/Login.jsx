import { Link, NavLink, useLocation, useNavigate } from "react-router";
import Navbar from "./MainLayout/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Swal } from "sweetalert2/dist/sweetalert2";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { loginUser, setUser, googleSignIn } = useContext(AuthContext)


    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value
        const passward = event.target.passward.value;
        console.log(email, passward);

        loginUser(email, passward)

            .then(result => {
                const user = result.user;
                setUser(user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login is Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')
                event.target.reset();
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div>
                    <div className="hero bg-green-300 mt-10 w-11/12 mx-auto rounded-full">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="card bg-base-100  shrink-0 shadow-2xl">
                                <form onSubmit={handleLogin} className="card-body">
                                    <h1 className="text-5xl font-bold p-5">Login Your Account now!</h1>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name="passward" className="input input-bordered" required />
                                        <label className="label">
                                            <NavLink to='/forget' href="#" className="label-text-alt link link-hover">Forgot password?</NavLink>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn  bg-green-300 font-bold text-xl">Login</button>
                                    </div>
                                </form>
                                <div>
                                    <p className="font-medium text-red-400 items-center flex justify-center p-5">Are you new here..?<Link to='/register' className="text-blue-600 hover:underline">  Register please!</Link></p>
                                    <span onClick={googleSignIn} className="btn btn-xs p-5 bg-green-600 mb-6 ml-10"> <FaGoogle />  Google Login</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;