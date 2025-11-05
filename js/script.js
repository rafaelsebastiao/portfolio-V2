const QTDMODULOS = 9
const body = window.document.getElementsByTagName("body")[0]
const stars = 400;
const music = document.getElementById("music");
const overlay = document.getElementById("startOverlay");
const startBtn = document.getElementById("startBtn");

const notice = document.querySelector(".notice");


const menuPortfolio = window.document.querySelector("#menu-portfolio")
const linksImages = []


const btnsVoltar = document.querySelectorAll("button.btnRetorno");

const modulos = []

const linkCSS = window.document.getElementById("link-css")

const imgLink = window.document.querySelector(".img-link")


let introIsIskipped = false



const btnExercises = [[], [], [], [], [], [], [], [], []]
const numExercisesPerModule = []

numExercisesPerModule.push(1)
numExercisesPerModule.push(4)
numExercisesPerModule.push(7)
numExercisesPerModule.push(9)
numExercisesPerModule.push(4)
numExercisesPerModule.push(16)
numExercisesPerModule.push(1)
numExercisesPerModule.push(5)
numExercisesPerModule.push(2)

for(let i = 0; i < QTDMODULOS; i++){
    for(let j = 0; j < numExercisesPerModule[i]; j++){
        console.log(`button#exercicio${i+1}-${j+1}`)
        btnExercises[i].push(window.document.querySelector(`button#exercicio${i+1}-${j+1}`))
    }
}



function setExercises(){
    for(let i = 0; i < QTDMODULOS; i++){
        for(let j = 0; j < numExercisesPerModule[i]; j++){
            // console.log(`Número de módulos: ${btnExercises.length}\nNúmero de exercicios:${numExercisesPerModule[i]}`)
            console.log(`Verificando: Módulo ${i+1}, Exercício ${j+1}`, btnExercises[i][j])
            btnExercises[i][j].addEventListener("click", ()=>{play(i+1, j+1)})
        }
    }
}

//troca de CSS
function turnCSS(){
    linkCSS.href = (linkCSS.href.includes('style.css')) ? 'style2.css' : 'style.css';

}


function returnMenu() {
    menuPortfolio.style.display = "block";
    turnCSS()
    disaplyModuleImage();
    desapearModules();
    createStars();
}


btnsVoltar.forEach(btn => btn.addEventListener("click", returnMenu));



