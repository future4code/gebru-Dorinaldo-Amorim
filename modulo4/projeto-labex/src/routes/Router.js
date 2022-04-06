import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ErrorPage from "../pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { TripDetailsPage } from "../pages/TripDetails/TripDetailsPage";

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage />} />
                <Route path="about/:x" element={<AboutPage />} />
                <Route path="login" element={LoginPage}/>
                <Route path="tripDetails" element={TripDetailsPage}/>
                <Route path="*" element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )

}