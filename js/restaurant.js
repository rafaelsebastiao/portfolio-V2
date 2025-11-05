const btn = window.document.getElementsByTagName("button")[0]
const pResult = window.document.querySelector("p#result")

btn.addEventListener("click", ()=>{
    let priceFood = window.document.getElementById("prato").value
    let quantity = window.document.getElementById("quantidade").value
    let totalValue = priceFood * quantity
    
    pResult.innerText = priceFood > 0 ? (quantity >= 0 ? `Total a pagar: R$${totalValue.toFixed(2)}` : 'Digite uma quantidade válida!' )    : 'Selecione uma opção!';     
})