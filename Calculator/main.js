
function add() {
    var num1 = parseInt(document.getElementById("num1-el").value)
    var num2 = parseInt(document.getElementById("num2-el").value)
    document.getElementById("sum-el").textContent = "Result:" + (num1 + num2)
}

function sub() {
    var num1 = document.getElementById("num1-el").value
    var num2 = document.getElementById("num2-el").value
    document.getElementById("sum-el").innerText = "Result:" + (num1 - num2)
}

function mul() {
    var num1 = document.getElementById("num1-el").value
    var num2 = document.getElementById("num2-el").value
    document.getElementById("sum-el").innerText = "Result:" + (num1 * num2) 
}

function div() {
    var num1 = document.getElementById("num1-el").value
    var num2 = document.getElementById("num2-el").value
    document.getElementById("sum-el").innerText = "Result:" + (num1 / num2) 
}




