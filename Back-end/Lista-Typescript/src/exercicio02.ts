function returnType (parametro:any): string {
return `O parâmetro ${parametro} é um(a): `+ typeof  parametro 
}

console.log(returnType("dori"))
console.log(returnType(123))
console.log(returnType(true))