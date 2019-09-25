/*Curso de Frontend Developer*/
	/*Presentación y bienvenida al curso de HTML y CSS*/
		Resumen de la app de platzi video.	
	/*Presentación y bienvenida al curso de HTML y CSS*/

	/*HTML y CSS: definición y usos*/
		Interconnnected Network
				InterNET

		Tim Berners-LEE
			W W W => W3C(Estandar):{
				HTTP=>Protocolo de transferencia de Hiper Texto || Hyper Text Transfer Protocol ://,
				URL=>Localizador de Recursos || Uniform Resource Locator,
				HTML=>Lenguaje de marcado de Hiper texto || Hyper Text Markup Language
			}
		CSS =>{Hojas de estilo en cascada || Cascade Style Sheets}==>>>>Responsive Desing || diseño web adaptativo o responsivo
	/*HTML y CSS: definición y usos*/

	/*¿Qué son y para qué nos sirven HTML y CSS?*/
		https://htmlreference.io/ => Esqueleto
		https://cssreference.io/  
	/*¿Qué son y para qué nos sirven HTML y CSS?*/

	/*DOM, CSSOM, Render Tree y el proceso de renderizado de la Web*/
		
		DOM   ==> Document Object Model  1. El navegador Procesa HTML Y construye el DOM.
		CSSOM ==> 						 2. El navegador Procesa y construye el CSSOM.							
		RENDER TREE ==>                  3. El navegador DOM + CSSOM ==> RENDER TREE.
										 4. El navegador Ejecuta el diseño en el render Tree.
										 5. El navegador Pinta en nodo en la pantalla.	

	/*DOM, CSSOM, Render Tree y el proceso de renderizado de la Web*/

		/*Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos*/

				h1                    => Titulo Principal
					h2                 .
						h3             .
							h4         .
								h5     .
									h6 => Titulo Menos importante

			/*Atributos*/
			
				<h1 class="id(Para css, siempre deben ir en la etiqueta de apertura)"> ==>Sintaxis siempre entre "" 
			
			/*Atributos*/

			/*Anidamiento*/

				<ul>		
					<li>...</li>
					<li>...</li>
					     .
					     .
					     .
				</ul>

			/*Anidamiento*/

			/*Elentos vacíos*/

				<img src="puppy.png" alt="mi mascota">

			/*Elentos vacíos*/

	/*Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos*/

	/*Anatomía de un Documento HTML: DOCTYPE, html, head y body*/

		--> Identación.		
		--> Estructura basica.
		--> <div></div> ==> Exenlente para contener cosas
				<!DOCTYPE html>
				<html lang="es">
				<head>
				    <meta charset="UTF-8">
				    <meta name="viewport" content="width=device-width, initial-scale=1.0">
				    <meta http-equiv="X-UA-Compatible" content="ie=edge">
				    <title>Document</title>
				</head>
				<body>
				    <h1>Esta es mi pimera estiqueta HTML !</h1>
				    <div>
				        <p>Estoy muy feliz de escribir este párrafo</p>
				    </div>
				</body>
				</html>

	/*Anatomía de un Documento HTML: DOCTYPE, html, head y body*/

	/*Funciones de las etiquetas HTML más importantes*/



	/*Funciones de las etiquetas HTML más importantes*/

	/*La importancia del código semántico*/



	/*La importancia del código semántico*/

	/*Tipos de errores en HTML, debugging y servicio de validación de etiquetas*/



	/*Tipos de errores en HTML, debugging y servicio de validación de etiquetas*/

	/*Reto Uno*/



	/*Reto Uno*/

	/*Anatomía de una declaración CSS: Selectores, Propiedades y Valores*/

		Nuestros estilos con CSS se componen de:

		Selector: son la referencia a los elementos HTML que queremos estilizar. Los nombres de estas etiquetas van seguidas de una llave de apertura y otra de cierre ({}). Por ejemplo: h1 {}.
		Propiedades: son el tipo de estilo que queremos darle a nuestros elementos. Van seguidas de dos puntos (:). Las propiedades deben estar dentro de las llaves del selector que definimos anteriormente. Podemos escribir diferentes propiedades en un mismo selector. Por ejemplo: h1 { color: }.
		Valores: son el estilo que queremos que tomen nuestros elementos HTML con respecto a una propiedad. Van seguidas de un punto y coma (;). Por ejemplo: h1 { color: red; }.

	/*Anatomía de una declaración CSS: Selectores, Propiedades y Valores*/

	/*Tipos de selectores, pseudo-clases y pseudo-elementos*/

		*(asterisco): Es el selector universal. Las propiedades se aplicaran a todos los elementos de nuestro HTML.

		Tipo: Son selectores que se aplican a cierto elemento HTML en específico. Las propiedades se aplicaran a la etiqueta que queremos, por ejemplo p, body, html, div, etc.

		Clase: Si nuestras etiqueta de HTML tienen un atributo de class podemos usar ese valor o identificador para que los cambios en el CSS afecten únicamente a ese elemento.

		ID: Es similar al anterior, si la etiqueta HTML tiene un ID podemos afectar solo ese elemento.

		Las Pseudo-clases y Pseudo-elementos nos permiten ser aún más específicos con qué elemento o partes de nuestros elementos deben recibir los estilos.

		Para usarlas debemos definir el selector base (por ejemplo, p) seguido de dos puntos y la pseudo-clase que queremos estilizar (por ejemplo: p:first-child). En el caso de los pseudo-elementos debemos usar el dos puntos 2 veces (p::first-letter).

	/*Tipos de selectores, pseudo-clases y pseudo-elementos*/

	/*Modelo de caja*/

		"Todos los elementos de HTML tienen un modelo de caja y esta compuesto por cuatro elementos: 
		contenido, 
		padding, 
		border, 
		margin"

	/*Modelo de caja*/

	/*¿Qué son y para qué nos sirven las arquitecturas CSS?*/

		Objetivos
		=> Predecibles.
		=> Reutilizables.
		=> Mantenible.
		=> Escalable.

		Buenas prácticas
		=> Establecer reglas.
		=> Explicar la estructura base.
		=> Establecer estándares de codificación.
		=> Evitar largas hojas de estilo.
		=> Documentación.

	/*¿Qué son y para qué nos sirven las arquitecturas CSS?*/

	/*Algunas metodologías de CSS OOCSS, BEM, SMACSS, ITCSS y Atomic Design*/

		OOCSS  => CSS Orientados a objetos(Separa el diseño del contenido).
		BEN    => Block element modifier(Separa los bloques, los elementos y los modificadores).
		SMACSS => Arquitectura de CSS, escalable y modular(Base, Layout, Module, State, Theme, SMACSS).
					* Base   => Dividir en componentes base, los cuales son lo que vamos usar en toda la app.
					* Layout => Elementos que se usan solo una vez.
					* Module => Componentes que vamos a usaur mas de una vez.
					* State  => Acciones o cambios de estados que al interactuar con el usuario presentan un cambio en el estilo.
					* Theme  => Temas.
		ITCSS => Triangulo invetido de CSS.
					* Ajustes
					* Herramientas
					* Generico
					* Elementos
					* ObjetosComponentes
					* Útilidades
		Atomic Design => 
					* Atomos
					* Moleculas
					* Organismos
					* Templates
					* Paginas
	 /*Algunas metodologías de CSS OOCSS, BEM, SMACSS, ITCSS y Atomic Design*/

	 /*Contrucción de componentes*/

	 	/*Qué es un componente? Analicemos nuestros diseños*/

	 		=> Vistas de la aplicación
	 		**Se recomieda crear 

	 	/*Qué es un componente? Analicemos nuestros diseños*/

		 	/*Flexbox*/

		 		=> Maquetación y diseño responsivo.
		 		=> Aliniación.	

		 	/*Flexbox*/

		 	/*Nuestro nuevo sistema de layout: CSS Grid*/

		 		=> Responsive.

		 	/*Nuestro nuevo sistema de layout: CSS Grid*/

		 	/*Estructura con HTML y BEM de un menú desplegable*/

		 		

		 	/*Estructura con HTML y BEM de un menú desplegable*/

	 /*Contrucción de componentes*/

	 /**/
	 //sass /mnt/c/Users/jesus/OneDrive/Platzi/EscuelaJavaScript/CursoFrontendDeveloper/PlatziVideo/stylesRegistro.scss /mnt/c/Users/jesus/OneDrive/Platzi/EscuelaJavaScript/CursoFrontendDeveloper/PlatziVideo/stylesRegistro.css
	 /**/

/*Curso de Frontend Developer*/



/*Notas*/
	Este es un archivo .js solo para dar formato al archivo, pero no es valido, es solo una colección de apuntes del curso con el cual fue nombrado ;).
/*Notas*/

