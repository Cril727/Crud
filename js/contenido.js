let btnAgregar = document.getElementById("BtnAgregar");
let btnOcultar = document.getElementById("volverTabla")
let formAgregar = document.getElementById("formAgregar");
let btnBtnAñadir = document.getElementById("BtnAñadir");
let tabla = document.getElementById("tabla");


btnBtnAñadir.addEventListener("click", ()=>{
    agregarUsuario()
})



btnAgregar.addEventListener("click", () => {

    tabla.style.display = "none";

    formAgregar.style.display = "block";
});




btnOcultar.addEventListener("click", ()=>{
    formAgregar.style.display = "none";

    tabla.style.display = "block";
})

