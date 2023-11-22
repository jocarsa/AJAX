var usuario = ""
var temporizador;
window.onload = function(){
    // Por defecto oculto el chat
    document.getElementById("chat").style.display = "none";
    // Cuando haga click sobre el botón de envío del usuario
    document.getElementById("enviausuario").onclick = function(){
        // La variable de usuario vale lo que haya en el campo
        usuario = document.getElementById("usuario").value;
        console.log("Tu usuario es: "+usuario);
        // Oculto el login, y muestro el chat
        document.getElementById("chat").style.display = "block";
        document.getElementById("inicio").style.display = "none";
        // Creo un temporizador que llama al bucle
        temporizador = setTimeout("bucle()",1000)
    }
    // Cuando pulse una tecla sobre el mensaje
    document.getElementById("mensaje").onkeyup = function(e){
        // Si esa tecla es la tecla de enter
        if(e.keyCode == "13"){
            let mensaje = this.value;
            console.log("El mensaje que voy a enviar es: "+mensaje);
            this.value = "";
            // Ahora envío el mensaje mediante ajax-fetch
            fetch("servidor.php?mensaje="+encodeURI(mensaje)+"&usuario="+encodeURI(usuario));
        }
    }
}

function bucle(){
    fetch("mensajes.json")
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos)
    })
    // El bucle se llama a si mismo cada segundo
    clearTimeout(temporizador)
    temporizador = setTimeout("bucle()",1000)
}