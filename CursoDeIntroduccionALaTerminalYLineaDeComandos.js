date => Fecha
echo => Imprimir en pantalla
man [] => manual [comando del que se quiere saber más]
history => Historia de todos los comandos
  ! []  => [id de comando]
rm [ruta Archivo] => borrar Archivo.

cp [ruta Origen] [ruta Destino] => copiar(Archivo)
cp [ruta Origen] [ruta Destino] => copiar(directorio)
mv [ruta Origen] [ruta Destino] => Mover o cortar(Archivo o directorio)
rmdir [ruta o directorio] => Eliminar directorios

ls = Lista los archivos que se encuentran en el directorio sobre el que estamos trabajando
ls -a = Lista todos los archivos incluyendo aquellos que se han definido como ocultos
. => Todos los directorios contienen los archivos . y .., estos son punteros a directorios. (directorio actual)
.. => Todos los directorios contienen los archivos . y .., estos son punteros a directorios. (directorio padre)
ls -t => Ordena los archivos por fecha de modificación
ls -x => Ordena los archivos por extensión
ls -l => Muestra toda la información: usuario, grupo, permisos, tamaño, fecha y hora de creación
ls -lh => Muestra la misma información que ls -l pero con las unidades de tamaño en KB, MB.
ls -R => Muestra el contenido de todos los subdirectorios de forma recursiva
ls -S => Ordena los resultados por tamaño de archivo.
pwd => Print Working Directory: se usa para mostrar el directorio actual en el que nos encontramos trabajando
cd => se utiliza para cambiar de directorio. Luego del comando se debe especificar la ruta del directorio al que nos queremos mover.

vim 'o' nano name_file => manejo de archivos.

/*Tratamiento de texto*/
touch [nameFIle.extensión]= nos permite crear archivos.

cat => Muestra el contenido de un archivo

head => muestra las primeras lineas de un archivo.
head -n [numero de lineas] => muestra las lineas que se indique desde el comienzo del archivos

tail -n [numero de lineas] => muestra las lineas que se indique desde el final del archivos

grep [dato buscado] [archivo en que se va a buscar] = buscar dentro de archivos
grep -i [dato buscado] [archivo en que se va a buscar] = buscar dentro de archivos(incluyendo mayusculas y minusculas)
grep -i [dato buscado] [archivo en que se va a buscar] = buscar dentro de archivos(incluyendo mayusculas y minusculas)
grep -i ["dato buscado[AllEnd$]"] [archivo en que se va a buscar] = buscar dentro de archivos, todo lo que finalice [AllEnd] "$" (incluyendo mayusculas y minusculas)
grep -i ["^dato buscado[AllEnd]"] [archivo en que se va a buscar] = buscar dentro de archivos, todo lo que tenga al principio [StartAll] "$" (incluyendo mayusculas y minusculas)

sed '[s/[DatosARemplazar]/[nuevoDato]/g]' [archivo en que se va a buscar]=Remplazar un dato en el flujo que se expone en la terminal, nunca en el archivo original
sed '$d' [archivo]=borrar la útima linea de un archivo
https://likegeeks.com/es/sed-de-linux/

Awk -F ['delimitador;'] '{print$1}'= Sirve para tabajar con archivos estructurados ejemplo .csv, este ejemplo trae la primera columna
Awk -F ['delimitador;'] '{print$1}'= Sirve para tabajar con archivos estructurados ejemplo .csv, este ejemplo trae la primera columna
/*Tratamiento de texto*/

mysql -h 127.0.0.1 -u root -p1234 < archivo.sql = Conectarme a un servicor y enviar como entrada un archivo
ls > archivo.log = direccionar la salida a un archivo
ls >> archivo.log = agrega el resultado al final del archivo existente

/*"|" se usa para realizar la comunicación entre varios procesos*/
[cat Connector_FE.log] | more = muestra un resultado largo en varias iteraciones algo como git diff, para salir se usa la q
[cat Connector_FE.log] | wc -l = muestra el número de lineas del archivo
diff archivo1 archivo2 = comparar dos archivos
/*"|" se usa para realizar la comunicación entre varios procesos*/

/*Administración de procesos en background y foreground*/
& = ejecutar proceso en segundo plano
crt+z = enviar proceso al background
fg    = trael el proceso de nuevo al foreground

ps = listado de los proceso actuales
ps ax = listado de los proceso actuales con mayor detalle
ps | grep [nombre proceso] = buscar la ejecución de un proceso especifico
top = ejecución en tiempo real de todos los procesos
top | grep [nombre proceso] = buscar la ejecución de un proceso especifico
kill -9 = envia señales para terminar un proceso "-9" termina el proceso inmediatamente
killall [nombre o ruta del archivo ejecutable] = finalizar el proceso 
/*Administración de procesos en background y foreground*/

/*Permisos sobre archivos: El sistema de permisos octal*/
u = Dueño
g = Grupo
o = Otros 

r = Lectura
w = Escritura
x = Ejecución(en directorios significa que tiene permitido acceso el acceso)

Permiso 	Valor Octal 	Descripción
– – – 	       0 	      no se tiene ningún permiso
– w – 	       2      	solo permiso de escritura
– w x	         3       	permisos de escritura y ejecución
r – – 	       4      	solo permiso de lectura
r – x 	       5   	    permisos de lectura y ejecución
r w – 	       6       	permisos de lectura y escritura
r w x 	       7        todos los permisos establecidos, lectura, escritura y ejecución

r w x 
1 0 0 4
1 1 0 6
1 1 1 7

u    g   o
rwx rwx rwx
110 100 000 640
100 000 000 400
111 111 111 777

chmod 642
chmod o-w [archivo] = quitar permisos de escritura a los usuarios de tipo o

Chmod [archivo] = Cambia individualmente los permisos
Chown [archivo] =  Cambia el usuario quien es el propietario de ese archivo
Chgrp [archivo] = Cambia quien es el grupo de usuarios que tiene acceso a ese archivo

https://platzi.com/blog/administracion-usuarios-servidores-linux/
/*Permisos sobre archivos: El sistema de permisos octal*/

/*Sistemas de manejo de paquetes*/

/*Sistemas de manejo de paquetes*/

/*Herramientas de compresión y combinación de archivos*/
ls [Archivo] -l = ver el tamaño de un archivo
gzip [Archivo] = Comprimir archivo
gzip -d [Archivo] = Descomprimir archivo

tar cf [NameFile.tar] [directorio]"/*"= agrupar un archvo
tar xf archivo.tar = desagrupar un archivo

tar czf [NameFile.tgz] [Directorio]"/*" = agrupar y comprimir
tar xzf [NameFile.tgz] = desagrupar y Descomprimir
/*Herramientas de compresión y combinación de archivos*/

/*Herramientas de búsqueda de archivos*/
sudo updatedb = actualiza base de datos para usar el comando locate
locate [archivo]
/*Herramientas de búsqueda de archivos*/
