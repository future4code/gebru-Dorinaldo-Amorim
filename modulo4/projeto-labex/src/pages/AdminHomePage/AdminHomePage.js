import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useNavigate } from "react-router-dom";
import { goToCreateTripPage, goToHomePage } from '../../routes/coordinator'
import { logout } from '../../services/requests'
import { AdminHomeScreenContainer, ButtonsContainer } from "./styled"
import useRequestData from '../../hooks/useRequestData'
import AdminTripCard from "../../components/AdminTripCard/AdminTripCard"



const AdminHomePage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [tripsData, getTrips] = useRequestData("/trips", {})

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <AdminTripCard key={t.id} name={t.name} id={t.id} getTrips={getTrips} />
    })

    return (
        <AdminHomeScreenContainer>
            <h1>Painel Administrativo</h1>
            <ButtonsContainer>
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
                <button onClick={() => logout(navigate)}>Logout</button>
            </ButtonsContainer>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Caregando...</p>}
        </AdminHomeScreenContainer>
    )
}

export default AdminHomePage
