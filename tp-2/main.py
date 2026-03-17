def ingresar_persona():
    personas = []

    print("---------------------------------------")
    print("SISTEMA DE GESTIÓN DE CALIFICACIONES")
    print("---------------------------------------")

    while True:
        nombre = input("Ingrese el nombre: ")

        # Validar edad
        while True:
            try:
                edad = int(input("Ingrese la edad: "))
                break
            except ValueError:
                print("Error: Ingrese un número válido para la edad.")

        # Validar nota
        while True:
            try:
                nota = float(input("Ingrese la nota: "))
                break
            except ValueError:
                print("Error: Ingrese un número válido para la nota.")

        persona = [nombre, edad, nota]
        personas.append(persona)

        # Validar respuesta si/no
        while True:
            respuesta = input("¿Desea ingresar otra persona? (si/no): ").lower()
            if respuesta == "si" or respuesta == "no":
                break
            else:
                print("Error: escriba 'si' o 'no'.")

        if respuesta == "no":
            break

    print("\n--- Listado de personas ingresadas: ---")
    for p in personas:
        print(f"{p[0]} - {p[1]} - {p[2]}")

    ordenado = sorted(personas, key=lambda x: x[2], reverse=True)

    print("\n--- Listado ordenado por nota (de mayor a menor): ---")
    for p in ordenado:
        print(f"{p[0]} - {p[1]} - {p[2]}")

    if len(personas) > 0:
        suma = sum(p[2] for p in personas)
        promedio = suma / len(personas)
        print(f"\n--- Promedio de Notas: --- {promedio:.2f}")
    else:
        print("\nNo hay datos para calcular el promedio.")

if __name__ == "__main__":
    ingresar_persona()