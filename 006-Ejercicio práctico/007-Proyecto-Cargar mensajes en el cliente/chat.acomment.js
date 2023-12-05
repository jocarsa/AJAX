En el archivo JavaScript proporcionado, se han introducido novedades para agregar una funcionalidad de actualización periódica de los mensajes del chat utilizando un temporizador (`setTimeout`). Aquí están las explicaciones detalladas de las novedades agregadas:

```javascript
var usuario = "";
var temporizador; // Variable para almacenar el temporizador.

window.onload = function(){
    // ... (Código previo al clic del botón de envío del usuario)

    // Cuando haga clic sobre el botón de envío del usuario
    document.getElementById("enviausuario").onclick = function(){
        // ... (Código para iniciar sesión del usuario)

        // Creo un temporizador que llama al bucle
        temporizador = setTimeout("bucle()", 1000); // Establece un temporizador para llamar a la función bucle cada segundo.
    }

    // ... (Código para enviar mensajes)

}

function bucle(){
    fetch("mensajes.json") // Realiza una solicitud para obtener los mensajes del archivo JSON.
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos); // Muestra los datos obtenidos en la consola (pueden ser los mensajes del chat).
    })

    // El bucle se llama a sí mismo cada segundo
    clearTimeout(temporizador); // Limpia el temporizador anterior para evitar que se acumulen múltiples llamadas al bucle.
    temporizador = setTimeout("bucle()", 1000); // Establece un nuevo temporizador para llamar recursivamente a la función bucle cada segundo.
}
```

Novedades explicadas:

1. **Uso del temporizador:**
   - Se ha agregado la variable `temporizador` para almacenar el identificador del temporizador creado con `setTimeout`.

2. **Lógica del temporizador:**
   - Cuando el usuario hace clic en el botón de envío de usuario, se inicia el temporizador mediante `setTimeout("bucle()", 1000);`.
   - Este temporizador llama a la función `bucle()` cada segundo (`1000` milisegundos).

3. **Función `bucle()`:**
   - Esta función utiliza `fetch()` para realizar una solicitud GET al archivo "mensajes.json" que probablemente contiene los mensajes del chat.
   - Luego, convierte la respuesta en formato JSON y muestra los datos en la consola con `console.log(datos);`.
   - Después de eso, se limpia el temporizador anterior con `clearTimeout(temporizador);` para evitar múltiples llamadas acumuladas y se establece un nuevo temporizador para llamar recursivamente a la función `bucle()` cada segundo.

En resumen, este nuevo código introduce un mecanismo de actualización periódica del chat que solicita y muestra los mensajes del archivo "mensajes.json" cada segundo utilizando `fetch()` y un temporizador que llama a la función `bucle()` repetidamente.