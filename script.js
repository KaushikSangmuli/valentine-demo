let body= document.querySelector("body")
let inputs = document.querySelector("#enterName");
let greet = document.querySelector(".greet");
let submit = document.querySelector("#submit")
let choices = document.querySelector(".choices")
submit.addEventListener ( "click" , ()=>{
    let hername = inputs.value;
     greet.innerText= " hello " + hername + ", I am glad you came here"
     greet.classList.remove("hidden")
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

 chocolate.addEventListener ( "click", ()=>{
    chocoImg.classList.remove("hidden")
    flower.classList.add("hidden")
    chocolate.classList.add("hidden")
    outingQ.classList.remove("hidden")
    wantbox.classList.remove("hidden")
    wantque.classList.remove("hidden")
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


})

