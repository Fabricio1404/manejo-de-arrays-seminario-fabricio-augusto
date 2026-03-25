const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

function esNumero(valor) {
    return !isNaN(valor) && valor.trim() !== "";
}

async function ingresarPersona() {
    let personas = [];

    console.log("---------------------------------------");
    console.log("SISTEMA DE GESTIÓN DE CALIFICACIONES");
    console.log("---------------------------------------");

    while (true) {
        let nombre = await preguntar("Ingrese el nombre: ");

        // Validar edad
        let edad;
        do {
            edad = await preguntar("Ingrese la edad: ");
            if (!esNumero(edad)) {
                console.log("Error: Ingrese un número válido para la edad.");
            }
        } while (!esNumero(edad));
        edad = parseInt(edad);

        // Validar nota
        let nota;
        do {
            nota = await preguntar("Ingrese la nota: ");
            if (!esNumero(nota)) {
                console.log("Error: Ingrese un número válido para la nota.");
            }
        } while (!esNumero(nota));
        nota = parseFloat(nota);

        personas.push([nombre, edad, nota]);

        // Validar respuesta si/no
        let respuesta;
        do {
            respuesta = (await preguntar("¿Desea ingresar otra persona? (si/no): ")).toLowerCase();
            if (respuesta !== "si" && respuesta !== "no") {
                console.log("Error: escriba 'si' o 'no'.");
            }
        } while (respuesta !== "si" && respuesta !== "no");

        if (respuesta === "no") {
            break;
        }
    }

    console.log("\n--- Listado de personas ingresadas: ---");
    personas.forEach(p => {
        console.log(`${p[0]} - ${p[1]} - ${p[2]}`);
    });

    let ordenado = [...personas].sort((a, b) => b[2] - a[2]);

    console.log("\n--- Listado ordenado por nota (de mayor a menor): ---");
    ordenado.forEach(p => {
        console.log(`${p[0]} - ${p[1]} - ${p[2]}`);
    });

    if (personas.length > 0) {
        let suma = 0;
        personas.forEach(p => {
            suma += p[2];
        });

        let promedio = suma / personas.length;
        console.log("\n--- Promedio de Notas: ---", promedio.toFixed(2));
    } else {
        console.log("\nNo hay datos para calcular el promedio.");
    }

    rl.close();
}

ingresarPersona();