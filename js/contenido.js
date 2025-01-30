let btnAgregar = document.getElementById("BtnAgregar");
let btnOcultar = document.getElementById("volverTabla")
let volverTablaDesdeEditar = document.getElementById("volverTablaDesdeEditar")
let btnBtnAñadir = document.getElementById("BtnAñadir");



btnBtnAñadir.addEventListener("click", ()=>{
    agregarUsuario()
})



btnAgregar.addEventListener("click", () => {

    $("#tabla").hide();
    $("#formAgregar").show();

});




btnOcultar.addEventListener("click", ()=>{

    $("#formAgregar").hide();
    $("#tabla").show();

})



volverTablaDesdeEditar.addEventListener("click", ()=>{

    $("#formEditar").hide();
    $("#tabla").show();
})




$("#formEditarUsuario").on("submit", function (event) {
    event.preventDefault()
    const userId = $(this).data("userId")
    editarUsuario(userId)
  })