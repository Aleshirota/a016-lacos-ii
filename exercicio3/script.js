//Crie um array com 5 strings. Faça um programa que percorra 
//este array e imprima as strings em formato de ranking,
 //como no exemplo abaixo:

//Utilize o for...of para resolver

//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// com for off precisa criar uma váriavel
    for(let i in maioresPaises){

     //console.log (`ranking ${i} é ${maioresPaises[i]}`)
     //console.log (`ranking é ${maioresPaises[i]} ${i}`)
      console.log (`O ranking é ${Number(i)+1}º ${maioresPaises[i]} `)

    }
   

//saída
//"1 - Rússia"
//"2 - Canadá"
//"3 - China"
//"4 - EUA"
//"5 - Brasil"