function play(modulo, exercicio){
    switch(modulo){
        case 1:
            switch(exercicio){
                case 1:
                    let figmaImages = window.document.getElementById("figma-images")

                    btnExercises[modulo-1][exercicio-1].innerText = btnExercises[modulo-1][exercicio-1].innerText == "Play" ? "Stop" : "Play"
                    
                     if(btnExercises[modulo-1][exercicio-1].innerText == "Play"){
                        figmaImages.style.display="none";
                    }else{
                        figmaImages.style.display="block";
                    }
                break;



            }

        break;

        case 2:
            switch(exercicio){
                case 1:
                    let usuario = prompt('Digite seu nome: ')
                    alert(`Olá, ${usuario}!`)
                break;
                
                case 2:
                    let materiaFavorita = prompt('Informe sua matéria favorita: ')
                    alert(`A matéria ${materiaFavorita} realmente é ótima!`)
                break;

                case 3:
                    dataAtual = window.prompt('Informe a data de hoje: ')
                    alert(dataAtual)
                break;

                case 4:
                    let respUsuario = window.prompt('Está preparado para o segundo semestre de desenvolvimento de sistemas [S/N]? ')
                    respUsuario = respUsuario.toUpperCase()
                    window.alert(respUsuario == 'S' ? 'Boa garoto 😎!' : 'Já pode trancar o curso 😛')
                break;



            }
        break;
        case 3:
            switch(exercicio){
                case 1:
                    //Peça ao usuario para inserir dois numeros. Calcule e exiba o resultado das quatro operações aritiméticas básicas(soma, subtração, multiplicação e divisão) entre esses dois números

                    let num1 = Number(window.prompt("Digite o primeiro número: "))
                    let num2 = Number(window.prompt("Digite o segundo número: "))

                    soma = num1 + num2
                    subtracao = num1 - num2
                    multiplicacao = num1 * num2
                    divisao = num1 / num2


                    alert(`${num1} + ${num2} = ${soma}\n${num1} - ${num2} =${subtracao}\n${num1} * ${num2} = ${multiplicacao}\n${num1} / ${num2} =${divisao}\n`)
                break;

                case 2:
                    // Crie um programa que solicite ao usuario as notas de 3 provas. Calcule e exiba a media aritimética dessas notas.

                    let nota1 = Number(window.prompt('Digite a primeira nota: ') )
                    let nota2 = Number(window.prompt('Digite a segunda nota: ') )
                    let nota3 = Number(window.prompt('Digite a terceira nota: ') )

                    media = (nota1 + nota2  + nota3) / 3
                    alert(`A média das notas vale: ${media}`)
                break;


                case 3:
                    //Crie um programa que pergunte a largura e altura de um parede. Sabendo que 1 litro de tinta pinta 2 metros quadrados, calcule e exiba quantos litros de tinta serão necessários para pintar a parede.

                    let largura = Number(prompt("Digite a largura da parede: "))
                    let altura = Number(prompt("Digite a altura da parede: "))

                    let quantLitros = largura * altura / 2

                    alert(`Para pintar a parede, que possui uma área de ${largura*altura}m², serão necessários ${quantLitros}L de tinta!`)
                break;

                case 4:
                     //calcule a diferença entre 2 números.​
                    {
                        let n1 = Number(window.prompt('Digite um número: '))
                        let n2 = Number(window.prompt('Digite outro número: '))

                        window.alert(`${n1} - ${n2} vale: ${n1-n2}`)
                    }
                   

                    
                break;

                case 5:
                    //Solicite 2 notas, e veja se o 1 é múltiplo do segundo. (ex. 9 é múltiplo de 3)​
                    {
                    let n1 = Number(window.prompt("Digite o primeiro número: ") )
                    n2 = Number(window.prompt("Digite o segundo número: ") )

                    window.alert(n1 % n2 == 0 ? `${n1} é múltiplo de ${n2}` : `${n1} não é múltiplo de ${n2}`)
                    
                }
                    
                break;

                case 6:
                    //Converta uma temperatura em celsius para Fahrenheit (ºc*9/5)+32 ​

                    let tempCelsius = Number(window.prompt("Digite a temperatura em celsius: "))

                    let tempFarenheit = (tempCelsius*9/5) + 32

                    window.alert(`A temperatura ${tempCelsius}° C em Fahrenheit vale: ${tempFarenheit}° F`)
                break;

                case 7:
                    //Calcule a área (base * altura).​

                    {
                        
                    //Calcule a área (base * altura).​

                    let base = Number(window.prompt("Informe o valor da base: "))   
                    let altura = Number(window.prompt("Informe o valor da altura: "))

                    let area = base * altura

                    window.alert(`O valor da área é: ${area}m²`)
                    }
                break;


                   
            }
        break;


        case 4:
            switch(exercicio){
                case 1:
                    //Peça a idade do usuário e verifique se ele é maior de idade (18 anos ou mais). Exiba uma mensagem informando "Maior de idade" ou "Menor de idade".​

                    let idade = parseInt(prompt("Informe sua idade: ") )
                    alert(idade >= 18 ? "Maior de idade" : "Menor de idade")
                break;

                case 2:
                    // Solicite um número inteiro ao usuário. Crie uma estrutura condicional que verifique se o número é par ou ímpar e exiba o resultado
                    let num = parseInt(prompt("Digite um número: "))
                    alert(num % 2 == 0 ? "O número é par!" : "O número é ímpar!")
                break;

                case 3:
                    //Peça ao usuário para digitar dois números. O programa deve comparar os números e informar qual deles é maior, ou se são iguais.
                    let num1 = parseInt(prompt("Digite um número: "))
                    let num2 = parseInt(prompt("Digite outro número: "))

                    if (num1 > num2){
                        alert(`${num1} é maior que ${num2}!`)
                    }else if(num1 < num2){
                        alert(`${num2} é maior que ${num1}!`)
                    }else{
                        alert(`Os números são iguais!`)
                    }
                break;

                case 4:
                    // Defina uma senha em uma variável. Peça ao usuário para digitar uma senha e verifique se a senha digitada é igual à senha armazenada. Exiba "Acesso permitido" ou "Acesso negado". (Use o operador de comparação estrita ===).​

                    const SENHA = "12345"
                    let senha = window.prompt("Informe a senha: ")
                    window.alert(senha === SENHA ? "Acesso permitido!" : "Acesso negado!")
                break;

                case 5:
                    /*
                    Peça ao usuário para inserir a temperatura atual em graus Celsius. O programa deve exibir:​

                    "Frio" se a temperatura for menor que 18°C.​

                    "Agradável" se estiver entre 18°C e 25°C.​

                    "Quente" se for maior que 25°C.*/

                    let tempCelsius = Number(window.prompt("Digite a temperatura em graus celcius: "))
                    window.alert(tempCelsius < 18 ? "Frio" : tempCelsius >= 18 && tempCelsius <= 25? "Agradável" : "Quente")
                break;

                case 6:
                    /*
                    Solicite duas notas ao usuário e informe se está acima da média, e se é uma nota par, e mostre o
                    resultado ao usuário.
                    */

                    let n1 = Number(window.prompt("Digite a primeira nota: ") )
                    let n2 = Number(window.prompt("Digite a segunda nota: ") )
                    
                    const MEDIA = 6

                    let mediaUsuario = (n1 + n2) / 2
                    
                    alert(`Média: ${MEDIA}\nMédia calculada: ${mediaUsuario}\n${mediaUsuario > MEDIA ? "Está acima da média!" : mediaUsuario < MEDIA ? "Está abaixo da média!" : "Está na média!"}\n${mediaUsuario % 2 ? "A média calculada é ímpar!" : "A média calculada é par!"}`)
                break;

                case 7:
                    /* Solicite o peso e a altura de uma pessoa e calcule o IMC( peso/altura²). Apresente o resultado ao
                    usuário.*/

                    let weigth = Number(window.prompt("Informe o peso: "))
                    let height = Number(window.prompt("Informe a altura: "))

                    let imc = weigth/height**2

                    alert(`IMC: ${imc}`)

                break;

                case 8:
                    let year = Number(window.prompt("Informe um ano: "))

                break;

                case 9:

                    function convertCurrency(value, currency, currencyConvertion){
                        let currencySymbol = currency == 'E' ? '€' : currency == 'D' ? "$" : "R$"

                        let currencyEuro = '€'
                        let currencyDolar = '$'
                        let currencyReal = 'R$'



                         switch(currency){
                            case "E":
                                return(currencyConvertion == "D" ? `${currencyDolar} ${(value * 1.15).toFixed(2)}` : `${currencyReal} ${(value * 6.19).toFixed(2)}`) 
                            break;

                            case "D":
                                return(currencyConvertion == "E" ? `${(value * 0.87).toFixed(2)} ${currencyEuro}` : `${currencyReal} ${(value * 5.38).toFixed(2)}`) 
                            break;

                            case "R":
                                return(currencyConvertion == "E" ? `${(value * 0.16).toFixed(2)} ${currencyEuro}` : `${currencyDolar} ${(value * 0.19).toFixed(2)}`)
                            break;
                         }
                    }


                    let currency = window.prompt("Informe uma moeda (E-Euro D-Dólar R-Real): ").toUpperCase()
                    let value = Number(window.prompt("Informe o valor: ") ).toFixed(2)

                    let currencySymbol = currency == 'E' ? '€' : currency == 'D' ? "$" : "R$"

                    let valueFormatted =   `${currencySymbol == '€' ? `${value} ${currencySymbol}` : `${currencySymbol} ${value}`}`
                    
                    let inicialMessage = `Valor selecionado: ${valueFormatted}\n`
                    
                    let messagesConversion


                    // alert(inicialMessage)
                    switch(currency){
                        case 'E':
                            messagesConversion = `${valueFormatted} em dólares vale: ${convertCurrency(value, currency, "D")}\n`
                            messagesConversion += `${valueFormatted} em reais vale: ${convertCurrency(value, currency, "R")}`
                        break;

                        case 'D':
                            messagesConversion = `${valueFormatted} em euros vale: ${convertCurrency(value, currency, "E")}\n`
                            messagesConversion += `${valueFormatted} em reais vale: ${convertCurrency(value, currency, "R")}`
                        break;

                        case 'R':
                            messagesConversion = `${valueFormatted} em euros vale: ${convertCurrency(value, currency, "E")}\n`
                            messagesConversion += (`${valueFormatted} em dólares vale: ${convertCurrency(value, currency, "D")}`)
                        break;

                    }

                    alert(inicialMessage + messagesConversion)
                break;

                
            }

        break;



        case 5:
            switch(exercicio){
                case 1:
                    let numSorteado = Number.parseInt(Math.random() * 100 ) + 1

                    let numTentado=0, tentativas=0
                    let totalTentivas = 5
                    
                    while (numSorteado != numTentado && totalTentivas > 0){
                        numTentado = window.prompt(`\nTentativas restantes: ${totalTentivas}\nDigite um número de 1 a 100: `)
                        tentativas += 1
                        totalTentivas -= 1
                    
                        if(totalTentivas > 0){
                            if (numSorteado > numTentado ){
                                window.alert("O número sorteado é maior!")
                            }else if(numSorteado < numTentado){
                                window.alert("O número sorteado é menor!")
                            }else{
                                window.alert(`Parabéns! Você acertou o número em um total de ${tentativas} tentativas!`)
                            }
                        }else{
                            window.alert(`Tentativas encerradas!\nO número sorteado era: ${numSorteado}`)
                        }
                     
                    }
                    


                break;

                case 2:
                    //Pedir um número ao usuário de 1 a 9, e imprima a tabuada desse valor.​
                    let numUsuario = window.prompt("Digite um número de 1 a 9: ")
                    let exibicaoTabuada = ""

                    for(let i = 1; i <= 10; i++){
                        exibicaoTabuada += `${numUsuario} x ${i} = ${numUsuario * i}\n`
                    }

                    window.alert(exibicaoTabuada)
                break;


                case 3:
                    /*Neste exercício, você vai simular um jogo de "Pedra, papel e tesoura" contra o computador. Para simplificar, vamos supor que a escolha do usuário é sempre "pedra". ​*/

                    let opcoesJogo = ["pedra", "papel", "tesoura"]
                    let opcaoUsuario, indiceSorteado, opcaoSorteada, msgResultJogo, resp


                    do {
                        opcaoUsuario = window.prompt("Pedra, papel ou tesoura? ")
                        opcaoUsuario = opcaoUsuario.toLowerCase()

                         indiceSorteado = Number.parseInt(Math.random() * 3)
                        opcaoSorteada = opcoesJogo[indiceSorteado]

                        msgResultJogo = `${opcaoUsuario} X ${opcaoSorteada}\n`

                        if (opcaoUsuario == "pedra" && opcaoSorteada == "papel") {
                            msgResultJogo += `${opcaoSorteada} ganha de ${opcaoUsuario}!\nVocê perdeu!`

                        } else if (opcaoUsuario == "pedra" && opcaoSorteada == "tesoura") {

                            msgResultJogo += `${opcaoUsuario} ganha de ${opcaoSorteada}!\nVocê ganhou!`

                        } else if (opcaoUsuario == "papel" && opcaoSorteada == "tesoura") {

                            msgResultJogo += `${opcaoSorteada} ganha de ${opcaoUsuario}!\nVocê perdeu!`

                        } else if (opcaoUsuario == "papel" && opcaoSorteada == "pedra") {

                            msgResultJogo += `${opcaoUsuario} ganha de ${opcaoSorteada}!\nVocê ganhou!`

                    } else if (opcaoUsuario == "tesoura" && opcaoSorteada == "pedra") {

                            msgResultJogo += `${opcaoSorteada} ganha de ${opcaoUsuario}!\nVocê perdeu!`

                    } else if (opcaoUsuario == "tesoura" && opcaoSorteada == "papel") {

                            msgResultJogo += `${opcaoUsuario} ganha de ${opcaoSorteada}!\nVocê ganhou!`

                    } else {
                            msgResultJogo += "Houve empate!"
                    }

                     window.alert(msgResultJogo)

                    resp = window.confirm("Deseja continuar?")

                } while (resp)

                break;


                case 4:
                    //Neste exercício, você precisa criar um programa que calcula o fatorial de um número. O fatorial de um número é o produto de todos os números inteiros positivos de 1 até o número. Por exemplo, o fatorial de 5 (representado por 5!) é 1 * 2 * 3 * 4 * 5 = 120. ​
                    const fatorial = (n) => {return (n == 1 ? 1 : n * fatorial(n-1) ) }

                    let num = Number.parseInt(window.prompt("Digite um número: ") )
                    window.alert(`${num}! = ${fatorial(num)}`)
                break;
            }

        break;


        case 6:
            switch(exercicio){

                case 1:
                    //calculadora
                break;
                case 2:
                    let age = window.prompt("Informe sua idade: ")

                    const verififyDriverLicense = (age) => age >= 18 ? "Você pode tirar a carteira de motorista!" : "Você não pode tirar a carteira de motorista!" 

                    alert(verififyDriverLicense(age))
                break;

                case 3:
                    let numbers = [0, 0, 0]

                    numbers.forEach((num, i)=>{
                        num = Number(window.prompt(`Digite o ${i+1} número: `) )
                        numbers[i] = num
                    })

                    const sort = (array) => {
                        let array_temp = array

                        for(let i = 0; i < array_temp.length; i++){
                            for(let j = i+1; j < array_temp.length; j++){

                                if(array_temp[i] > array_temp[j]){
                                    array_temp[i] += array_temp[j]
                                    array_temp[j] =  array_temp[i] - array_temp[j]
                                    array_temp[i] -= array_temp[j]
                                }
                            }   
                        }

                        return array_temp
                    }

                    numbers = sort(numbers)
                    alert(numbers)
                break;

                case 4:
                    let tempH = Number(window.prompt("Informe a quantidade de horas: "))
                    
                    const convertInMinutes = (tempH) => tempH*60

                    let tempM = convertInMinutes(tempH)
                    
                    window.alert(`Tempo em minutos: ${tempM} minutos`)
                break;

                case 5:
                    let value = Number(window.prompt("Informe um valor: ") )


                    const quantityBankNotes = (value) => {
                        let bankNotes = [200, 100, 50, 20, 10, 5, 1]
                        let quantities = []
                        let amount=value

                        bankNotes.forEach((bankNote, i)=>{
                            quantities.push(Math.trunc(amount / bankNote) )
                            amount = amount - quantities[i]*bankNote
                        })
                        
                        let msgBankNotes = `Para formar R${value}, são necessárias\n`

                        bankNotes.forEach((bankNote, i)=>{
                            msgBankNotes += `${quantities[i]} notas de R$ ${bankNote.toFixed(2)}\n`
                        })
                        
                        return msgBankNotes

                       
                    }
                   
                    alert( quantityBankNotes(value))
                break;


                case 6:
                    let num = window.prompt("Informe um número: ")

                    let sqrt = Math.sqrt(num)

                    window.alert(`A raiz quadrada de ${num} vale: ${sqrt}`)
                break;

                case 7:
                    let weigth = Number(window.prompt("Informe o peso: "))
                    let height = Number(window.prompt("Informe a altura: "))

                    const calcular_imc = (w, h)=> w/h**2


                    alert(`IMC: ${calcular_imc(weigth, height)}`)
                break;

                case 8:
                    let circleArea = Number(window.prompt("Informe a área do círculo: "))

                    const raio_circulo = circleArea => Math.sqrt(circleArea / Math.PI)

                    alert(`O raio do circulo vale: ${raio_circulo(circleArea)}`)


                break;

                case 9:
                    let radiusBase = Number(window.prompt("Informe o raio da base do cilindro: "))
                    let cylinderHeight = Number(window.prompt("Informe a altura do cilindro: "))

                    const volume_cilindro = (radiusBase, cylinderHeight) => Math.PI * radiusBase**2 * cylinderHeight

                    alert(`O volume do cilindro vale: ${volume_cilindro(radiusBase, cylinderHeight)}`)
                break;

                case 10:
                    side = Number(window.prompt("Informe o lado do quadrado: "))

                    const area_quadrado = side => side*side

                    alert(`A área do quadrado vale: ${area_quadrado(side)}m²`)
                break;

                case 11:
                    const jogar_adivinhacao = () => {
                        let triedNum=0, attempts = 10
                        let usedAttempts = 1

                        let secretyNum = Number.parseInt(Math.random() * 100 ) + 1

                        do{
                            
                            if(attempts > 0){
                                triedNum = Number(window.prompt(`Tentativas restantes: ${attempts}\nTente advinhar o número secreto: `) )
                                
                                if(triedNum == secretyNum){
                                    alert(`Parabéns! Você acertou em ${usedAttempts}!`)
                                }else if(triedNum < secretyNum){
                                    alert("O número digitado é menor do que o número secreto!")
                                }else{
                                    alert("O número digitado é maior do que o número secreto!")
                                }
                            }else{
                                alert(`Tentativas esgotadas! O número secreto era: ${secretyNum}`)
                            }

                            attempts -= 1
                            usedAttempts += 1

                        } while(attempts>=0 && triedNum != secretyNum)
                    }
                    
                    jogar_adivinhacao()
                break;

                case 12:
                    const simularBanco = () => {
    let contas = {}; // Objeto para armazenar as contas: {numero_conta: {nome: string, saldo: number}}
    let proximoNumeroConta = 1001; // Começa a numeração das contas

    // Funções auxiliares (agora síncronas, usando prompt)

    const criarConta = () => {
        const nome = prompt("Digite o nome do titular da conta:").trim();
        if (!nome) {
            alert("Nome do titular não pode ser vazio.");
            return;
        }

        let saldoInicial;
        while (true) {
            const saldoInput = prompt("Digite o saldo inicial da conta (ex: 100.00):");
            saldoInicial = parseFloat(saldoInput);
            if (isNaN(saldoInicial) || saldoInicial < 0) {
                alert("Valor inválido para o saldo. Digite um número não negativo.");
            } else {
                break;
            }
        }

        const numeroConta = String(proximoNumeroConta);
        contas[numeroConta] = { nome: nome, saldo: saldoInicial };
        alert(`Conta criada com sucesso! Número da conta: ${numeroConta}`);
        proximoNumeroConta++;
    };

    const depositar = () => {
        const numeroConta = prompt("Digite o número da conta para depósito:").trim();
        if (!contas[numeroConta]) {
            alert("Erro: Conta inexistente.");
            return;
        }

        let valor;
        while (true) {
            const valorInput = prompt("Digite o valor a depositar:");
            valor = parseFloat(valorInput);
            if (isNaN(valor) || valor <= 0) {
                alert("Valor inválido. Digite um número positivo.");
            } else {
                break;
            }
        }

        contas[numeroConta].saldo += valor;
        alert(`Depósito de R$${valor.toFixed(2)} realizado com sucesso na conta ${numeroConta}.\nNovo saldo: R$${contas[numeroConta].saldo.toFixed(2)}`);
    };

    const sacar = () => {
        const numeroConta = prompt("Digite o número da conta para saque:").trim();
        if (!contas[numeroConta]) {
            alert("Erro: Conta inexistente.");
            return;
        }

        let valor;
        while (true) {
            const valorInput = prompt("Digite o valor a sacar:");
            valor = parseFloat(valorInput);
            if (isNaN(valor) || valor <= 0) {
                alert("Valor inválido. Digite um número positivo.");
            } else {
                break;
            }
        }

        if (contas[numeroConta].saldo < valor) {
            alert(`Erro: Saldo insuficiente.\nSaldo atual: R$${contas[numeroConta].saldo.toFixed(2)}`);
            return;
        }

        contas[numeroConta].saldo -= valor;
        alert(`Saque de R$${valor.toFixed(2)} realizado com sucesso da conta ${numeroConta}.\nNovo saldo: R$${contas[numeroConta].saldo.toFixed(2)}`);
    };

    const exibirSaldo = () => {
        const numeroConta = prompt("Digite o número da conta para exibir o saldo:").trim();
        if (!contas[numeroConta]) {
            alert("Erro: Conta inexistente.");
            return;
        }

        alert(`--- Saldo da Conta ${numeroConta} ---\nTitular: ${contas[numeroConta].nome}\nSaldo:   R$${contas[numeroConta].saldo.toFixed(2)}\n----------------------------`);
    };

    const menuPrincipal = () => {
        while (true) {
            const menuText =
                "--- Menu do Banco ---\n" +
                "1. Criar nova conta\n" +
                "2. Depositar\n" +
                "3. Sacar\n" +
                "4. Exibir saldo\n" +
                "5. Sair\n" +
                "---------------------\n" +
                "Escolha uma opção:";

            const opcao = prompt(menuText);

            if (opcao === null) { // Usuário clicou em 'Cancelar'
                alert("Operação cancelada. Saindo do sistema.");
                break;
            }

            switch (opcao.trim()) {
                case '1':
                    criarConta();
                    break;
                case '2':
                    depositar();
                    break;
                case '3':
                    sacar();
                    break;
                case '4':
                    exibirSaldo();
                    break;
                case '5':
                    alert("Obrigado por usar nosso banco! Volte sempre.");
                    return; // Sai da função
                default:
                    alert("Opção inválida. Por favor, escolha um número de 1 a 5.");
            }
        }
    };

    // Inicia o menu principal
    menuPrincipal();
};

// Chama a função para iniciar a simulação do banco
simularBanco();
                break;

                case 13:
                    let salary = Number(window.prompt("Informe seu salário: ") )
                    let aliquot = 0, installment =0

                    calcImpost = (salary) => {
                         if (salary >= 2259.21 && salary <= 2826.65){
                            aliquot = 7.5
                        }else if(salary >= 2826.66 && salary <= 3751.05){
                            aliquot = 15
                        }else if(salary >= 3751.06 && salary <= 4664.68){
                            aliquot = 22.5
                        }else if(salary > 4664.68){
                            aliquot = 27.5
                        }

                        installment = salary * (aliquot/100)
                        return aliquot ? `Parcela a deduzir do IR: R$ ${installment.toFixed(2)}` : "Isento de imposto de renda!"
                    }

                    
                    alert(calcImpost(salary))

                break;

                case 14:
                {
                    let salary = Number(window.prompt("Informe seu salário: "));

                    const calcINSS = (salary) => {
                        let totalINSS = 0; 
                        let remainingSalary = salary; 
                        const incomeRanges = [
                            { limit: 1412.00, aliquot: 7.5 },  
                            { limit: 2666.44, aliquot: 9 },
                            { limit: 4000.03, aliquot: 12 },
                            { limit: 7786.02, aliquot: 14 } 
                        ];

                        const maxINSSSalary = incomeRanges[incomeRanges.length - 1].limit;
                        let currentSalaryToTax = Math.min(salary, maxINSSSalary);

                        if (currentSalaryToTax <= 0) {
                            return 0;
                        }

                        if (currentSalaryToTax > 0) {
                            const taxableAmount = Math.min(currentSalaryToTax, incomeRanges[0].limit)
                            totalINSS += taxableAmount * (incomeRanges[0].aliquot / 100)
                            currentSalaryToTax -= taxableAmount
                        }

                        // Faixas seguintes
                        for (let i = 1; i < incomeRanges.length && currentSalaryToTax > 0; i++) {
                            const previousLimit = incomeRanges[i - 1].limit
                            const currentLimit = incomeRanges[i].limit
                            const aliquot = incomeRanges[i].aliquot

                            const rangeSize = currentLimit - previousLimit

                            const taxableAmount = Math.min(currentSalaryToTax, rangeSize)

                            totalINSS += taxableAmount * (aliquot / 100)
                            currentSalaryToTax -= taxableAmount
                        }

                        return `Parcela a pagar do INSS: R$ ${totalINSS}`
                    }

                    alert(calcINSS(salary))

            }
                break;

                case 15:
                    const compoundInterest = (c, i, t) => c * Math.pow( (1 + i), t)
                    
                    let c = Number(window.prompt("Informe o capital inicial: ") )
                    let i = Number(window.prompt("Informe a taxa de juros: "))
                    let t = Number(window.prompt("Informe o tempo: "))

                    window.alert(`O montante final será de: R$ ${compoundInterest(c, i, t).toFixed(2)}`)
                    
                break;

                case 16:
                    const calcFinancing = (totalValue, numInstallments) => {
                        let valueInstallments = totalValue / numInstallments

                        return `O financiamento será de ${numInstallments} parcelas de: R$ ${valueInstallments.toFixed(2)}!`
                    } 

                    let totalValue = Number(window.prompt("Informe o valor total do financiamento: "))
                    let numInstallments = Number( window.prompt("Informe o número de parcelas: ") )
                    
                    window.alert(calcFinancing(totalValue, numInstallments))

                break;
            }


        break;


        case 7:
            switch(exercicio){
                case 1:
                    let nameInput = window.document.getElementById("name")
                    let addressInput = window.document.getElementById("address")
                    let genreInput = window.document.querySelector('input[name="genre"]:checked');
                    let telephoneInput = window.document.getElementById("telephone")
                    let cellphoneInput = window.document.getElementById("cellphone")
                    let emailInput = window.document.getElementById("email")

                    const isBlank = (string) => string == ""

                    let nameValue = nameInput.value
                    nameValue = nameValue.trim()

                    let addressValue = addressInput.value
                    addressValue = addressValue.trim()

                    let genreValue = genreInput ? genreInput.value : "";

                    let telephoneValue = telephoneInput.value
                    telephoneValue = telephoneValue.trim()
                    
                    let cellphoneValue = cellphoneInput.value
                    cellphoneValue = cellphoneValue.trim()

                    let emailValue = emailInput.value
                    emailValue = emailValue.trim()

                    let fields = [
                        {
                            "nome": nameValue
                        },

                        {
                            "endereço": addressValue
                        },

                        {
                            "genero": genreValue
                        },

                        {
                            "telefone": telephoneValue
                        },

                        {
                            "celular": cellphoneValue
                        },

                        {   
                            "email": emailValue
                        }
                    ]

                    let typeFields = ["nome", "endereço", "genero", "telefone", "celular", "email"]

                    if(!isBlank(nameValue) && !isBlank(addressValue) && !isBlank(genreValue) && !isBlank(telephoneValue) && !isBlank(cellphoneValue) && !isBlank(emailValue)){
                        alert(`Dados cadastrados:\nNome: ${nameValue}\nEndereço: ${addressValue}\nGênero: ${genreValue}\nTelefone: ${telephoneValue}\nCelular: ${cellphoneValue}\nEmail: ${emailValue}`)

                    }else{
                        let messageBlankFields = ""

                        fields.forEach((field, i)=>{
                            if( isBlank(field[typeFields[i]]) ){
                                messageBlankFields += `O campo de ${typeFields[i]} está vazio!\n`
                            }                            

                        })         
                        
                        alert(messageBlankFields)
                    }                       
                    
                break;
            }
            
            

        break;

        case 8:
            switch(exercicio){
                case 1:
                    let array = [1, 2, 3, 4, 5]

                    alert(`Array inicial: [${array}]\nArray * 2: [${array.map((n)=>n*2)}]`)
                break;

                case 2:
                    let array2 = [1, 2, 3, 4, 5, 6, 7, 8]

                    let sum = 0
                    let media=0

                    array2.forEach((n)=>{
                        sum += n
                    })

                    media = sum / array2.length
                    alert(`Array inicial: [${array2}]\nMédia dos valores: ${media}`)
                break;

                case 3:
                    const QTD_IDADES = 20

                    let idades = []
                    let sum_idades=0

                    for(let i = 0; i < QTD_IDADES; i++){
                        idades.push(Number(window.prompt(`Informe a ${i+1}º idade: `) ) )
                        sum_idades += idades[i]
                    }

                    let mediaIdades = sum_idades / QTD_IDADES

                    let msgIdadesAcimaDaMedia=`Média de idades: ${mediaIdades}\nIdades acima da média:\n`

                    idades.forEach((n) =>{
                        if(n >  mediaIdades){
                            msgIdadesAcimaDaMedia += `${n}\n`
                        }
                    } )

                    alert(msgIdadesAcimaDaMedia)
                break;

                case 4:
                    let evenNumbers = []

                    let msgNumbers

                    for(let i = 0; i < 10; i++){
                        let n = Number.parseInt(window.prompt(`Digite o ${i+1}º número: `) )

                        if(n % 2 == 0){
                            evenNumbers.push(n)
                        }
                    }
                    
                    if(evenNumbers.length){
                        msgNumbers = 'Números pares:\n'

                        evenNumbers.forEach((number)=>{
                            msgNumbers += `${number}\n`    
                        })
                    }else{
                        msgNumbers = 'Todos os números são ímpares.'
                    }

                    alert(msgNumbers)
                break;

                case 5:
                    function toTitle(name){
                        let nameFormmated = name.split("")

                        nameFormmated[0] = nameFormmated[0].toUpperCase()


                        for(let i = 1; i < nameFormmated.length; i++){
                            nameFormmated[i] = nameFormmated[i].toLowerCase()
                        }

                        nameFormmated = nameFormmated.join("")
                        return nameFormmated
                    }


                    let names = ["Aristobaldo", "Rafael", "Parmênedes", "Heráclito", "Edmundo", "", "", "", "", ""]

                    let name = window.prompt("Informe um nome: ")
                    name = toTitle(name)

                    let nameFound = ''

                    names.forEach((arrayName)=>{
                        if(arrayName == name){
                            nameFound = name
                        }
                    })

                    if(nameFound.length){
                        alert(`Nome selecionado: ${name}\nNome encontrado no vetor de nomes na posição ${names.indexOf(name)} `)
                    }else{
                        alert(`Nome selecionado: ${name}\nNome não encontrado!`)
                    }
                break;
            }
        break;

        case 9:
            switch(exercicio){
                case 1:
                    let emailInput = window.document.getElementById("email-input")

                    let email = emailInput.value
                    email = email.trim()

                    const isEmailValid = (email) => {
                        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        return regex.test(email);

                    }

                    const isBlank = (email) => email == ""

                    alert(!isBlank(email) ? `O email ${email} ${isEmailValid(email) ? 'é valido!' : 'é inválido!'} ` : 'Digite um email!')
                break;

                case 2:
                    let restaurantIframe = window.document.getElementsByTagName("iframe")[0]
                    
                    btnExercises[modulo-1][exercicio-1].innerText = btnExercises[modulo-1][exercicio-1].innerText == "Play" ? "Stop" : "Play"
                    
                    
                    if(btnExercises[modulo-1][exercicio-1].innerText == "Play"){
                        restaurantIframe.style.display="none";
                    }else{
                        restaurantIframe.style.display="block";
                    }

                break;

            }

        break;
            
    }
}
//click de play nos exercicios



