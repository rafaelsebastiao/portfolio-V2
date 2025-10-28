const QTDMODULOS = 4
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

let btnExercise1;
let btnExercise2;
let btnExercise3;
let btnExercise4;


const btnExercises = [[], [], []]


for(let i = 0; i < 4; i++){
    btnExercises[0].push(window.document.querySelector(`button#exercicio${1}-${i+1}`))
}

for(let i = 0; i < 6; i++){
    btnExercises[1].push(window.document.querySelector(`button#exercicio${2}-${i+1}`))

}


function setExercises(){
    // btnExercise1.addEventListener("click", ()=>{play(1, 1)})
    // btnExercise2.addEventListener("click", ()=>{play(1, 2)})
    // btnExercise3.addEventListener("click", ()=>{play(1, 3)})
    // btnExercise4.addEventListener("click", ()=>{play(1, 4)})

    for(let i = 0; i < 4; i++){
        btnExercises[0][i].addEventListener("click", ()=>{play(1, i+1)})
    }

    for(let i = 0; i < 6; i++){
        btnExercises[1][i].addEventListener("click", ()=>{play(2, i+1)})
    }
}



function returnMenu() {
    menuPortfolio.style.display = "block";
    linkCSS.href = (linkCSS.href.includes('style.css')) ? 'style2.css' : 'style.css';
    disaplyModuleImage();
    desapearModules();
    createStars();
}


btnsVoltar.forEach(btn => btn.addEventListener("click", returnMenu));




function play(modulo, exercicio){
    alert(modulo + " , " + exercicio)
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
                    {
                        let n1 = Number(window.prompt('Digite um número: '))
                        let n2 = Number(window.prompt('Digite outro número: '))

                        window.alert(`${n1} - ${n2} vale: ${n1-n2}`)
                    }
                    //calcule a diferença entre 2 números.​

                    
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
                    {
                        
                    let tempCelsius = Number(window.prompt("Digite a temperatura em celsius: "))

                    let tempFarenheit = (tempCelsius*9/5) + 32

                    window.alert(`A temperatura ${tempCelsius}° C em Fahrenheit vale: ${tempFarenheit}° F`)
                break;

            }            
        }
                    //Converta uma temperatura em celsius para Fahrenheit (ºc*9/5)+32 ​
            
        break;
    }
}
//click de play nos exercicios




for (let i = 0; i < 3; i++) {
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


    // trocar de CSS
    

    for (let i = 2; i < QTDMODULOS; i++) {
        //Considera se de 2 pra frente para descartar a imagem da logo SENAI WARS, que é a [1]. Ela nao deve ser inclusa no array de imagens
        linksImages.push(window.document.getElementsByTagName("img")[i])
        linksImages[i-2].addEventListener("click", () => { loadModules(i-2) })
        console.log(linksImages[i-2])
    }

    

    // const portfolioImages = document.querySelectorAll("#portfolio>.img-link"); // Seleciona apenas as imagens com classe img-link dentro do #portfolio
    // portfolioImages.forEach((img, index) => {
    //     img.addEventListener("click", () => {
    //         loadModules(index); // Passa o índice correto (0, 1, 2) para cada imagem
    //     });
    // });

    setExercises()

}

//troca de CSS
function turnCSS(){

}

function aplyModuleImage(nModulo){
    //aplicar o fundo do planeta de acordo com o módulo selecionado
    document.body.style.margin = "0";
    document.body.style.height = "100vh"; 
    // document.body.style.backgroundImage = 'url("img/teste.gif")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    // document.body.style.backgroundAttachment = 'fixed';

    switch(nModulo){
        case 0:
            document.body.style.backgroundImage = 'url("assets/images/background/teste.gif")';

        break;

        case 1:
            document.body.style.backgroundImage = 'url("assets/images/background/kamino.gif")';
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
    linkCSS.href = (linkCSS.href.includes('style.css')) ? 'style2.css' : 'style.css';
    
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

