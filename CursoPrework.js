/*Curso de Prework: Buenas Prácticas y Entorno de Desarrollo*/
/*Manejo de Archivos y Directorios*/
	/*Manejo de Archivos y Directorios*/
		
		ls => Pemite, lisar los archivos y directorios que tienen la carpeta en la que nos econtremos.
		ls -a => Muestra todos los archivos incluyendo los que esten ocultos.
		ls -l =>  Permite listar el contenido de la carpeta en la que estamos, indicando permisos usuario, fecha de creación y encolor azul los directorios.
		ls -la => Combinación de los dos comandos anteriores.
		ls -alt =>Igual que el anterior comando, pero ordenado por fecha de modificación.
	
	/*Listar Archivos y directorios en la terminal*/

	/*Crear y cambiar de directorios*/
	
		pwd => Retorna la ruta absoluta donde nos encontramos(Las rutas relativas utilizan dos símbolos especiales, un punto (.) y dos puntos seguidos (..), lo que significa el directorio actual y el directorio padre. Los dos puntos seguidos se utilizan para subir en la jerarquía. Un único punto representa el directorio actual).
		mkdir => Se usa para crear nuevas carpetas.
		cd => Se usa para ingresar a un directorio.	
		cd .  => Ir a la carpeta "Carpeta Actual".
		cd .. => Ir a la carpeta "Carpeta Padre".
		cd    => Se usa para ir home.
		cd ~/ => Se usa para ir home.
		history => Historia de comandos utilizados.

	/*Crear y cambiar de directorios*/

	/*Crear, editar, mover y elminar un archivo*/

		touch  => Se usa para crear archivos vacios
		nano   => Permite la edición de archivos en la consola(Para salir Ctrl+x). 
		rm     => Se usa para borrar Archivos.
		rm -rf => Se usa para borrar una carpeta.
		mv nombre nuevo_Nombre => Se úsa para cambiar nombres de archivos.

	/*Crear, editar, mover y elminar un archivo*/

/*Manejo de Archivos y Directorios*/

/*Herramientas básicas*/

	cat  						                  => Muestra el contenido de un archivo en la terminal.
	more                                          => Muestra el contenido de un archivo por partes.
	tail -[Número De últimas Lineas]              => Por defecto muestra las últimas 10 lineas de un archivo.
	cat [Nombre archivo] > [Nombre COPIA archivo] => Copia un archivo.
	open                                          => Abrir archivos con el programa por defecto en el SO. 
	cp -r [Carpeta]/ [COPIACarpeta]			      => Copiar una carpeta.

/*Herramientas básicas*/

/*Crea llaves SSH*/

	ssh-keygen -t rsa -b 4096 -C "This is a key"

/*Crea llaves SSH*/

/*Usar por defecto oh my ZSH*/
	chsh -s /usr/bin/zsh
/*Usar por defecto oh my ZSH*/

/*Ir a mi PC Windwos*/
	cd /mnt/c/Users/jesus/
/*Ir a mi PC Windwos*/

/*Antes de compilar proyectos en react*/

npm install -g react-script

/*Antes de compilar proyectos en react*/

/*Pasos para que funcione eslint*/
  
  /*1.*/ sudo apt-get install node.js   (Instalar node.js)
  /*2.*/ sudo apt-get install npm
  /*3.*/ sudo npm install express -g (Instalación global de node Package manager)
  /*4.*/ sudo npm install express (Instalar en el proyecto)
  		/* sudo npm install npx*/
  /*5.*/ npm install eslint --global
  /*6.*/ npm install eslint --save-dev (Instalar ESLint usando npm)
  /*7.*/ sudo npx eslint --init (configurar el archivo de configuración)

	/*Funciona*/
  		npn install -g eslint 
  		npx eslint --init TypeScript no 
  		sudo apt-get --purge remove npm
  		npm install (Soluciona problemas con la dependencia react)
  		npm install react react-dom --save 
  	/*Funciona*/

/*Pasos para que funcione eslint*/
/*Curso de Prework: Buenas Prácticas y Entorno de Desarrollo*/