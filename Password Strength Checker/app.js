var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if(pass.value.length < 5){
        str.innerHTML = " weak  &#128078";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(pass.value.length >= 5 && pass.value.length < 10){
        str.innerHTML = " medium  &#129308";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(pass.value.length >= 8){
        str.innerHTML =" strong  &#128077";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
})