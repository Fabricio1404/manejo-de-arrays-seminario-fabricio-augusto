let clienteId = localStorage.getItem("clienteId");

// Obtener ID único
async function obtenerId() {
    if (!clienteId) {
        let res = await fetch("http://localhost:3000/identificar");
        let data = await res.json();

        clienteId = data.id;
        localStorage.setItem("clienteId", clienteId);
    }
}

// Agregar alumno
async function agregarPersona() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let nota = document.getElementById("nota").value;

    if (nombre === "" || edad === "" || nota === "") {
        alert("Complete todos los campos");
        return;
    }

    await fetch("http://localhost:3000/alumnos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: clienteId,
            nombre,
            edad,
            nota
        })
    });

    mostrar();

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("nota").value = "";
}

// Mostrar alumnos
async function mostrar() {
    let res = await fetch(`http://localhost:3000/alumnos/${clienteId}`);
    let data = await res.json();

    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    data.forEach(p => {
        tabla.innerHTML += `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.edad}</td>
                <td>${p.nota}</td>
            </tr>
        `;
    });
}

// Inicialización
async function iniciar() {
    await obtenerId();
    mostrar();
}

iniciar();