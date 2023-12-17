const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})

document.addEventListener("DOMContentLoaded", function () {
    const inputBusqueda = document.getElementById("busqueda");
    const lista = document.getElementById("lista").getElementsByTagName("li");

    inputBusqueda.addEventListener("input", function () {
        const busqueda = inputBusqueda.value.toLowerCase();

        for (let i = 0; i < lista.length; i++) {
            const elemento = lista[i];
            const textoElemento = elemento.textContent.toLowerCase();

            if (textoElemento.includes(busqueda)) {
                elemento.style.display = "block";
            } else {
                elemento.style.display = "none";
            }
        }
    });
});