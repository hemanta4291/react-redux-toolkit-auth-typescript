import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


export default function PubicRoute({ children }:{ children: ReactNode }) {
    const isLoggedIn = useAuth();

    return !isLoggedIn ? <>{children}</> : <Navigate to="/dashboard" />;
}