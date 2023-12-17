var usuarios = [];
function crearUsuario() {
    var username = document.getElementById('username').value;
    var fullname = document.getElementById('fullname').value;

    usuarios.push({ username: username, fullname: fullname, estado: 'Activo' });

    actualizarTabla();
    limpiarFormulario();

    // Enviar datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "backend.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Actualizar la tabla después de crear el usuario
            actualizarTabla();
            limpiarFormulario();
            alert(xhr.responseText); // Muestra la respuesta del servidor
        }
    };
    xhr.send("createUser=true&username=" + username + "&fullname=" + fullname);
}


function consultarUsuario() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var user = usuarios.find(function(u) {
        return u.username.toLowerCase() === searchInput || u.fullname.toLowerCase() === searchInput;
    });

    if (user) {
        mostrarInfoUsuario(user);
    } else {
        document.getElementById('userInfo').innerHTML = 'Usuario no encontrado.';
    }
}

function actualizarUsuario(index) {
    var newFullname = prompt('Nuevo nombre completo:');
    if (newFullname !== null) {
        usuarios[index].fullname = newFullname;
        actualizarTabla();
    }
}

function darDeBajaUsuario(index) {
    usuarios[index].estado = 'Inactivo';
    actualizarTabla();
}

function actualizarTabla() {
    var tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';

    usuarios.forEach(function(user, index) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = user.username;
        cell2.innerHTML = user.fullname;
        cell3.innerHTML = user.estado;

        var updateButton = document.createElement('button');
        updateButton.textContent = 'Actualizar';
        updateButton.onclick = function() { actualizarUsuario(index); };

        var suspendButton = document.createElement('button');
        suspendButton.textContent = 'Suspender';
        suspendButton.onclick = function() { darDeBajaUsuario(index); };

        cell4.appendChild(updateButton);
        cell4.appendChild(suspendButton);
    });
}

function mostrarInfoUsuario(user) {
    document.getElementById('userInfo').innerHTML = 'Nombre de usuario: ' + user.username + '<br>Nombre completo: ' + user.fullname + '<br>Estado: ' + user.estado;
}

function limpiarFormulario() {
    document.getElementById('username').value = '';
    document.getElementById('fullname').value = '';
}

