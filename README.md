## Buscador General

Este proyecto consiste en un buscador con un único input en el cual introducir el termino de búsqueda del usuario.

La búsqueda se realiza de forma indiscriminada en todos los arrays de prueba (Conciliaciones, Letras, Usuarios, Tableros).

### Intalar dependencias:

    Yarn install

### Correr proyecto:

    Yarn start

## Cuestionario

1. ¿Por qué no debería usar la librería JQuery, si estoy usando ReactJS?

Considero que las principales ventajas de JQuery no son aprovechadas cuando se usa ReactJS, ya que en ReactJS se trabaja sobre archivos .jsx se hace mas fácil acceder a los elementos del DOM y dotarlos de funcionalidades.

El uso de JQuery en ReactJS podría por el contrario dificultar la legibilidad del código e interferir con la forma en que ReactJS maneja el DOM, produciendo efectos inesperados.

2. ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component?

Los usarías por la mera recomendación de los desarrolladores y mas grandes expertos de ReactJS. Ademas, a pesar de mi poca experiencia con el framework puedo ver que los Hooks quizás sean un poco difícil entender al comienzo, pero simplifican muchas tareas fundamentales. Considero que ellos tienen un nivel mas alto de abstracción y nos permiten a los desarrolladores centrarnos mas en el código.

3. ¿Que es un archivo JSX?

Es un clase de archivo que permite 'declarar' sentencias HTML muy fácil y legiblemente dentro de archivos JS. Los archivos .JSX son usador para pre-procesar código Javascript, de modo que vemos las ventajas de usar pre-pocesadores tales como código mas legible y compacto.

4. ¿Que diferencia hay entre una function y una arrow function de Javascript?

Existen varias diferencias, la primera de ellas es el hecho de que toda función de flecha es una función anónima; pero las funciones tradicionales pueden ser tanto como anónimas como nombradas. Y la diferencia mas importante, es que dentro de toda función de flecha la palabra 'this' hace referencia al objeto window, pero dentro de una función tradicional 'this' hará referencia al objeto que contiene dicha función.

5.  ¿Qué es Redux y cómo nos ayuda en los proyectos?
    Redux es una librería que nos ayuda a tener de manera muy fácil el estado global de nuestra aplicación. Nos permite acceder a cualquier dato almacenado en el store desde cualquier componente, sin tener los inconvenientes que aparecen a la hora de compartir información entre componentes hermanos o componentes nietos de diferentes componentes padres.

6.  ¿Por qué usuarios pruebas unitarias en tu código?
    Usaría pruebas unitarias en mi código porque sé la importancia de asegurar de alguna manera la calidad del código. Actualmente desconozco cómo hacer pruebas unitarias en React(y en general en FrontEnd), pero tuve una corta experiencia haciendo pruebas unitarias en Java y en breve aprenderé a hacerla con ReactJS.

7.  ¿Que nos permite hacer la siguiente declaración?

const anyFunction = (param_1) => (param_2) => param_1 + param_2

Nos permite declarar una función llamada anyFunction que recibe por parámetro param_1 y retorna otra función que a su vez recibe por parámetro a param_2, siendo esta ultima la que sume param_1 y param_2. Lo interesante de la ultima función es que puede acceder al parámetro que se le pasó a su 'función padre' y hacer operaciones dentro de ella.
