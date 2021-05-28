const sobreMim = {

    Nome: "Leonam",
    
    idade: 18,
    
    time: "Flamengo"
}

sobreMim.gostoDe = "Futebol"

delete sobreMim.idade

console.log(sobreMim)


const cadastro = [
    {
        nome: "Kethellen",
        idade: 23,
        telefone: 40028922,
        amigos: ["Miguel", "Gustavo", "Yasmim" , "Duda"]
    }, 
    {
        nome: "Miguel",
        idade: 25,
        telefone: 40028922,
        amigos: ["Yasmim", "Duda", "Gustavo" , "Kethellen"]
    }, 
    {
        nome: "Duda",
        idade: 22,
        telefone: 40028922,
        amigos: ["Gustavo", "Yasmim", "Kethellen", "Miguel"]
    }, 
    {
        nome: "Yasmim",
        idade: 36,
        telefone: 40028922,
        amigos: ["Kethellen", "Miguel", "Gustavo", "Duda",]
    }, 
    {
        nome: "Gustavo",
        idade: 27,
        telefone: 40028922,
        amigos: ["Duda", "Kethellen", "Miguel", "Yasmim",]
    }
]


console.log(cadastro[0].amigos[3])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[3])



