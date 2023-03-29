let valores = [22174.1664, 24537.6698, 26139.6134, 0.0, 0.0, 26742.6612, 0.0, 42889.2258, 46251.174, 11191.4722, 0.0, 0.0, 3847.4823, 373.7838, 2659.7563, 48924.2448, 18419.2614, 0.0, 0.0, 35240.1826, 43829.1667, 18235.6852, 4355.0662, 13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 8414.61];
let soma = 0;
let media = 0;
let dias = [];

var max = valores.reduce(function(a, b) {
  return Math.max(a, b);
}, -Infinity);

var min = valores.reduce(function(a, b) {
  return Math.min(a, b);
});
//console.log(valores);

newValores = valores.filter(item => item != 0.0);
//console.log(newValores);

for (let i = 0; i < newValores.length; i++) {
    soma += newValores[i];
}

media = soma / newValores.length;
//console.log(media);

for (let i = 0; i < newValores.length; i++){
    if(newValores[i] >= media){
        dias.push(newValores[i]);
    }
}
//console.log(dias);

alert(`O maior valor do vetor é: ${max}\nO menor valor do vetor é: ${min}\nFaturamento diário foi superior à média mensal durante: ${dias.length} dias!`);