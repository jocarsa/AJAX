<?php
    
    $archivo = 'usuarios.json';
    $cadenaJson = file_get_contents($archivo);
    $json = json_decode($cadenaJson);
    
    $existe = false;
    foreach($json as $usuario){
        if($usuario->usuario == $_POST['usuario']){
            $existe = true;
        }
    }
    
    
    if($existe == false){
        echo '{"estado":"ok"}';
    }else{
        echo '{"estado":"ko"}';
    }
?>