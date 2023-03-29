let sp = 67.83643;
let rj = 36.67866;
let mg = 29.22988;
let es = 27.16548;
let out = 19.84953;

let total = sp + rj + mg + es + out;

porcentagemSp = ((sp/total)*100);
porcentagemRj = ((rj/total)*100);
porcentagemMg = ((mg/total)*100);
porcentagemEs = ((es/total)*100);
porcentagemOut = ((out/total)*100);

console.log(total)
alert(`Faturamento mensal: R$${parseFloat(total).toFixed(3)}\nPorcentagem de São Paulo: ${parseFloat(porcentagemSp).toFixed(2)}%\nPorcentagem do Rio de Janeiro: ${parseFloat(porcentagemRj).toFixed(2)}%\nPorcentagem de Minas Gerais: ${parseFloat(porcentagemMg).toFixed(2)}%\nPorcentagem de Espírito Santo: ${parseFloat(porcentagemEs).toFixed(2)}%\nPorcentagem de outros: ${parseFloat(porcentagemOut).toFixed(2)}%`);