for (let i = 0; i < QTDMODULOS; i++) {
    modulos.push(document.querySelector(`#modulo${i + 1}`))
}

// Cria estrelas

function createStars(){
    for (let i = 0; i < stars; i++) {
        let star = document.createElement("div");
        star.className = 'stars';
        let xy = randomPosition();
        star.style.top = xy[0] + 'px';
        star.style.left = xy[1] + 'px';
        document.body.append(star);
    }
}


createStars()

function removeStars(){
    const allStars = document.querySelectorAll(".stars");
    allStars.forEach(star => {
        star.style.display = "none";
    });

}


function randomPosition() {
    let y = window.innerWidth;
    let x = window.innerHeight;
    return [Math.floor(Math.random() * x), Math.floor(Math.random() * y)];
}



function desapearModules(){
    for(let i = 0; i < QTDMODULOS; i++){
        modulos[i].style.display="none"
    }
}




function skipIntro() {
    introIsIskipped = true

    console.log("Skip intro acionado!");
    music.pause();
    notice.style.display = "none";
    music.currentTime = 0;

    overlay.style.display = "none";
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".logo").style.display = "none";
    document.getElementById("scroller").style.display = "none";

    document.getElementById("menu-portfolio").style.display = "block";


    for (let i = 2; i < QTDMODULOS + 2; i++) {
        //Considera se de 2 pra frente para descartar a imagem da logo SENAI WARS, que é a [1]. Ela nao deve ser inclusa no array de imagens
        linksImages.push(window.document.getElementsByTagName("img")[i])
        linksImages[i-2].addEventListener("click", () => { loadModules(i-2) })
        console.log(linksImages[i-2])
    }



    setExercises()

}

