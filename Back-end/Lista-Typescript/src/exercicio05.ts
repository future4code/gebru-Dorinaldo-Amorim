type user ={
    name: string,
    email: string,
    role: string,

}



const userData: user[]= [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const selectUser = userData.filter(user => {
    return user.role === "admin"
})

const emailUser = selectUser.map(email => {
    return email.email
})  

console.log(emailUser)