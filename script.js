let menuHamburguer = document.querySelector(".menu-hamburguer");
let nav = document.querySelector("nav");

function mostrarMenu() {
    // nav.style.display = "block";
    // nav.classList.add("visivel");
    // if(nav.classList.contains("visivel")){
    //     nav.classList.remove("visivel");
    // }else{
    //     nav.classList.add("visivel");
    // }
    
    //JEITO 3
    nav.classList.toggle("visivel");
}

menuHamburguer.onclick = mostrarMenu;