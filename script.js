//your code here
let button = document.querySelector( "#btn" );
let guess = document.querySelector("#guess").value;
let randomSpace = document.querySelector("#num");
let res = document.querySelector("#respond");

button.addEventListener('click' , randomNumber)

 
function randomNumber() {
    let x = Math.floor(Math.random () * 40 )   - 20 ;
    randomSpace.textContent = x;
     hotCold(x);

}


function hotCold(x) {
    let diff = git statusNumber(guess) - Number(x);
    if (diff <= 5){
     res.textContent = "Cold";
    }else{
        res.textContent = "Hot";
     }
}

