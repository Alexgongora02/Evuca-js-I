## Introducción

# Modulo 0 - Prep

* [01-Preparacón](./01-Preparación)
* [02-Git](./02-Git)
* [03-JavaScript-I-Introducción a Javascript: Variables, tipos de datos y funciones](./03-JavaScript-I)
* [04-JavaScript-II Flujos de control, operadores de comparación, bucles for](./04-JavaScript-II)
* [05-Javascript-IIIBucles for y Arrays II](./05-JavaScript-III)

## Conceptos:

* [Expressions vs Statements](./JavaScript-Tipos-funciones/Statements-Expressions/)

## Proceso de subida de homeworks


__IMPORTANTE:__ Luego de completar cada una de las homeworks del día deberán ejecutar el siguiente comando para subir sus trabajos a sus repositorios (Deben estar posicionados sobre la carpeta principal `Evuca-JS-I` para que funcione y haber corrido previamente `npm install`:

Para la tareas número 1 no es necesario ya que su trabajo se realiza por fuera de este repositorio


Cada vez que querramos actualizar nuestro repositorio en github con los cambios locales, podemos usar el comando de git "status", esto nos mostrará los cambios hechos en el repositorio local. Usa "status" si no estás seguro de que algo haya funcionado y necesitas saber qué pasó.

```bash
  $ git status
```

Deberías ver algo parecido a estas líneas:

```bash
  Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   README.md

  Untracked files:
    (use "git add <file>..." to include in what will be committed)

    archivo-ejemplo.js

  no changes added to commit (use "git add" and/or "git commit -a")
```

Esto nos dice que tenemos un archivo que ha cambiado, pero todavía no ha sido guardado en el historial de git.

Para hacer esto, usaremos el comando "add":


```bash
  git add archivo-ejemplo.js
```

Esto agregó nuestros cambios al historial. Ahora, para guardar el historial, usaremos el comando "commit". Commit agarrará todos nuestros cambios y los guardará en el historial de git. Para futuras referencias, podrás añadir un mensaje acerca de los cambios hechos, esto facilitará ir atrás en el historial y encontrar los cambios que vos (o cualquiera) busque en el futuro en caso de necesitarlo. Siempre es una buena idea hacer una descripción clara y concisa de los cambios. Un _shorthand_ para añadir un mensaje, es usar la bandera (flag) "-m" y escribir el mensaje a continuación usando comillas.

```bash
  git commit -m 'Agregado nuevo archivo, archivo-ejemplo.js'
```

Ahora que guardamos nuestros cambios localmente, vamos a querer compartir esos cambios en Github. Para ello, usaremos "push":

```bash
  git push
```

La terminal te preguntará tu usuario y contraseña (En el caso de la contraseña cuando la estemos escribiendo por consola, por cuestiones de seguridad no se verá lo que estamos escribiendo). Escribimos estos datos y a continuación le damos enter y veremos un mensaje si todo fue "pusheado" correctamente:

```bash
  Counting objects: 5, done.
  Delta compression using up to 8 threads.
  Compressing objects: 100% (4/4), done.
  Writing objects: 100% (5/5), 2.97 KiB | 0 bytes/s, done.
  Total 5 (delta 1), reused 0 (delta 0)
  remote: Resolving deltas: 100% (1/1), completed with 1 local object.
  To git@github.com:[your username]/EvucaJSI.git
    cccc682..283b9dd  master -> master
```

¡Felicitaciones, acabas de subir tu primer git commit!"# Evuca-js-I" 
"# Evuca-js-I" 
