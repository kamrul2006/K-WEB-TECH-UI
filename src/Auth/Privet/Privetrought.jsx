import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import CustomLoader from "../../OtherComponents/CustomLoader";

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()


    if (loading) {
        return (<div>
            <CustomLoader />
        </div>)
    }

    if (user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to={'/b'}></Navigate>
    );
};

export default PrivetRout;