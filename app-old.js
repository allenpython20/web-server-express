
const http = require('http');

http.createServer((req,res)=>{/*cualquier url*/
	
	res.writeHead(200,{'Content-Type':'application/json'});
	/*200 es peticion correcta,el tipo de contenido*/
	let salida = {
		nombre : "allen",
		edad : 32,
		url : req.url
	}

	res.write(JSON.stringify(salida))
	res.end()


}).listen(8080);

console.log("hOLA")