
# Proyecto Técnico | Desarrollo con NodeJs
Desarrollar una API que permita explorar el universo Disney, facilitando conocer y modificar los 
personajes, y entender las películas en las que estos participaron. Además, deberá exponer la 
información de manera que cualquier frontend pueda consumirla.
## Requerimientos
A continuación, se presentan los requerimientos del proyecto y su desglose en tareas, junto con las estimaciones.

### 1. CRUD Personajes

#### Descripción: Crear, Leer, Actualizar y Eliminar personajes de disney.

#### Base de datos y configuracion
- Crear la tabla characters en MySQL. Propiedades: imagen, nombre, edad, peso, historia, peliculas asociadas (15 min).
- Configurar la base de datos y el modelo characters (25 min).
#### Crear personajes 
- Ruta: POST/characters (25 min).
- Controlador (25 min).
- Servicio para crear un personaje con las propiedades del modelo (30 min).

#### Consultar todos los personajes
- Ruta GET/characters (25 min).
- Controlador (25 min).
- Servicio para consultar los personajes con las propiedades (nombre y imagen) (30 min).

#### Ver detalle del personaje
- Ruta Get/characters (20)
- Controlador (25 min)
- Servicio: consultar el detalle con todas las propiedades del modelo (25 min).

#### Actualizar los personajes
- Ruta PUT/characters (25 min)
- Controlador (30 min)
- Servicio (35 min)

#### Eliminar los personajes - sequelize - paranoid
- Ruta DELETE/characters (25 min)
- Controlador (30 min)
- Servicio (35 min)

#### Busqueda por nombre, edad, y pelicula
- Ruta GET/characters?name=Mickey Mouse&age=1928&movie=Los tres mosqueteros (25 min)
- Controlador (35 min)
- Servicio (35 min)


#### Estimación total aprox: 5/6 horas.
--------------------------------------------------------------