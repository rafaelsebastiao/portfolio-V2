const QTDMODULOS = 7
const body = window.document.getElementsByTagName("body")[0]
const stars = 400;
const music = document.getElementById("music");
const overlay = document.getElementById("startOverlay");
const startBtn = document.getElementById("startBtn");

const notice = document.querySelector(".notice");


const menuPortfolio = window.document.querySelector("#menu-portfolio")
const linksImages = []


// const btnVoltar = window.document.querySelector("button.btnRetorno")

const btnsVoltar = document.querySelectorAll("button.btnRetorno");


const modulos = []

const linkCSS = window.document.getElementById("link-css")

const imgLink = window.document.querySelector(".img-link")



let introIsIskipped = false



const btnExercises = [[], [], [], [], [], [], []]
const numExercisesPerModule = []


numExercisesPerModule.push(4)
numExercisesPerModule.push(7)
numExercisesPerModule.push(9)
numExercisesPerModule.push(4)
numExercisesPerModule.push(15)
numExercisesPerModule.push(1)
numExercisesPerModule.push(5)


for(let i = 0; i < QTDMODULOS; i++){
    for(let j = 0; j < numExercisesPerModule[i]; j++){
        btnExercises[i].push(window.document.querySelector(`button#exercicio${i+1}-${j+1}`))
    }
}



function setExercises(){
    for(let i = 0; i < QTDMODULOS; i++){
        for(let j = 0; j < numExercisesPerModule[i]; j++){
            console.log(`Número de módulos: ${btnExercises.length}\nNúmero de exercicios:${numExercisesPerModule[i]}`)
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
        case 2:
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


        case 3:
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



for(let i = 0; i < QTDMODULOS; i++){
    modulos.push(window.document.querySelector(`section#modulo${i+1}`))
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
            document.body.style.backgroundImage = 'url("assets/images/background/coruscant.gif")'
            break;
            
        case 3:
                
            document.body.style.backgroundImage = 'url("assets/images/background/coruscant.gif")'
            break;
            
        case 4:
            document.body.style.backgroundImage = 'url("assets/images/background/coruscant.gif")'
                
        break;

        case 5:
            document.body.style.backgroundImage = 'url("assets/images/background/coruscant.gif")'
                
        break;

        case 6:
            document.body.style.backgroundImage = 'url("assets/images/background/coruscant.gif")'
                
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

    console.log(modulos[nModulo])
    console.log(nModulo)
    

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

