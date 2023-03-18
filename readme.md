
# Auth Para Cuando Starter

Este proyecto es un ejemplo de autenticación usando sequelize como ORM y un esquema básico y sencillo como DB

Ya maneja handlers de error y otros utils para poder escalar de manera viable


## Installation

Para iniciar este proyecto solo asegurate de

Tener ___Node 18___

Se asume que se usa ___Postgres___ como motor de base de datos

Tener las variables marcadas en el __.env.example__ seteadas en el  __.env__

Si tienes dudas para que sirven las que son de __DATABASE_URI_ENV__, en el __notion Backend__ del proyecto existen explicaciones detalladas.

Una vez hecho eso, corre

```bash
  npm install
```

Y seguido de 

```bash
  npm run start
```
o

```bash
  npm run dev
```
Dependiendo si el entorno es de desarrollo o no

- - - -
## Docker

Por default, ya seteamos el Dockerfile y funciona


Si correrás el proyecto con ___docker-compose___ solo encargate de setear las variables en el ___.env___ indicadas en el ___.env.example___

Si se necesitas la ___base de datos___ que te damos de manera preterminada usando docker compose:

Tienes que indicar las variables que esta necesita para setearte la DB que están en el ___.env.db.docker.example___ al ___.env.db.docker___

Hecho eso, con el siguiente commando estaría listo:
```bash
  docker-compose up
```

Existe una explicación en el notion del proyecto que explica el ___Dockerfile___ y ___docker-compose.yml___


# git branch 
/*Nos indica en que rama trabajamos
# git checkout -b NombreRama
/* Crea la rama e ingresas a ella
# git checkout NombreRama
/* Solo para cambiar de rama 
# git merge NombreRama
/* Para traer los cambios a la rama principla (este comando se ejecuta de la rama -main-)
# git status o git status -s
/* Para ver el estado de los archivos con respecto a git (M, A, ??)
# git log --oneline
/* Muestra el historial de los commit y muestra el identificador del mismo 

# Indicar el tipo de commit (los principales) git commit -m "palabraClave:  mensaje"

1. `feat`: Una nueva característica o contribución a una
2.  `fix`: Una solución a un bug o error
3. `docs`: Documentación
4. `perf`: Código que mejora el performance
5. `refactor`: Código que no es sobre docs, no mejora el performance o es sobre una característica. Usualmente solo cambia la forma de algo ya hecho sin que entre en un **perf.**
6. `test`: Cuando se trata de código para testing