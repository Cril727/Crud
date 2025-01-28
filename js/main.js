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

        // Botones
        let btnEliminar = document.createElement("Button")
        btnEliminar.innerHTML = '<i class="bi bi-calendar2-x"></i>'
        btnEliminar.classList.add("btn", "btn-danger")


        let btnEditar = document.createElement("Button")
        btnEditar.innerHTML = '<i class="bi bi-pencil-square"></i>'
        btnEditar.classList.add("btn", "btn-warning")



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




// function agregarUsuario(nuevoUsuario) {
//   fetch('https://mi-supabase-url.supabase.co/rest/v1/usuarios', {
//     method: 'POST',
//     headers: {
//       'apikey': 'tu-apikey',
//       'Authorization': 'Bearer tu-API-key',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(nuevoUsuario)  // Envía los datos del nuevo usuario
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Nuevo usuario agregado:', data);
//     // Aquí puedes manejar el registro que acaba de agregarse
//   })
//   .catch(error => console.error('Error al agregar usuario:', error));
// }