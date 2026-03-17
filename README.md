# Sistema de Gestión de Calificaciones

Este proyecto consiste en una aplicación de consola desarrollada en **JavaScript (Node.js)** y **Python**, que permite registrar personas con sus datos y realizar operaciones sobre ellos.

---

# Descripción del Proyecto

El sistema permite:

* Ingresar múltiples personas (nombre, edad y nota)
* Almacenar los datos en una estructura tipo lista/matriz
* Mostrar la lista original de personas
* Ordenar las personas por nota (de mayor a menor)
* Calcular el promedio de las notas

---

# Objetivo

El objetivo de este trabajo es practicar:

* Entrada y salida de datos
* Uso de listas (Python) y arrays (JavaScript)
* Bucles (`while`, `for`, `forEach`)
* Funciones
* Ordenamiento de datos
* Cálculo de promedios

---

# Tecnologías utilizadas

* JavaScript (Node.js)
* Python 3

---

# ▶EJECUCIÓN DEL PROYECTO

---

# Ejecutar en JavaScript (Node.js)

## Requisitos

* Tener instalado Node.js

## Verificar instalación

```bash
node --version
```

---

## ▶Pasos para ejecutar

1. Abrir la terminal en la carpeta del proyecto
2. Ejecutar:

```bash
node nombre_del_archivo.js
```

---

## Ejemplo real

```bash
node main.js
```

---

# Ejecutar en Python

## Requisitos

* Tener instalado Python 3

## 🔍 Verificar instalación

```bash
python --version
```

o

```bash
py --version
```

---

## ▶️ Pasos para ejecutar

1. Abrir la terminal en la carpeta del proyecto
2. Ejecutar:

```bash
python nombre_del_archivo.py
```

---

## Ejemplo real

```bash
python main.py
```

En algunos casos:

```bash
py main.py
```

---

# FUNCIONAMIENTO DEL PROGRAMA

---

## Entrada de datos

El sistema solicita:

* Nombre
* Edad
* Nota

Ejemplo:

```
Ingrese el nombre: Juan
Ingrese la edad: 20
Ingrese la nota: 8
```

---

## Repetición (bucle)

El programa pregunta:

```
¿Desea ingresar otra persona? (si/no):
```

* Si el usuario escribe **"si"**, continúa
* Si escribe **"no"**, finaliza la carga de datos

---

## Salida del programa

Al finalizar, el sistema muestra:

---

### Lista original

```
--- Listado de personas ingresadas: ---
Juan - 20 - 8
Maria - 21 - 6
```

---

### Lista ordenada por nota

```
--- Listado ordenado por nota (de mayor a menor): ---
Juan - 20 - 8
Maria - 21 - 6
```

---

### Promedio de notas

```
--- Promedio de Notas: --- 7.00
```

---

# EXPLICACIÓN DE FUNCIONES UTILIZADAS

---

## JavaScript

* `require("readline")` → permite interactuar con la terminal
* `rl.question()` → solicita datos al usuario
* `parseInt()` → convierte texto a número entero
* `parseFloat()` → convierte texto a número decimal
* `forEach()` → recorre un array
* `sort()` → ordena elementos
* `toFixed(2)` → limita a 2 decimales

---

## Python

* `input()` → solicita datos al usuario
* `int()` → convierte a número entero
* `float()` → convierte a número decimal
* `while` → bucle de repetición
* `for` → recorrer listas
* `append()` → agregar elementos a la lista
* `sorted()` → ordenar listas
* `lambda` → función corta usada para ordenar
* `sum()` → sumar valores automáticamente
* `len()` → obtener cantidad de elementos
* `round()` / `:.2f` → limitar decimales

---

#  EJEMPLO COMPLETO DE EJECUCIÓN

```
---------------------------------------
SISTEMA DE GESTIÓN DE CALIFICACIONES
---------------------------------------

Ingrese el nombre: Juan
Ingrese la edad: 20
Ingrese la nota: 8
¿Desea ingresar otra persona? (si/no): si

Ingrese el nombre: Maria
Ingrese la edad: 21
Ingrese la nota: 6
¿Desea ingresar otra persona? (si/no): no

--- Listado de personas ingresadas: ---
Juan - 20 - 8
Maria - 21 - 6

--- Listado ordenado por nota (de mayor a menor): ---
Juan - 20 - 8
Maria - 21 - 6

--- Promedio de Notas: --- 7.00
```

---

# Conclusión

Este proyecto permite entender cómo resolver un mismo problema utilizando dos lenguajes diferentes, comparando su sintaxis y forma de trabajar con datos.

---

# Autor

* Estudiante de Tecnicatura en Software Multiplataforma
