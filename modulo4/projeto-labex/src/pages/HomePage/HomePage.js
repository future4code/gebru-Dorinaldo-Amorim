import React from 'react'
import { goToListTripsPage, goToLoginPage } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom";
import { ButtonsContainer } from "./styled"

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>LabeX</h1>
            <ButtonsContainer>
                <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</button>
                <button onClick={() => goToLoginPage(navigate)}>Área de Admin</button>
            </ButtonsContainer>
        </>
    )
}

export default HomePage
