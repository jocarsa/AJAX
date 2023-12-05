Claro, este archivo JavaScript tiene una lógica de actualización periódica de los mensajes del chat utilizando un temporizador (`setTimeout`). Aquí está la explicación detallada de las novedades agregadas:

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
    let fecha = new Date(); // Obtiene la fecha y hora actual.
    fetch("mensajes.json?fecha="+fecha.getUTCSeconds()) // Realiza una solicitud para obtener los mensajes del archivo JSON.
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        // Crea una cadena HTML con los datos de los mensajes recibidos.
        let cadena = "";
        for(let i = 0; i < datos.length; i++){
            cadena += `
                <div class="mensaje">
                    <div class="usuario">${datos[i].usuario}</div>
                    <div class="fecha">${datos[i].fecha}</div>
                    <div class="mensaje">${datos[i].mensaje}</div>
                </div>
            `;
        }
        // Actualiza el contenido del contenedor de mensajes en el HTML con la cadena de mensajes generada.
        document.getElementById("contienemensajes").innerHTML = cadena;

        // Desplaza automáticamente el contenedor de mensajes hacia abajo para mostrar los mensajes más recientes.
        document.getElementById("contienemensajes").scrollTop = 10000000;
    })

    // El bucle se llama a sí mismo cada segundo
    clearTimeout(temporizador); // Limpia el temporizador anterior para evitar que se acumulen múltiples llamadas al bucle.
    temporizador = setTimeout("bucle()", 1000); // Establece un nuevo temporizador para llamar recursivamente a la función bucle cada segundo.
}
```

Novedades explicadas:

1. **Uso del temporizador:**
   - Al igual que en los ejemplos anteriores, se utiliza `setTimeout` para crear un temporizador que llama a la función `bucle()` cada segundo.

2. **Lógica de la función `bucle()`:**
   - Se realiza la misma solicitud GET al archivo "mensajes.json" con un parámetro `fecha` para obtener mensajes desde un tiempo específico.
   - La función `bucle()` procesa los datos recibidos y construye una cadena HTML con la información de los mensajes.
   - Luego, esta cadena se actualiza en el contenedor de mensajes en el HTML usando `document.getElementById("contienemensajes").innerHTML = cadena;`.

3. **Desplazamiento automático hacia abajo del contenedor de mensajes:**
   - Después de actualizar el contenido del contenedor de mensajes, se establece `document.getElementById("contienemensajes").scrollTop = 10000000;` para desplazar automáticamente el contenedor hacia abajo y mostrar los mensajes más recientes.

En resumen, este archivo JavaScript realiza una actualización periódica del contenido del chat obteniendo los mensajes del archivo "mensajes.json", mostrándolos en la página web cada segundo y asegurándose de desplazar automáticamente hacia abajo para mostrar los mensajes más recientes.