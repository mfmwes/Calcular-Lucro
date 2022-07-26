// // Crie um programa que me diga como lucrar nesta situação: 
// quero vender uma bicicleta que 60% do seu valor é R$300, 
// por quanto devo vendê-la para lucrar 25%?

let valor_total = 500
let percent = 25 

function lucro(){
let valor_lucro = valor_total * percent/100
return valor_lucro + valor_total
}

console.log(lucro())