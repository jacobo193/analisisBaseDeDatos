# APIs Clasificación y diferencias  

Las interfaces de programación de aplicaciones (API por sus siglas en inglés) son interfaces que exponen servicios o datos proporcionados por una serie una aplicaciones de software a través de un conjunto de recursos predefinidos, como métodos, objetos o URI. Las API permiten la comunicación de manera más rápida y flexible de sus productos y servicios con otros, sin necesidad de saber cómo están implementados(1)(2). 

hay diferentes clasificaciones de APIs que se discutirán  continuación 
## clasificación según accesibilidad

•**Internas o privadas**: se les denomina APIs privadas o internas cuando solo quienes desarrollaron el código son quienes se benefician de él. dentro de una empresa, las API de tipo SOAP / HTTP o .NET todavía tiene una gran presencia. En la mayoría de los casos, REST envolverá un servicio SOAP / HTTP o .NET, existente este tipo APIs se explicarán más adelante.

•**Externas o públicas**: este tipo de API puede ser utilizado o aprovechado por el público en general con los mismos beneficios de un API privado.

•**Partner**: esos tipos de APIs son un intermedio entre las APIs de tipo privadas y las de tipo públicas, ya que, en vez de tratarse de una sola compañía son utilizadas por varias compañías que colaboran entre ellas(3)

Este tipo de clasificación está basada en la accesibilidad a la hora de usar un servicio de un API, sino también hay otra clasificación basada en la orientación. Esta clasificación es la siguiente:
## clasificación según su orientación 

•**APIs de servicios Web**: Estas API proporcionan accesos a servicio mediante una dirección web o una comunicación en una red. Normalmente utilizan servicios web estándar como REST, SOAP, XML-RPC y JSON-RPC.

•**APIs basadas en librerías**: este tipo de APIs tienen gran importancia cuando se programa en un determinado lenguaje ya que, normalmente, se hace uso de sus librerías constantemente, facilitando así la tarea del programador. Las librerías no solo pueden ser proporcionadas por la plataforma de software en la que se trabaja sino que pueden ser generadas por el programador para su propio beneficio y el de otros.


•**APIS de sistemas operativos**: este tipo de APIs permiten saber cómo están estructuradas las funcionalidades del Sistema Operativo(3). 

Estos son algunos de los ejemplos de tipos de API que hay en el campo. Pero resulta que hay muchos más, pero estos son los que se podrían considerar más importantes. A continuación, se desarrolla con más profundidad los tipos de con servicios Web(3).

## API de servicio Web

las APIs de Servicio Web como se enunciaron más atrás son, en definición,  son un servicio web que proporciona acceso a un servicio mediante una dirección URL. Es importante que la información proporcionada por el API de servicio web se presente en un formato que sea comprensible para otras aplicaciones, ya que, si no se perdería toda la funcionalidad, en sí misma. Para ello habrá que  que tener estandarizado una serie de arquitecturas software válidas a utilizar en este determinado tipo de APIs.

Los tipos de APIs de servicio web serán enunciados a continuación:

•**SOAP (Simple Object Access Protocol)**: es un protocolo estándar de comunicación entre distintos componentes software. Está basado en XML para la transmisión de sus mensajes, en los cuales quedan añadidos los parámetros de la petición. Está normalmente asociado con HTTP como protocolo de transporte, aunque puede soportar otros.

•**XML (eXtensible Markup Language)**: es un lenguaje de marcado, como su nombre indica, diseñado para describir los datos transportados. Este lenguaje es autodresciptivo y el concepto de extensible hace referencia a que puedes crearte tus propios elementos (tags) y bloques de elementos.

•**XML-RPC (Remote Procedure Calls)**: como su nombre indica es un protocolo de llamada a procedimientos remotos. Utiliza HTTP como medio de transporte y XML como codificación y descripción de datos.

•**WSDL (Web Services Description Language)**: es un lenguaje de descripción de servicios web escrito en XML. Tanto mensajes como operaciones se describen de forma abstracta

•**REST: (Representational State Transfer)**: se encarga de representar la transferencia de datos. Usa llamadas HTTP siendo así un simple mecanismo de solicitud y respuesta(3).

## operaciones tipo CRUD

las operaciones CRUD (Create, Read, Update, Delete): son  operaciones  usadas para interactuar con bases de datos, algunas de estas operaciones funcionan para, crear, leer o verificar que haya un registro o eliminarlo. En la Tabla inferior se muestra cuales son esta operación y para qué sirven cada una de ellas.

| Operaciones | SQL | HTTP|RESTful|
| :------- | :------: | -----: |:-------| 
|Creación un registro  | INSERT      |PUT / POST  |     POST   |
| Leer un registro  | SELECT  | GET |     GET   |
|Modificar un registro |UPDATE|PUT / POST / PATCH|PUT|
|Eliminar un registro /cambiar su estado|DELETE|DELETE|DELETE|

## referncias
1. [readhat](https://www.redhat.com/es/topics/api/what-are-application-programming-interfaces)

2. [Meng, 2018](Meng, M. (2018). Application Programming Interface Documentation: What Do Software 
    Developers Want? journal of Technical Writing and Communication, 295–330.) 

3. [PI de servicios web orientados a accesibilidad. (2015-2016).](API de servicios web orientados a 
    accesibilidad. (2015-2016). Sheila Plaza Estévez, Nerea Ramírez 
    Lamela, Carmen Acosta Morales)