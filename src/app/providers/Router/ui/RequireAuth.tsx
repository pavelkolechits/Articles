import { getUserInited } from "entities/User";
import { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";




export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(getUserInited);

    if (!auth) {
        return <Navigate to="/" replace />;
    }

    return children;
}