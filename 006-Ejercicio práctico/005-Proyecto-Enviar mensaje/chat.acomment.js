Las novedades en el código JavaScript que has proporcionado son las siguientes:

```javascript
var usuario = ""; // Variable global para almacenar el nombre de usuario (inicialmente vacía).

window.onload = function(){
    // Por defecto oculto el chat al cargar la página.
    document.getElementById("chat").style.display = "none";

    // Cuando haga clic sobre el botón de envío del usuario.
    document.getElementById("enviausuario").onclick = function(){
        // La variable de usuario vale lo que haya en el campo de usuario.
        usuario = document.getElementById("usuario").value;
        console.log("Tu usuario es: "+usuario);
        // Ocultar el formulario de inicio de sesión y mostrar el chat.
        document.getElementById("chat").style.display = "block";
        document.getElementById("inicio").style.display = "none";
    }

    // Cuando se presione una tecla sobre el campo de mensaje.
    document.getElementById("mensaje").onkeyup = function(e){
        // Si la tecla presionada es la tecla Enter (cuyo código es 13).
        if(e.keyCode == 13){
            let mensaje = this.value; // Almacena el mensaje ingresado en una variable.
            console.log("El mensaje que voy a enviar es: "+mensaje);
            this.value = ""; // Limpia el campo de entrada de mensaje.
            // Ahora envío el mensaje mediante ajax-fetch a un servidor PHP.
            fetch("servidor.php?mensaje="+encodeURI(mensaje)+"&usuario="+encodeURI(usuario));
        }
    }
}
```

Novedades explicadas:

1. **Envío del mensaje al servidor mediante Fetch (AJAX):**
   - Se ha agregado una solicitud Fetch en la sección que maneja el evento `onkeyup` del campo de mensaje cuando se presiona la tecla Enter.
   - Después de capturar y limpiar el mensaje, se utiliza `fetch()` para enviar una solicitud al servidor.
   - Se utiliza la función `fetch()` para enviar una solicitud GET a un archivo PHP en el servidor ("servidor.php" en este caso).
   - La solicitud incluye dos parámetros: el mensaje y el nombre de usuario.
   - `encodeURI()` se utiliza para asegurar que los valores de mensaje y usuario estén correctamente codificados para su transmisión a través de la URL.

2. **servidor.php:**
   - La solicitud Fetch está enviando el mensaje y el usuario a un archivo PHP en el servidor llamado "servidor.php". En este archivo, se pueden realizar acciones como almacenar el mensaje en una base de datos, procesar la información o realizar cualquier acción adicional requerida por la lógica del servidor.

Esto significa que cuando se presiona Enter en el campo de mensaje, el contenido del mensaje y el nombre de usuario se envían al archivo PHP en el servidor a través de una solicitud GET utilizando Fetch, donde se pueden realizar acciones adicionales como almacenar el mensaje en una base de datos o realizar otro tipo de procesamiento.