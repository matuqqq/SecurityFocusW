<?php
echo "PHP script reached successfully.";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "hardstack.arg@gmail.com";
    $subject = "Consulta de $fullName";
    $body = "Nombre: $fullName\nEmail: $email\nTeléfono: $phone\n\nMensaje:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Correo enviado con éxito."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error al enviar el correo."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método no permitido."]);
}
?>
