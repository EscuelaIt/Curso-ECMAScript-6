# Ejercicio práctico
El objetivo del ejercicio consiste en mostrar una lista de recursos atacando a una API, en este caso la [API de Pokémon](http://pokeapi.co/) (aunque se puede escoger cualquier otra). Lo interesante del ejercicio es que nos hemos autoimpuesto la condición de **no utilizar nada de html** y tampoco **ninguna librería ni framework JS para crear componentes de UI**. Absolutamente todo el código debe estar escrito en JavaScript, cumpliendo el estándar ECMAScript 2015.

## Entorno de desarrollo
Tanto para trabajar en local como para crear los assets de archivos estáticos para producción, vamos a utilizar [Webpack](https://webpack.github.io/). Puedes encontrar la configuración utilizada en el archivo `webpack.config.js`, con una configuración base en el objeto `common` y dos configuraciones que se combinan en función de la tarea de `npm` utilizada.

En el caso del `packaje.json`, tenemos cuatro tareas:
* `npm start`: Arranca webpack en modo desarrollo. Para ver tu página, accede a [http://localhost:3000/dist/main](http://localhost:3000/dist/main)
* `npm run build`: Compila el código para distribuirlo en producción
* `npm run clean`: Limpia la carpeta `dist`, en la que se generan los archivos en modo producción
* `npm run fenix`: Limpia la carpeta `node_modules` y realiza una instalación limpia de todas las dependencias npm
