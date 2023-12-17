<?php
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "libreria";
$port = 3307;

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("La conexión a la base de datos falló: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Crear Usuario
    if (isset($_POST['createUser'])) {
        $username = $_POST['username'];
        $fullname = $_POST['fullname'];
        $estado = 'Activo';

        $sql = "INSERT INTO usuarios (username, fullname, estado) VALUES ('$username', '$fullname', '$estado')";
        
        if ($conn->query($sql) === TRUE) {
            echo "Usuario creado con éxito";
        } else {
            echo "Error al crear usuario: " . $conn->error;
        }
    }
}

$conn->close();
?>