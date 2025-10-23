const QTDMODULOS = 2
const body = window.document.getElementsByTagName("body")[0]
const stars = 400;
const music = document.getElementById("music");
const overlay = document.getElementById("startOverlay");
const startBtn = document.getElementById("startBtn");

const notice = document.querySelector(".notice");


const menuPortfolio = window.document.querySelector("#menu-portfolio")
const linksImages = []


const bntVoltar = window.document.querySelector("button#btnRetorno")

const modulos = []

const linkCSS = window.document.getElementById("link-css")

const imgLink = window.document.querySelector(".img-link")

let introIsIskipped = false

let btnExercise1;
let btnExercise2;
let btnExercise3;
let btnExercise4;


//exercicios
btnExercise1 = window.document.querySelector("button#exercicio1")
btnExercise2 = window.document.querySelector("button#exercicio2")
btnExercise3 = window.document.querySelector("button#exercicio3")
btnExercise4 = window.document.querySelector("button#exercicio4")

function setExercises(){
    btnExercise1.addEventListener("click", ()=>{play(1, 1)})
    btnExercise2.addEventListener("click", ()=>{play(1, 2)})
    btnExercise3.addEventListener("click", ()=>{play(1, 3)})
    btnExercise4.addEventListener("click", ()=>{play(1, 4)})
}



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
    

    for (let i = 2; i <= QTDMODULOS; i++) {
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

function aplyModuleImage(){
    //aplicar o fundo do planeta de acordo com o módulo selecionado
    document.body.style.margin = "0";
    document.body.style.height = "100vh"; 
    // document.body.style.backgroundImage = 'url("img/teste.gif")';
    document.body.style.backgroundImage = 'url("img/teste.gif")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    // document.body.style.backgroundAttachment = 'fixed';
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
    aplyModuleImage()

    console.log(modulos[nModulo])
    console.log(nModulo)
    

    modulos[nModulo].style.display = "block"




}


bntVoltar.addEventListener("click", ()=>{
    menuPortfolio.style.display="block"

    //troca de CSS
    linkCSS.href = (linkCSS.href.includes('style.css')) ? 'style2.css' : 'style.css';
    
    disaplyModuleImage()
    desapearModules()   
    createStars()
})
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



