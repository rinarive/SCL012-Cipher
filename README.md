# REMEMBERME

*REMEMBERME* es una aplicación para cifrado y descifrado de contraseñas. 
Éste producto va dirigido a usuarios cuyas vidas laborales le exigen un cambio frecuente de password como médida de seguridad para resguardar información confidencial, así como tambien al público en general que así lo requiera.

El producto que estoy desarrollando tiene como visión llegar a ser capaz de almacenar en una sola contraseña todas las demás que el usuario quiera guardar de manera segúra y encriptada para su fácil acceso y uso, ésto quitará de la cabeza de los usuarios muchos códigos que con frecuencia olvida y que para encontralos debe realizar varios pasos un tanto tediosos, con *REMEMBERME* solo se necesita un número y una palabra secreta que sepas recordarás con facilidad, nada más... También proporciona ideas de claves seguras al momento de renovarlas constantemente. 

## Proceso de prototipado UX
Para el diseño de esta aplicación se tomaron en cuenta los requerimientos de los usuarios iniciales para los cuales está dirigida la herramienta, en el proceso de investigación y de usabilidad entreviste a un usuario con la finalidad de recopilar sus necesidades y determinar el producto que podía ofrecer usando el objetivo principal del proyecto *Cifrado César*. En la entrevista la pregunta inicial fué ¿Cómo puede ayudar en tu vida laboral una aplicación que se base en el cifrado César?, su respuesta inmediata estuvo dirigida a sus Password. Desde allí comencé a indagar más en cómo podía ayudarle a gestionar y administrar sus password de manera segúra, fácil y rápida.

Inicié un bosquejo a lápiz en conjunto con el entrevistado el cual muestro a continuación:

![sketch-lapiz](src\imagenes\sketch-lapiz.png) 

En el sketch inicial el proyecto se tornó sumamente ambisioso generando mucha interacción con los usuarios y múltiples aplicabilidades en su vida cotidiana y laboral, emocionada pero consternada decidí hacer algunas modificaciones que se adaptaran al tiempo de planificación y desarrollo del proyecto para poder cumplir con los requerimientos del mismo y así alcanzar el reto propuesto.

En un segundo Sketch realizado con la herramienta Balsamiq le dí un giro al diseño de la aplicación, quitando algunas pantallas y funciones que al momento generaban más disposión de tiempo. 


![sketch-balsamiq](src\imagenes\prototipo-balsamiq.png)


En ésta propuesta se muestra una pantalla de inicio que solicita el nombre del usuario para dar personalización y brindar un saludo cordial en la segunda vista de pantalla en la cual se le solicita al usuario ingresar su fecha de nacimiento y una palabra que le sea muy fácil recordar, ésto con la finalidad de salvaguardar la información que ingresará, también para que el cifrado contenga una data única por cada usuario, pues ésta se convertirá en la clave y offSet del cifrado. 

En la tercera vista de página el usuario puede ingresar los *sitios web* que quiere recordar en conjunto con su *nombre de usuario* y *contraseña* de dicho sitio web y así proceder a almacenar todas sus contraseñas encriptadas.

Las contraseñas serían guardadas en una lista con los links de los `sitios web` y el `usuario` que corresponde a cada `password `(visibles y cifradas), para su fácil acceso al momento de descifrar.

Como medida de seguridad el sistema le pedirá ingresar su palabra secreta para poder revelar el descifrado del sitio seleccionado.

`Reconsideraciones`: Debido a el tiempo y consideraciones necesarias para el reto del proyecto *Cifrado César* éste prototipo se escapa de los parámetros a cumplir pues es necesario dominar información y destrezas que para el momento y las circunstancias todavía no se alcanzan, por ende éste prototipo se muestra con la finalidad de expresar la idea original y la visión de continuar con las mejoras del proyecto en base a éstas ideas.

Para ésta instancia se creó un nuevo prototipo dándole un nuevo esquema que contemple practicidad y viabilidad para cumplir con la planificación del proyecto, se comenzó la construcción del proyecto ésta vez usando una herramienta para un prototipado de alta fidelidad llamada `FIGMA` .



A continuación las vistas de las tres pantallas:

![pag1-FIGMA](src\imagenes\pag1-figma.png)
![pag2-FIGMA](src\imagenes\pag2-figma.png)
![pag3-FIGMA](src\imagenes\pag3-figma.png)

## Test de Usabilidad.
Para la realización del test de usabilidad se utilizó el prototipo de alta fidelidad creado a través de la herramienta `FIGMA` donde 5 usuarios probaron la apllicación con la tarea única de codificar y decodificar una contraseña propia, en ésta primera prueba recibí suficiente feed back para implementar cambios de diseño  que proporcionara más información para el correcto uso de la aplicación.

Luego de los cambios realizados probé nuevamente la aplicación con 5 sujetos distintos a los anteriores y encontré que se perdían o se bloqueaban en el momento del cifrado pues manifestaban estar confundidos con la redundancia de palabras *codificar* y *decodificar*, las sugerencias iban enfocadas en dejar la aplicacion más intuitiva que explicativa. Entonces se eliminaron algunos pasos previos al cifrado en sí, como lo era escoger entre cifrar o descifrar, en este cambio se estableció que el usuario podrá cifrar o descifrar en la misma sesión.


## Instrucciones de uso para *REMEMBERME*.

1. Escribe tu Nombre y Apellido luego haz click en el botón `Entrar`.

2. Ingresa un número que sea fácil de recordar, la aplicación sugiere que sea tu edad pero solo tu decides cual es tu número favorito.
3. Ingresa una palabra secreta que también sea fácil de recordar.
4. Haz click en el botón `Enviar`.
5. Escribe la contraseña que deseas encriptar y haz click en `Codificar`.
6. Para copiar tu contraseña codificada haz click en el botón `Copiar`.
7. Para descifrar tu contraseña escribe tu codigo encritado y presiona el botón `Decodificar`.

Voilá ya lograste encriptar tu contraseña, ahora puedes hacerlos cuantas veces quieras, solo *RECUERDAME* tu número y tú palabra secreta. Click en `Volver`.

[REMEMBERME](https://rinarive.github.io/SCL012-Cipher/src/index.html) (En éste enlace se puede probar la aplicación siguiendo las instrucciones antes descritas.)



