let body= document.querySelector("body")
let inputs = document.querySelector("#enterName");
let greet = document.querySelector(".greet");

let submit = document.querySelector("#submit")
submit.addEventListener ( "click" , ()=>{
    let hername = inputs.value;
     greet.innerText= " hello " + hername + ", I am glad you came here"
     greet.classList.remove("hidden")

     console.log(hername)
}
)


