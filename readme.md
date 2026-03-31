-Empezamos configurando nuestro apache:

-Descargamos los archivos proporcionados

-Ingresamos a la url proporcionada en el archivo "leer.txt" donde descargaremos el archivo httpd-2.4.66-260223-Win64-VS18.zip

-Lo extraemos y pegamos la carpeta apache24 dentro de la ruta "c:\"

-Configuramos el virtual host en el archivo "C:\Apache24\conf\extra\httpd-vhosts.conf"

-Pegamos la configuración de Apache proporcionada por "leer.txt" en dicho archivo

-Configuramos el included del virtual host en el archivo "C:\Apache24\conf\httpd.conf" (si esta con # hay que quitarlo para que lo lea)

-Añadimos nuestra ip al archivo "hosts-ipf.txt" de la carpeta del "coredns" reemplazando las ip que trae por defecto

-Configuramos la misma ip a la que escuchara nuestro dns desde la configuración de red:

	-Abrimos nuestra lista de redes abajo a la derecha

	-Seleccionamos "más opciones de Wi-Fi"

	-Buscamos la opción de "Propiedades de [nombre de tu red]"

	-Buscamos la información de DNS IPv4 y le damos a "editar"

	-En la opción de "DNS Preferido" añadimos nuestra ip deseada

	-Guardamos y estaría listo

-En la ruta "C:\Apache24\htdocs" debemos pegar las 3 carpetas de los sitios brindados en los archivos

-Abrimos la terminal de Windows y nos dirigimos a la ruta C:\Apache24\bin> ./httpd.exe y lo ejecutamos para iniciar el apache

-Abrimos otra pestaña de la terminal de Windows y nos dirigimos hacia la ruta de nuestro ./coredns.exe y la ejecutamos


