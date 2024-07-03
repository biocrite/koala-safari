console.log("Estamos Nodizando!");

const express = require ("express")
const app = express()
const port = 3030
const cors = require("cors")
const posteosRouter = require("./local_modules/rutas.js")
const db = require ("./local_modules/base-de-datos.js")

app.use(cors())
app.use (express.json())

app.get ("/",(req,res)=>{
    res.send("Inicio.")
})

app.use ("/posteos",posteosRouter)

const conexiondb = async ()=>{
 try {
    await db.authenticate()
    console.log(`La conexión a la base de datos ha sido establecida.`);
 } catch (error) {
    console.log(`el error es : ${error}`)
 }
}

app.listen(port,()=>{
    conexiondb()
    console.log(`El servidor en ${port} está funcionando.`);
})