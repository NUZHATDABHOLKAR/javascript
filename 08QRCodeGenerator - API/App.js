let input =document.getElementById("input");
let output=document.getElementById("submit");
let img =document.getElementById("img");
output.addEventListener("click",GQR);
function GQR(){
    let qrValue =input.value;
    if(!qrValue)return;
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    console.log(img.src);
    img.style.display="inline";
}