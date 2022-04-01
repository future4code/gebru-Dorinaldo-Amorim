
export const goToAboutPage = (navigate,x) => {
    navigate(`/about/${x}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToHomePage = (navigate) => {
    navigate("/")
}
