// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres ingresados
let listaNombres = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo'); // Campo de texto
    let nombre = inputNombre.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco

    // Validaciones
    if (!nombre) {
        alert(' Por favor, ingresa un nombre válido.');
        return;
    }
    if (nombre.length < 3) {
        alert(' El nombre debe tener al menos 3 caracteres.');
        return;
    }
    if (/\d/.test(nombre)) { // Verificar si el nombre contiene números
        alert(' El nombre no puede contener números.');
        return;
    }
    if (listaNombres.includes(nombre)) {
        alert(` El nombre "${nombre}" ya está en la lista.`);
        return;
    }

    // Agregar el nombre a la lista
    listaNombres.push(nombre);

    // Actualizar la lista visible en la interfaz
    actualizarLista();

    // Limpiar el campo de texto
    inputNombre.value = '';
}

// Función para actualizar la lista visible de nombres
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); // Referencia a la lista
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    // Recorrer la lista de nombres y crear elementos <li>
    listaNombres.forEach(nombre => {
        const li = document.createElement('li'); // Crear un elemento <li>
        li.textContent = nombre; // Asignar el nombre como texto
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert(' No hay nombres en la lista para sortear.');
        return;
    }

    // Seleccionar un índice aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    const nombreSeleccionado = listaNombres[indiceAleatorio];

    // Mostrar el resultado en la sección "resultado"
    const resultado = document.getElementById('resultado'); // Referencia al contenedor de resultados
    resultado.innerHTML = `<li> El Amigo secreto sorteado es: ${nombreSeleccionado}</li>`;
}