function aplyModuleImage(nModulo){
    //aplicar o fundo do planeta de acordo com o módulo selecionado
    document.body.style.margin = "0";
    document.body.style.height = "100vh"; 
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    switch(nModulo){
        case 0:
            document.body.style.backgroundImage = 'url("assets/images/background/coruscant.gif")';
        break;

        case 1:
            document.body.style.backgroundImage = 'url("assets/images/background/kamino.gif")';
        break;

        case 2:
            document.body.style.backgroundImage = 'url("assets/images/background/tatooine.jpeg")'
            break;
            
        case 3:
                
            document.body.style.backgroundImage = 'url("assets/images/background/naboo.jpg")'
            break;
            
        case 4:
            document.body.style.backgroundImage = 'url("assets/images/background/mustafar.jpeg")'
                
        break;

        case 5:
            document.body.style.backgroundImage = 'url("assets/images/background/kashyyyk.jpg")'
                
        break;

        case 6:
            document.body.style.backgroundImage = 'url("assets/images/background/hoth.jpg")'
                
        break;

        case 7:
            document.body.style.backgroundImage = 'url("assets/images/background/endor.jpg")'
        break;

        case 8:
            document.body.style.backgroundImage = 'url("assets/images/background/death-star.jpg")'
        break;

    }
}



