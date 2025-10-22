const QTDMODULOS = 3
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


// Cria estrelas
for (let i = 0; i < stars; i++) {
    let star = document.createElement("div");
    star.className = 'stars';
    let xy = randomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
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
    


    for (let i = 0; i < 3; i++) {
        linksImages.push(window.document.getElementsByTagName("img")[i])
        linksImages[i].addEventListener("click", () => { loadModules(i) })
    }

    // const portfolioImages = document.querySelectorAll("#portfolio>.img-link"); // Seleciona apenas as imagens com classe img-link dentro do #portfolio
    // portfolioImages.forEach((img, index) => {
    //     img.addEventListener("click", () => {
    //         loadModules(index); // Passa o índice correto (0, 1, 2) para cada imagem
    //     });
    // });


}


function loadModules(nModulo) {
    alert("Módulo carregado!")
    //troca o CSS
    linkCSS.href = (linkCSS.href.includes('style.css')) ? 'style2.css' : 'style.css';
    
     //Some com o menu e carrega os módulos de exercícios
    menuPortfolio.style.display = "none"

    //some com as estrelas
    const allStars = document.querySelectorAll(".stars");
    allStars.forEach(star => {
        star.style.display = "none";
       

    });
    
    //aplicar o fundo do planeta de acordo com o módulo selecionado
    
    document.body.style.margin = "0";
    document.body.style.height = "100vh"; 
    // document.body.style.backgroundImage = 'url("img/teste.gif")';
    document.body.style.backgroundImage = 'url("img/teste.gif")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    // document.body.style.backgroundAttachment = 'fixed';


    let modulos = []

    for (let i = 0; i < 3; i++) {
        modulos.push(document.querySelector(`#modulo${i + 1}`))
    }

    modulos[nModulo].style.display = "block"




}


bntVoltar.addEventListener("click", ()=>{
    menuPortfolio.style.display="block"

    //troca de CSS
    linkCSS.href = (linkCSS.href.includes('style.css')) ? 'style2.css' : 'style.css';
    
    desapearModules()


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



imgLink.addEventListener("click", ()=>{alert("Hello")})


