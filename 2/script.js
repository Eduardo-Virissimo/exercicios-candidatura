let a = 0;
let x = 1;
let y = 0;

let pergunta = Number(prompt("Digite um número: "));

while (pergunta > y){
    y = a + x;
    a = x;
    x = y;
};

if (pergunta == 0 || pergunta == 1){
    console.log('O número digitado contém na sequência de Fibonacci')
}else if(pergunta == y){
    console.log('O número digitado contém na sequência de Fibonacci')
}else{
    console.log('O número digitado não faz parte da sequência Fibonacci')
};
