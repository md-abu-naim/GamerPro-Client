import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/MainLayout/MainLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AllReview from "../Components/AllReview";
import AddReview from "../Components/AddReview";
import MyReview from "../Components/MyReview";
import GameWishList from "../Components/GameWishList";
import Error from "../Components/Error";
import Details from "../Components/Details";
import UpdateReview from "../Components/UpdateReview";
import HighRated from "../Components/HighRated";
import PrivateRouter from "../Components/PrivateRouter";
const Router = createBrowserRouter([
    
    {
        path: '/',
        element: <MainLayout></MainLayout>

    },
    {
        path: '/allreviews',
        element: <AllReview></AllReview>,
        loader: () => fetch('http://localhost:5000/reviews')
    },
    {
        path: '/high',
        element: <HighRated></HighRated>,
        loader: () => fetch('http://localhost:5000/high')
    },
    {
        path: '/details/:id',
        element: <PrivateRouter><Details></Details></PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
    },
    {
        path: '/updateReview/:id',
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
    },
    {
        path: '/addreview',
        element:<PrivateRouter><AddReview></AddReview></PrivateRouter>


    },
    {
        path: '/myreview',
        element: <PrivateRouter><MyReview></MyReview></PrivateRouter>,

    },
    {
        path: '/gamewishlist',
        element: <PrivateRouter><GameWishList></GameWishList></PrivateRouter>

    },
    {
        path: '/register',
        element: <Register></Register>

    },
    {
        path: '/login',
        element: <Login></Login>

    },
    {
        path: '*',
        element: <Error></Error>

    },
])

export default Router;