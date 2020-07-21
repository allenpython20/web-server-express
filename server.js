
const express = require('express')//servidor
const app = express()
const hbs = require('hbs')

require("./hbs/helpers.js")

const port = process.env.PORT || 3000;/*obtiene el puerto*/

app.use(express.static(__dirname + '/public'))//vuelve public esa carpeta y ya solo comenzariamos de assets

hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine','hbs');/*Una vez establecida la propiedad view engine, no tiene que especificar el motor ni cargar el módulo de motor de plantilla en la aplicación*/



app.get('/',(req,res)=>{/*solo para la url /*/
	
	res.render('home',{
		nombre: "Allen sarmieNto",
		anio : new Date().getFullYear()
	})
});

app.get('/about',(req,res)=>{/*solo para la url /*//*<!--iguales 1-->*/
	
	res.render('about',{
		// imagen: __dirname + '/public/assets/img/img1.PNG'
		imagen : 'assets/img/img1.PNG',
		anio : new Date().getFullYear()
	})
});

app.listen(port)/*puerto*/