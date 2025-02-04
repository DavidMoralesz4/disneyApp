
# Proyecto Técnico | Desarrollo con NodeJs
Desarrollar una API que permita explorar el universo Disney, facilitando conocer y modificar los 
personajes, y entender las películas en las que estos participaron. Además, deberá exponer la 
información de manera que cualquier frontend pueda consumirla.
## Requerimientos
A continuación, se presentan los requerimientos del proyecto y su desglose en tareas, junto con las estimaciones.

### 1. CRUD de Personajes

#### Descripción: Crear, Leer, Actualizar, Eliminar y Filtrar personajes de disney.

#### Base de datos y configuracion
- Crear la tabla characters en MySQL. Propiedades: imagen, nombre, edad, peso, historia, peliculas asociadas (30 min).
- Configurar la base de datos y el modelo characters (30 min).
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
### 1. CRUD de Peliculas

#### Descripción: Crear, Leer, Actualizar, Eliminar y Filtrar peliculas de disney.

#### Base de datos y configuracion
- Crear la tabla movies en MySQL. Propiedades: Imagen, Título, Fecha de creación, Calificación, Personajes asociados (30 min).
- Configurar la base de datos y el modelo movies (25 min).
#### Listado de Película
- Ruta: endpoint GET /movies (25 min).
- Controlador (25 min).
- Servicio: retornar imagen, titulo y fecha de creacion (30 min).

#### Detalle de Película
- Ruta GET/movies (25 min).
- Controlador (25 min).
- Servicio: Devolver todos los campos de la película y los personajes asociados (30 min).

#### Creación de Película
- Ruta POST/characters (20)
- Controlador requiere campos del modelo movies(25 min)
- Servicio: crear una movie (25 min).

#### Actualizar Película
- Ruta PUT/movie (25 min)
- Controlador: campos a actualizar (30 min)
- Servicio: actualiza la pelicula (35 min)

#### Eliminar Película - sequelize - paranoid
- Ruta DELETE/movies (25 min)
- Controlador: pelicula a eliminar (30 min)
- Servicio: eliminacion de pelicula (35 min)

#### Busqueda por título, filtrar por género y ordenar por fecha de creación (ascendente o descendente)
- Ruta GET/characters?title=Los tres Mosqueteros&gender=Animacion&date_release=1940 (30 min)
- Controlador: requiere campos title, gender, date_release (50 min)
- Servicio: filtrar las movies (1 hora)


#### Estimación total aprox: 6/7 horas.