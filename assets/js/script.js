// ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

////////////////////

const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";
btn = document.getElementById("btn");
btn.addEventListener("click",() => {
    ele.style.backgroundColor = "yellow";
});