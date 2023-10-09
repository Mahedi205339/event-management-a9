import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation() ;
    console.log(location)
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className="w-full h-[80vh] flex justify-center items-center">
                <span className="loading  text-neutral loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;