//funcionalidad para desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    
});

//Seleccion para barra de navegacion hamburguesa
const hamburguesa = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

hamburguesa.addEventListener("click", () =>{
    ul.classList.toggle("show");
})