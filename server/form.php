<?php

$correo_usuario = $_POST['email'];
$mi_correo = "maximo2004lfn@gmail.com";
$asunto = "Nuevo correo de un usuario";
$mensaje = "Correo enviado por: " . $correo_usuario;
$cabeceras = "From: $correo_usuario";

if(mail($mi_correo, $asunto, $mensaje, $cabeceras)) {
    echo "Correo enviado correctamente. Gracias por ponerte en contacto.";
} else {
    echo "Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.";
}
?>