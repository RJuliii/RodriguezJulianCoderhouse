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
        if (codigo === 1 || codigo === 2 || codigo === 3 || codigo === 4) {
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