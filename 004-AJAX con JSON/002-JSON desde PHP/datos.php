<?php

    switch($_GET['cliente']){
        case "1":
            echo '
                {
                    "nombre":"Jose Vicente",
                    "email":"info@josevicentecarratala.com",
                    "telefono":12345
                }
            ';
            break;
        case "2":
            echo '
                {
                    "nombre":"Juan",
                    "email":"juan@josevicentecarratala.com",
                    "telefono":56436346436
                }
            ';
            break;
        case "3":
            echo '
                {
                    "nombre":"Jorge",
                    "email":"jorge@josevicentecarratala.com",
                    "telefono":63464564356
                }
            ';
            break;
    }

?>