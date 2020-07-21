const hbs = require('hbs')//para manejar los archivos

//helpers funciones para el proyecto,si no encuentra una variable al renderizar buscara en los helpers function parametro
hbs.registerHelper('getAnio',()=>{
	return new Date().getFullYear()
});

hbs.registerHelper('capitalizar',(texto)=>{

	let palabras = texto.split(" ");

	palabras.forEach((palabra,idx)=>{
		palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
	})

	texto = palabras.join(" ");

	return texto
})
