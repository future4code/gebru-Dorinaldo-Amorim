import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ErrorPage from "../pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage />} />
                <Route path="about/:x" element={<AboutPage />} />
                <Route path="*" element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )

}