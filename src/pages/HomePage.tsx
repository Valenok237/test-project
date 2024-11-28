import { FC } from "react";
import { Navigate } from "react-router-dom";
import Main from "../components/main/Main";

const HomePage:FC = () => {
    const email = JSON.parse(localStorage.getItem('email') || 'null');

    return !!email ? (
        <Main/>
    ) : (
        <Navigate to='/login' />
    )
}
export default HomePage;