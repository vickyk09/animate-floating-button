const colors = ["#fff", "#000", "#ff0", "#ff033e", "#f15025", "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgba(255,255,255,0.5"];

function flip() {
    let bi = parseInt(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[bi];
}

