//1
function exercicio1() {
    for (let i=1; i <=10; i++){
        alert(i)
    }
}

//2
function exercicio2() {
    let numero = prompt("Digite um número:");
    numero = parseInt(numero)

    for(let i = 0; i <= numero; i ++){
        if(i % 2 == 0){
            alert(i);
        }
    }
}

//3
function exercicio3() {
    let numero = prompt("Digite um numero:")
    numero = parseInt(numero);
    primo = true;
    for(let i= 2; i < numero; i++ ){
        if(numero % i == 0){
            primo = false;
        }
    }
    if(primo){
        alert('primo')
    }else{
        alert('não é primo')
    }
}

//4
function exercicio4() {
    let numero = prompt('Digite um numero:')
    numero = parseInt(numero)
    let tabuada = numero;

    for( i = 1; i <=10; i++){
        console.log(numero, "x", i, "=", tabuada * i)
    }
}

//5
function exercicio5() {
    let numero = prompt('digite o numero');
    numero = parseInt(numero);
    let i = 0;
    while(i <= numero){
        if(i % 2 != 0){
            alert(i)
        }
        i++
    }

}

//6
function exercicio6() {
    let numero = prompt('Digite um numero:')
    numero = parseInt(numero)
    let soma = 0

    let i = 0
    while(i <= numero){
        if(i % 2 ==0){
            soma = soma + i
        }
        i++
    }
    alert(soma)
}

//7
function exercicio7() {
    let i = 10
    while(i >= 0){
        if(i >= 0){
            alert(i)
        }
        i--;
    }
}

//8
function exercicio8() {
    let palavra = prompt("Digite uma palavra")
    let inversa = ''
    for(let i = 1; i <= palavra.length; i++){
        inversa = inversa + palavra.charAt(palavra.length - i)
    }
    if(palavra == inversa){
        console.log("É palindromo")
    } else{
        console.log("Não é polindromo")
    }
}

//9
function exercicio9() {

    let numero = 100;
    let soma =0;

    for(let i = 1; i <= 100; i++){
        soma = soma + i

    }
    alert(soma);
}

//10
function exercicio10() {

    let numero = parseInt(prompt("Digite um numero (Zero Para Sair);"))
    let soma = 0
    let cont = 0 
    let media = 0
    while(numero != 0){
        soma = soma  + numero
        cont = cont + 1
    }
    console.log(cont)
   
}

//11
function exercicio11() {
        for (let i = 0; i < 100; i++) {
            if(i % 3 ==0) {
                alert(i);
            }
        }
}

//12
function exercicio12() {
    let digito = prompt("Digite seu numero")
    let soma = 0

for(let i = 0; i < digito.length; i++){
    soma = soma + parseInt(digito[i])
}
console.log(soma)
}

//13
function exercicio13() {

    let numero1 = prompt("Primeiro Número")
    let numero2 = prompt("Segundo Número")
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)

    for(let i = numero1; i <= numero2; i++){
        if(verificarprimo(i)){
            alert(i, "é primo")

        }
    }   
}

function verificarprimo(num1) {
    num1 = parseInt(num1)
    for(let i = 1; i < num1; i++){

        if((num1 % 2 != 0) || (num1 == 2)){
            return true
        }else {
            return false
        }
    }
}
//14

function exercicio14() {
   
}








//16
function exercicio16() {
    let r = parseFloat(prompt("Valor do raio:"))
    let a = 2 * 3.14159 * r
    alert("A área do cirulo é:" + a)
}

//17
function exercicio17() {
    let ang = prompt("Digite um ângulo de 30, 45 ou 60\n");
    let lado1 = prompt("Digite uma medida de lado\n");
    let lado2 = prompt("Digite uma segunda medida\n");
    lado1 = parseInt(lado1);
    lado2 = parseInt(lado2);
    ang = parseInt(ang);
    let angfinal = 0;
    if (ang == 30) {
        angfinal = 0.5;
    } else if (ang == 45) {
        angfinal = 0.7;
    } else if (ang == 60) {
        angfinal = 0.86;
    }
    let area = 0.5 * angfinal * lado1 * lado2;
    alert("a área é:" + area);
}

//18
function exercicio18() {
    let base = prompt("Digite a medida da base\n");
    let altura = prompt("Digite a medida da altura\n");
    let basemenor = prompt("Digite a medida da base menor\n");
    base = parseInt(base);
    altura = parseInt(altura);
    basemenor = parseInt(basemenor);
    let area = (base + basemenor) * altura;
    alert(area);

}
//19
function exercicio19() {
    let letra = prompt("Digite uma letra\n");
    letra = letra.toLowerCase();
    let frase = prompt("Digite uma frase\n");
    frase = frase.toLowerCase();
    let nm = frase.match(new RegExp(frase, "gi"));
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == letra) {
            frase = frase.replace(frase[i], '*');
        }

    }
    alert(frase);
}

//20
function exercicio20() {
    let pal = '';
    let frase = prompt("Digite uma frase\n");
    let vetor = frase.split(" ");
    vetor.reverse();
    pal += vetor;
    alert(pal);
    alert(vetor);
    alert(vetor);
}

//21
function exercicio21() {
    let frase = prompt("Digite uma frase\n");
    let nw = frase.replace(/ /gi, '');
    let contem = nw.includes(' ');
    while (contem == true) {
        if (contem == true) {
            let nw = frase.replace(' ', '');
        }

    }
    alert(nw);
}