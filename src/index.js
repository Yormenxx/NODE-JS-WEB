//INSTALACIONES NECESARIAS
// NPM I NODEMON -D --- NOS AYUDA A NO TENER QUE ESTAR ESCRIBIENDO POR CONSOLA LA IMPRESIÓN POR PANTALLA,
//PARA HACERLO AUTOMATICO EN PACKCAGE.JSON EN SCRIPT , ESCRIBIMOS "DEV": "NODEMON SRC/INDEX.JS" , ES LO MISMO QUE
//NPX NODEMON INDEX.JS

//TAMBIÉN INSTALAMOS MORGAN (PARA VER POR CONSOLA LAS PETICIONES AL SERVIDOR), EXPRESS(PARA NO CONFIGUARAR UN 
//SERVIDOR MANUALMENTE), Y EJS (QUE NOS SIRVE PARA USAR HTML CON LÓGICA DE PROGRAMACIÓN)

//CREAMOS LA CARPETA SRC Y DENTRO DE ELLA UNA CARPETA VIEWS , PARA NUESTRAS VISTAS HTML O TEMPLATES

//EN EL ARCHIVO INDEX IMPORTAMOS EXPRESS
//CON ESTE CODIGO ESTABLECEMOS NUESTRO SERVIDOR

// import express from "express"
// const app = express()
// app.get("/",(req,res)=>res.render("index"))
// app.listen(3000)
// console.log("server is listening",3000)



import express from "express"

import morgan from "morgan"

import {dirname,join} from "path"

import{fileURLToPath} from "url"

import indexRoutes from "./routes/index.js"


const app = express()

app.use(indexRoutes)

const __dirname = dirname(fileURLToPath(import.meta.url))


app.set("port", process.env.PORT || 3000);
app.set("views", join(__dirname,"views"))
app.set("view engine","ejs")

app.use(express.static(join(__dirname,'public')))

app.listen(3000)
console.log("server is listening",3000)





