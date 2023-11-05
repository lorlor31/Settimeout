// pour utiliser setTimeOut avec une boucle
// veiller à lance le timer dans la boucle
// utiliser le compteur pour augmenter le décalage du timer en fct de l'itération 
// cf example
//pur définir l'id du settimeout , créer une variable let idSettimeout=settimeout(fct,delai)
//mzrche po
let c=1
let i=1
let clic=document.getElementById("clic")
let parag=document.getElementById("parag")
clic.addEventListener("click",()=>{clearTimeout(id);console.log("stop")})
let arr=["Ana","Bob","Carl","Dave","Eric","Fanny","Greg"]
let id
function log(name){
    setTimeout(()=>{
    parag.textContent=""
    console.log(name,c) ;
    let text=document.createTextNode(`Bonjour ${name} ! `)
    parag.appendChild(text) ;
    c++},

    1000)
}
arr.forEach((name,index)=>{
    setTimeout(()=>log(name,index),1000*index)
})

