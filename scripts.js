let textField = document.querySelector(".inputField");
let buttom = document.querySelector(".saveInput");


function buttomInteraction(){
    buttom.style.backgroundColor= "green";
    buttom.innerHTML = "Registrado";
    location.reload();
}

buttom.onclick = buttomInteraction