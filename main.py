def ingresar_persona():
    personas = []
    
    print("---------------------------------------")
    print("SISTEMA DE GESTIÓN DE CALIFICACIONES")
    print("---------------------------------------")

    while True:
        # Entrada de datos
        nombre = input("Ingrese el nombre: ")
        edad = int(input("Ingrese la edad: "))
        nota = float(input("Ingrese la nota: "))

        # Estructura de matriz (fila)
        persona = [nombre, edad, nota]
        personas.append(persona)

        # Control de salida
        respuesta = input("¿Desea ingresar otra persona? (si/no): ").lower()
        if respuesta != "si":
            break

    # --- Resultados Finales ---
    
    # 1. Listado original
    print("\n--- Listado de personas ingresadas: ---")
    for p in personas:
        print(f"{p[0]} - {p[1]} - {p[2]}")

    # 2. Listado ordenado por nota (Mayor a Menor)
    ordenado = sorted(personas, key=lambda x: x[2], reverse=True)

    print("\n--- Listado ordenado por nota (de mayor a menor): ---")
    for p in ordenado:
        print(f"{p[0]} - {p[1]} - {p[2]}")

    # 3. Cálculo de promedio
    suma = sum(p[2] for p in personas)
    promedio = suma / len(personas)

    print(f"\n--- Promedio de Notas: --- {promedio:.2f}")

if __name__ == "__main__":
    ingresar_persona()