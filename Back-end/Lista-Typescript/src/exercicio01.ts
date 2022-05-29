
function returnData (name:string, date:string): string {
    const dat = date.split("/")

return `Olá me chamo ${name}, nasci no dia ${dat[0]} do mês de ${dat[1]} do ano de ${dat[2]}`
}



console.log(returnData("dori", "30/07/1991"))