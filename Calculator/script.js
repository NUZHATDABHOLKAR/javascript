
function insert(num){
  document.getElementById("textview").value+=num;
  }
  function equals(){
   let equal =eval(document.getElementById("textview").value);
   document.getElementById("textview").value=equal
      
  }
  function clean(){
    document.getElementById("textview").value="";

    }
  function back(){
    let back= document.getElementById("textview").innerText.slice(0,-1);
    document.getElementById("textview").value=back;
  }