function questão1(){
/*1) Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido.*/
    let n
    n = Number(prompt('Digite um numero inteiro(sem vírgula):'))
    alert('Os múltiplos de: ' + n + ' de 1 a 10 são:')
        for(let i=1; i <= 10; i++){
            let conta
            conta = n * i
            alert(`${n}X${i} = ${conta}`)
}
}

function questão2(){
/*2) Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes.*/

let senhaUm = prompt('Digite sua senha:')
let senhaDois = 0
let cont = 0
do {
    senhaDois = prompt('Agora repita a senha: ')
        cont++
    }while(senhaDois != senhaUm);
    alert(`Você acertou a senha em ${cont} tentativas.`)
}

function questão3(){
/*3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP. Faça um programa no qual o usuário possa escolher entre 3 tipos de ataque e um de defesa: 

A) Ataque Bomba -100HP
B) Ataque Granada -80HP
C) Ataque Arqueiro -40HP
D) Defesa Escudo +20HP*/

alert('>>>>TOWER DEFENSE<<<<\nChegou sua rodada')

let escolha = prompt('escolha entre:\nA) Ataque Bomba -100HP\nB) Ataque Granada -80HP\nC) Ataque Arqueiro -40HP\nD) Defesa Escudo +20HP').toUpperCase()
if (escolha == 'A'){
    alert('Você escolheu: Ataque Bomba: -100HP')
}

if (escolha == 'B'){
    alert('Você escolheu: Ataque Granada: -80HP')
}

if (escolha == 'C'){
    alert('Você escolheu: Ataque Arqueiro: -40HP')
}

if (escolha == 'D'){
    alert('Você escolheu: Defesa Escudo: +20HP ')
}
if (escolha != 'A' && escolha != 'B' && escolha != 'C' && escolha != 'D') {
    alert('Opção inválida')
}
}

function questão4(){
/*4) Você vai assistir a um filme no cinema e decide comprar algumas guloseimas antes de entrar para a sessão. O cinema oferece pipoca por 6 reais a unidade, chocolate por 3 reais a unidade e refrigerante por 8,50 reais a unidade. Faça um programa que pergunte quantos tipos de guloseimas você vai querer (1, 2 ou 3) e que após isso pergunte qual a guloseima e a quantidade (unidades). Ao final deve ser mostrado o valor total. (Exemplo: Digitei que quero 2 guloseimas, o programa me pergunta qual guloseima, eu digito “pipoca” e em seguida ele pergunta a quantidade, eu digito 2. Em seguida ele pergunta qual a segunda guloseima, eu digito refrigerante, quantidade 1. Nesse caso o total seria 2 x 6,00 + 1 x 8,50 = R$20,50.)*/

let total = somaUm + somaDois + somaTres
let guloseima = Number(prompt('Quantos tipos de guloseima você vai querer:\n 1)Pipoca R$6,00\n2)Chocolate R$3,00\n3)Refrigerante R$8,50'))

while (guloseima != 'não') {
    
    
}



}