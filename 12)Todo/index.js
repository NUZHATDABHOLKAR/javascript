const btn = document.querySelector(".addButton");
const note = document.querySelector(".input");
const container = document.querySelector(".container");
const editbtn = document.querySelector(".editButton")
const h2 = document.querySelector("h2");


btn.addEventListener("click", () => {
    if (note.value === "")return;
      container.innerHTML += `
 <div class="item">
            <h2 class="item-input">${note.value} </h2>
            <button class="editButton" onClick="editTask(this)">EDIT</button>
            <button class="deleteButton" onClick="deleteTask(this)">DELETE</button>   
        </div>
`;
    
note.value = ""

});


let deleteTask = (e) => {
    console.log(e);
    console.log(e.parentElement);

  e.parentElement.remove();
  
};

let editTask = (e) => {

  note.value = e.parentElement.querySelector("h2").innerText;
console.log(e.parentElement.childElement);

  e.parentElement.remove();
};
