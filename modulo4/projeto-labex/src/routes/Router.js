import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage/HomePage'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailPage'

const Router = () => {
    return (
        <BrowserRouter>
           <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/trips/list" element={<ListTripsPage/>} />
                <Route path="/trips/application" element={<ApplicationFormPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/admin/trips/list" element={<AdminHomePage/>} />
                <Route path="/admin/trips/create" element={<CreateTripPage/>} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage/>} />
                <Route>
                    <div>Erro 404 - Página não encontrada</div>
                </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default Router