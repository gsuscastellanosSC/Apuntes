/*Curso Práctico de React JS*/
	
	/*¿Qué es React JS?*/
		React es una librería desarrollada por Facebook que nos ayuda a construir interfaces de usuario interactivas para todo tipo de aplicaciones: web, móviles o de escritorio.
		Cada pequeña parte de nuestra página web la conoceremos como “Componente”. Cada componente se encargará de una función en específico. Además, podremos reutilizar nuestros componentes siempre que lo necesitemos.
		Al unir todos nuestros componentes tendremos una página web que nos permite cambiar, actualizar o eliminar elementos de forma muy sencilla.
		Nuestro profesor será Oscar Barajas: Frontend Developer en Platzi y uno de los líderes en la comunidad de Facebook Developer Circles.
	/*¿Qué es React JS?*/
	
	/*DOM, Virtual DOM y React DOM*/

		El DOM es el código HTML que se transforma en páginas web.
		Cada vez que cambiamos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.
		El Virtual DOM es una herramienta que usan tecnologías como React y Vue para mejorar el rendimiento (performance) y velocidad de nuestras aplicaciones.
		Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.
		Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que debemos estar sincronizando constantemente las copias con el DOM. Pero no te preocupes, React DOM lo hace por nosotros.

	/*DOM, Virtual DOM y React DOM*/

	/*Create React App y Tipos de Componentes*/


		**Antes de todo instalar:
		 1. npx con ===> sudo npm install npx
		 2. npm install -g npx
		 3. npm i -g npm-upgrade

		Inicialización de un proyecto en React
		Creación de nuestro sitio web usando la plantilla por defecto de create-react-app:

		==> npx create-react-app nombreDeTuProyecto
		Iniciar el servidor de desarrollo:

		==>npm run start
		No olvides que puedes aprender a manejar de forma las diferentes herramientas de desarrollo en el Curso de Prework: Buenas Prácticas y Entorno de Desarrollo.

		==> code . (Permite Abrir el editor de código).

		Creación y Tipos de Componentes
		**Los nombres de nuestros componentes deben empezar con una letra mayúscula, al igual que cada nueva palabra del componente. Esto lo conocemos como Pascal Case o Upper Camel Case.**

		Los componentes Stateful son los más robustos de React. Los usamos creando clases que extiendan de React.Component. Nos permiten manejar estado y ciclo de vida (más adelante los estudiaremos a profundidad).

		/*Carpetas*/
			/*node_modules*/
				Contine todos los elementos que permiten trabajar con react, librerias(siempre debe estar en .gitinore).
			/*node_modules*/
			
			/*public*/
				"Todo lo que pasaremos a producción"
			/*public*/

			/*src*/
				**Es la carpeta más importante de todas**
				Aquí se encuentra toda la aplicacón.
			/*src*/

			/*src*/
				SE encuentra toda la configuración del proyecto.
			/*src*/
		/*Carpetas*/

	/*Create React App y Tipos de Componentes*/

	/*JSX: JavaScript + HTML*/

		Estamos acostumbrados a escribir código HTML en archivos .html y la lógica de JavaScript en archivos .js.

		React usa JSX: una sintaxis que nos permite escribir la estructura HTML y la lógica en JavaScript desde un mismo lugar: nuestros componentes.

	/*JSX: JavaScript + HTML*/

	/*Componentes*/
		/*Stateful*/
			Componente Estructura de clase Componente mas robusto dentro de React.
			Manjea ciclo de vidad, eventos y estados.
		/*Stateful*/

		/*Stateless*/
			**Son lo más usados**

			No depende de tener un ciclo de vidad, ni un estado. Solo presenta la lógica.
		/*Stateless*/

		/*Presentational*/

		/*Presentational*/

	/*Componentes*/

/*Curso Práctico de React JS*/
