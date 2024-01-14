let btn = document.getElementById("btn");
function nameF(){
    btn.innerHTML = "Ooooooooooooooooooooooooooooooops";
    btn.style.color = "red";
}

document.getElementById("btn").addEventListener("click", nameF);