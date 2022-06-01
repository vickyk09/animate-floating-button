let x = document.getElementById("num1")
let y = document.getElementById("num2")
let m = document.getElementById("n1")
let n = document.getElementById("n2")

function check (){
    let a = parseInt(x.value)
    let b = parseInt(y.value) 
    m.innerText = x.value
    n.innerText = y.value
    let c = document.getElementById("res")
    
    if(x.value == "" || y.value == ""){
        alert("FILL BOTH INPUTS")
    }
    else if(a >= b){
        for(i = 1; a >= b; i++){
            a -= b
            c.innerText = i;
        }
    }
    else{
        c.innerText = "0";
    }

}

function refresh () {
    location.reload();
}
par
