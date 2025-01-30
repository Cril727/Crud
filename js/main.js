obtenerUsuarios();

function obtenerUsuarios() {

  const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZGt4anR5cW5lem1yeXpidXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODY3ODQsImV4cCI6MjA1MTE2Mjc4NH0.71Cak1nzXkd3YpA3qG55WeXqSvpAZU1BOFrG79wJqCc";
  const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZGt4anR5cW5lem1yeXpidXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODY3ODQsImV4cCI6MjA1MTE2Mjc4NH0.71Cak1nzXkd3YpA3qG55WeXqSvpAZU1BOFrG79wJqCc";
  let url = "https://ffdkxjtyqnezmryzbuxp.supabase.co/rest/v1/usuarios?select=*";



  let registrosBody = document.querySelector("tbody");

  fetch(url, {
    method: 'GET',
    headers: {
      'apikey': apikey,
      'Authorization': Authorization,
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      registrosBody.innerHTML = "";


      data.forEach(user => {

        let tr = document.createElement("tr");

        let tdId = document.createElement("td");
        tdId.textContent = user.id;

        let tdNombre = document.createElement("td");
        tdNombre.textContent = user.nombre;

        let tdApellido = document.createElement("td");
        tdApellido.textContent = user.apellido;

        let tdDocumento = document.createElement("td");
        tdDocumento.textContent = user.documento;





        //--- Boton Eliminar ---//
        let btnEliminar = document.createElement("Button")
        btnEliminar.innerHTML = '<i class="bi bi-calendar2-x"></i>'
        btnEliminar.classList.add("btn", "btn-danger")



        btnEliminar.addEventListener("click", () => {

          Swal.fire({
            title: "Estas seguro de eliminar el registro?",
            text: "Este registro no se podra recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
          }).then((result) => {
            if (result.isConfirmed) {
              eliminarUsuario(user.id)
            }
          });

        })



        //--- Boton Editar ---//
        let btnEditar = document.createElement("Button")
        btnEditar.innerHTML = '<i class="bi bi-pencil-square"></i>'
        btnEditar.classList.add("btn", "btn-warning")
        btnEditar.setAttribute("data-id", user.id);


        btnEditar.addEventListener("click", () => {

          $("#tabla").hide();
          $("#formEditar").show();


          $("#txtEditNombre").val(user.nombre);
          $("#txtEditApellido").val(user.apellido);
          $("#txtEditDocumento").val(user.documento);


          $("#formEditarUsuario").data("userId", user.id);
        });




        let Acciones = document.createElement("td")
        Acciones.appendChild(btnEliminar)
        Acciones.appendChild(btnEditar)


        tr.appendChild(tdId);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdDocumento);
        tr.appendChild(Acciones)


        registrosBody.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });

}




function eliminarUsuario(userId) {
  const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZGt4anR5cW5lem1yeXpidXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODY3ODQsImV4cCI6MjA1MTE2Mjc4NH0.71Cak1nzXkd3YpA3qG55WeXqSvpAZU1BOFrG79wJqCc";
  const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZGt4anR5cW5lem1yeXpidXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODY3ODQsImV4cCI6MjA1MTE2Mjc4NH0.71Cak1nzXkd3YpA3qG55WeXqSvpAZU1BOFrG79wJqCc";

  let url = `https://ffdkxjtyqnezmryzbuxp.supabase.co/rest/v1/usuarios?id=eq.${userId}`;

  fetch(url, {
    method: "DELETE",
    headers: {
      'apikey': apikey,
      'Authorization': Authorization,
      'Content-Type': 'application/json'
    }
  })

    .then(data => {

      Swal.fire({
        title: "Eliminado!",
        icon: "success",
        text: "El usuario ha sido eliminado."
      });

      obtenerUsuarios();
    })
    .catch(error => {
      console.error("Error al eliminar el usuario", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error al intentar eliminar el usuario."
      });
    });
}




function agregarUsuario() {

  const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZGt4anR5cW5lem1yeXpidXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODY3ODQsImV4cCI6MjA1MTE2Mjc4NH0.71Cak1nzXkd3YpA3qG55WeXqSvpAZU1BOFrG79wJqCc";
  const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZGt4anR5cW5lem1yeXpidXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODY3ODQsImV4cCI6MjA1MTE2Mjc4NH0.71Cak1nzXkd3YpA3qG55WeXqSvpAZU1BOFrG79wJqCc";
  const url = "https://ffdkxjtyqnezmryzbuxp.supabase.co/rest/v1/usuarios";

  const formAgregarUsuario = document.getElementById("formAgregarUsuario");



  formAgregarUsuario.addEventListener("submit", (event) => {
    event.preventDefault();


    const nombre = document.getElementById("txtNombre").value;
    const apellido = document.getElementById("txtApellido").value;
    const documento = document.getElementById("txtDocumento").value;


    const nuevoUsuario = {
      nombre: nombre,
      apellido: apellido,
      documento: documento
    };


    fetch(url, {
      method: "POST",
      headers: {
        'apikey': apikey,
        'Authorization': Authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoUsuario)
    })
      .then(data => {

        Swal.fire({
          title: "Usuario agregado!",
          icon: "success",
          text: "El usuario ha sido agregado correctamente."
        });
        obtenerUsuarios();
        $("#formAgregar").hide();
        $("#tabla").show();
        formAgregarUsuario.reset();
      })
      .catch(error => {
        console.error("Error al agregar el usuario:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error al agregar el usuario."
        });
      });
  });
}




function editarUsuario(userId) {
  const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZGt4anR5cW5lem1yeXpidXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODY3ODQsImV4cCI6MjA1MTE2Mjc4NH0.71Cak1nzXkd3YpA3qG55WeXqSvpAZU1BOFrG79wJqCc"
  const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZGt4anR5cW5lem1yeXpidXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODY3ODQsImV4cCI6MjA1MTE2Mjc4NH0.71Cak1nzXkd3YpA3qG55WeXqSvpAZU1BOFrG79wJqCc"
  const url = `https://ffdkxjtyqnezmryzbuxp.supabase.co/rest/v1/usuarios?id=eq.${userId}`

  // Obtener los valores de los campos de edición
  const nombre = document.getElementById("txtEditNombre").value
  const apellido = document.getElementById("txtEditApellido").value
  const documento = document.getElementById("txtEditDocumento").value

  const usuarioEditado = {
    nombre: nombre,
    apellido: apellido,
    documento: documento,
  }

  // Realizar la actualización en Supabase
  fetch(url, {
    method: "PATCH",
    headers: {
      apikey: apikey,
      Authorization: Authorization,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(usuarioEditado),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor")
      }
      return response.text()
    })
    .then(() => {
  
      Swal.fire({
        title: "Usuario actualizado!",
        icon: "success",
        text: "El usuario ha sido actualizado correctamente.",
      })
      obtenerUsuarios()
      $("#formEditar").hide()
      $("#tabla").show()
    })
    .catch((error) => {
      console.error("Error al actualizar el usuario:", error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error al intentar actualizar el usuario.",
      })
    })
}