/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();

    if (loading) {
        return <span className="loading loading-spinner text-error loading-lg flex justify-center items-center mx-auto my-10"></span>
    }

    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRoute;