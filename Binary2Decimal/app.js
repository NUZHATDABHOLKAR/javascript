// function binarytodecimal(str){
//     return parseInt(str,2);
// }
const input = document.getElementById("binary");
const output =document.getElementById("result");
const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    output.value = parseInt(input.value, 2); 
    document.getElementById("result").innerHTML = output.value ;

});
