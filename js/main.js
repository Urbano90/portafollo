

let menu = document.querySelector(".menu");
let navMenu = document.querySelector(".nav-menu");
let cerrar = document.querySelector(".cerrar-img");
let link = document.querySelector(".link");


menu.addEventListener("click", function() {
    document.querySelector(".nav-menu").style.display = "grid";
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".cerrar-img").style.display = "block";
    document.querySelector(".body").style.overflow = 'hidden'; /* desactivamos el scroll cuando el menu no está activo */
});

cerrar.addEventListener("click", function() {
    document.querySelector(".nav-menu").style.display = "none";
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".cerrar-img").style.display = "none";
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".body").style.overflow = 'visible'; /* activamos el scroll cuando el menu no está activo */
});

    navMenu.addEventListener("click", function() {
    document.querySelector(".body").style.overflow = 'visible';
    document.querySelector(".nav-menu").style.display = "none";
    document.querySelector(".cerrar-img").style.display = "none";
    document.querySelector(".menu").style.display = "block";  
});