function disaplyModuleImage(){
  // remove o background inline
  document.body.style.backgroundImage = "";
  document.body.style.backgroundRepeat = "";
  document.body.style.backgroundSize = "";
  document.body.style.backgroundPosition = "";
}

function loadModules(nModulo) {
    //troca o CSS
    turnCSS()   
     //Some com o menu e carrega os módulos de exercícios
    menuPortfolio.style.display = "none"

    //some com as estrelas
    removeStars()
    aplyModuleImage(nModulo)
    

    modulos[nModulo].style.display = "block"


}


// Inicia animação e música após clique
startBtn.addEventListener("click", () => {
    overlay.classList.add("hidden"); // faz fade out

    setTimeout(() => {
        overlay.style.display = "none"; // remove overlay completamente
        music.play(); // toca música
        notice.style.display = "block";



    }, 9000);

});



// detecta tecla ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        skipIntro();
    }
});


// detecta quando a música termina
music.addEventListener("ended", () => {
    skipIntro();
});




/*calculadora */
// Pega a div do display
const display = document.getElementById("display");

// Função para adicionar valores ao display
const append = (value) => {
    if (display.innerText === "0") {
        display.innerText = value; // Substitui o 0 inicial
    } else {
        display.innerText += value; // Adiciona ao final
    }
}


// Limpa todo o display
const clearDisplay = () =>{
    display.innerText = "0";
}


// Apaga o último caractere
const deleteLast = () =>{
    if (display.innerText.length === 1) {
        display.innerText = "0"; // Se só sobrar 1 caractere, volta para 0
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}


// Calcula o resultado da expressão
const calculate = () => {
    try {
        const result = eval(display.innerText); // Executa a operação
        display.innerText = result !== undefined ? result : "0";
    } catch (error) {
        display.innerText = "Erro"; // Caso dê erro, exibe "Erro"
        setTimeout(() => (display.innerText = "0"), 1500); // Volta ao normal após 1.5s
    }
}
