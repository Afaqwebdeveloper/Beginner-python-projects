var squares = document.querySelectorAll("td")

var restart_button = document.querySelector("#b")

restart_button.addEventListener('click',function(){
    for (var i=0; i<squares.length; i++){
        squares[i].textContent = ""
    }
})

function mark(){
    if (this.textContent ===""){
        this.textContent = "X";
    }
    else if (this.textContent === "X"){
        this.textContent = "O";
    }
    else {
        this.textContent = "";
    }
}

for (var i=0; i<squares.length; i++){
    squares[i].addEventListener('click', mark)
}
