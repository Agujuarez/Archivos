var fs = require('fs')

 async function escribir(a, b) {
    await fs.promises.writeFile( a , b )
}

async function appendear(x, a) {
    await fs.promises.appendFile( x, a );
}

async function leer(z) {
    return await fs.promises.readFile( z , "utf-8")
} 

async function verifica(v) {
    return await fs.promises.stat(v)
}
        
async function main() {
    nombre = "nuevo.txt"
    contenido1 = "pizza"
    contenido2 = "logg"

    await escribir(nombre, contenido1)
    await appendear (nombre, contenido2)
    await appendear (nombre, contenido2)
    await appendear (nombre, contenido1)
    await appendear (nombre, contenido2)
    existe = await verifica(nombre)

    if  (existe.size > 0) {
        resultado = await leer(nombre)
        console.log(resultado)
    }

    
}

main()