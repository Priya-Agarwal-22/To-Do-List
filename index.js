const textbox = document.getElementById('text-box');
const input = document.getElementById('list');

function addNote(){
    if(textbox.value === null){
        alert('Write something in text box!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = textbox.value;
        input.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "x";
        li.appendChild(span);
    }
    textbox.value = "";
    saveData();
}

input.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",input.innerHTML);
}

function showTask(){
    input.innerHTML = localStorage.getItem("data");
}
showTask();