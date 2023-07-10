// Algoritmo con un condicional
// Algoritmo con un ciclo
// Simulador interactivo
// Funciones

function infoPrecio(codigo) {
    switch (parseInt(codigo)) {
        case 1:
            console.log("El plan DIAMANTE cuesta $12000")
            break;
        case 2:
            console.log("El plan ORO cuesta $10000")
            break;
        case 3:
            console.log("El plan PLATA cuesta $7000")
            break;
        case 4:
            console.log("El plan BRONCE cuesta $5500")
            break;
        case 5:
            console.log("El plan NATACION cuesta $8000")
            break;
        case 6:
            console.log("El plan MUSCULACION cuesta $8000")
            break;
        case 7:
            console.log("El plan FITNESS cuesta $6000")
            break;
        default:
            console.warn("No entendimos tu selección 🤔")
            break;
    }
}

function infoCuotas() {
    let intereses = " sin recargo"
    console.warn("Nuestros planes tienen: 👇 ")
    for (let i = 1; i <= 6; i++) {
        if (i > 1) {
            intereses = " con recargo"
        }
        console.log(i + " cuota(s)" + intereses)
    }
}

function infoPlanes() {
    let respuesta = confirm("¿Desea conocer el precio de algun plan?")
    if (respuesta === true) {
        let codigo = parseInt(prompt("Ingresa el codigo de plan: "))
        if (codigo === 1 || codigo === 2 || codigo === 3 || codigo === 4 || codigo === 5 || codigo === 6 ||codigo === 7) {
            infoPrecio(codigo)
            let respuestaComprar = confirm("¿Quiere comprar el plan? 🤑")
            if (respuestaComprar === true) {
                infoCuotas()
                alert("✅ Para confirmar la compra comuniquese al +54 11 23456789")
                console.warn("¡Muchisimas gracias!")
                if (respuesta === false) {
                    console.warn("¡Te esperamos la proxima!")
                }
            } else {
                console.warn("Lo esperamos pronto!")
            }
        } else {
            console.warn("¡Vuelva a intentar!")
        }
    } else {
        console.warn("👍No olvides consultarnos cuando lo necesites 👍")
    }
}

// SEGUNDA PRE ENTREGA

const carrito = []

const planes = [{imagen: "💎", codigo: 1, nombre: "Plan DIAMANTE", precio: 12000},
                {imagen: "🥇", codigo: 2, nombre: "Plan ORO", precio: 10000},
                {imagen: "🥈", codigo: 3, nombre: "Plan PLATA", precio: 7000},
                {imagen: "🥉", codigo: 4, nombre: "Plan BRONCE", precio: 5500},
                {imagen: "🏊‍♂️", codigo: 5, nombre: "Plan NATACION", precio: 8000},
                {imagen: "🏋️‍♀️", codigo: 6, nombre: "Plan MUSCULACION", precio: 8000},
                {imagen: "🤸", codigo: 7, nombre: "Plan FITNESS", precio: 6000}]

function buscarPlanes(codigo) {
    let resultado = planes.find((plan)=> plan.codigo === parseInt(codigo))
    return resultado 
}

class Compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal() {
        if(this.carrito.length > 0) {
            return this.carrito.reduce((acc, plan)=> acc + plan.precio, 0)
        }
    }
}

function verPlanes(){
    let planesCod = planes.map((plan)=>{
        return{
            codigo: plan.codigo,
            nombre: plan.nombre
        }
    })
    console.table(planesCod)
}

function finalizarCompra(){
    const shopping = new Compra(carrito)
    console.log("El total de su compra es " + shopping.obtenerSubtotal())
}

function comprar() {
    let codigo = prompt("Ingresa el codigo del plan:")
    let planElegido = buscarPlanes(codigo)
    if (planElegido !== undefined) {
        carrito.push(planElegido)
        alert("Se ha agregado " + planElegido.nombre + " al carrito. 💪🏻")
        let respuesta = confirm("¿Quieres comprar algun otro plan?")
        if (respuesta === true) {
            comprar()
        } else {
            console.warn("No olvides de finalizar tu compra")
            console.table(carrito)
            finalizarCompra()
            infoCuotas()
            alert("✅ En unos momentos lo contactaremos para finalizar su compra. Muchas gracias!")
        }
    } else {
        alert("Error en el plan ingresado. Vuelva a intentarlo desde el comienzo")
    }
}