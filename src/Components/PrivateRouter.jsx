import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-bars loading-lg flex"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

PrivateRouter.propTypes ={
    children: PropTypes.node.isRequired
}

export default PrivateRouter;