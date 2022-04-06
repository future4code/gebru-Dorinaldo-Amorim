
export const goToAboutPage = (navigate,x) => {
    navigate(`/about/${x}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToTripDetails = (navigate) => {
    navigate("/tripDetails");
  };
  
  export const goToLogin = (navigate) => {
    navigate("/login");
  };
  