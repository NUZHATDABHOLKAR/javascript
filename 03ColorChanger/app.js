
   let canvas = document.getElementById("canvas");
   canvas.style.backgroundColor="";
   let button = document.getElementById("button");
   button.addEventListener("click", () => {
   let  letters = "9876543210ABCDEF";
      let color="#";
     for  (let  i = 0; i < 6; i++) {
   color =color + letters[Math.floor(Math.random()*16)];
     }
      canvas.style.backgroundColor= color;
    })


