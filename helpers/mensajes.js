require("colors")

const mostrarMenu = ()=>{

    console.clear()

    console.log("======================".green)
    console.log("Selecciona una opción".blue)
    console.log("======================\n".green)

    console.log(`${"1.".green} Crear Tarea`)
    console.log(`${"2.".green} Listar tarea`)
    console.log(`${"3.".green} Listar tarea completada`)
    console.log(`${"4.".green} Listar tarea pendiente`)
    console.log(`${"5.".green} Completar Tarea`)
    console.log(`${"6.".green} Borrar tarea`)
    console.log(`${"7.".green} Salir`)

    const readLine = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout

    });

    readLine.question("Seleccione una opcion", (opt)=>{
        console.log({opt})
        readLine.close()
    })


}








module.exports = {
    mostrarMenu

}