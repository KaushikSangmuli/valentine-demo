let body= document.querySelector("body")
let inputs = document.querySelector("#enterName");
let greet = document.querySelector(".greet");
let greet2 = document.querySelector(".greet2");
let submit = document.querySelector("#submit")
let choices = document.querySelector(".choices")
submit.addEventListener ( "click" , ()=>{
    let hername = inputs.value;
     greet.innerText= " hey " + hername + ", didn't catch  your name, i would call you HONEY, but you are much sweeter than that..."
     greet.classList.remove("hidden")
     greet2.classList.remove("hidden")
     choices.classList.remove("hidden")
     console.log(hername)
     
}
)
let chocolate = document.querySelector("#chocolate");
let flower = document.querySelector("#flower");
let chocoImg = document.querySelector ("#mychoc");
let  flowImg =document.querySelector ("#myflow")
let outingQ = document.querySelector ("#outingQ")
let wantque = document.querySelector("#want")
let wantbox = document.querySelector("#wantbox")
let come = document.querySelector("#come")

 chocolate.addEventListener ( "click", ()=>{
    chocoImg.classList.remove("hidden")
    flower.classList.add("hidden")
    chocolate.classList.add("hidden")
    outingQ.classList.remove("hidden")
    wantbox.classList.remove("hidden")
    wantque.classList.remove("hidden")
    come.classList.remove("hidden")
})
flower.addEventListener ( "click" , () =>{
    flowImg.classList.remove ("hidden")
    flower.classList.add("hidden")
    chocolate.classList.add("hidden")
    outingQ.classList.remove("hidden")
    wantbox.classList.remove("hidden")
    wantque.classList.remove("hidden")
   
} )

let outing = document.querySelector("#outing")
wantque.addEventListener ("click", () =>{
    outing.classList.remove("hidden")
    come.classList.remove("hidden")
})

let pub = document.querySelector("#pubImg");
let longdrive = document.querySelector("#longdriveImg");
let beach = document.querySelector("#beachImg");
let final = document.querySelector("#final");


pub.addEventListener ( "click" , () =>{
 final.classList.remove("hidden")
})

longdrive.addEventListener ( "click" , () =>{
    final.classList.remove("hidden")
    console.log("hello ji")
})

beach.addEventListener ( "click" , () =>{
    final.classList.remove("hidden")
 })
   


