var usuario = ""
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
    }
}