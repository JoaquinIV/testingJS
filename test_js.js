
const assert = require('assert');
const {TransaccionPago, Pago} = require('./main');

describe("Pruebas unitarias TransaccionPago", () => {
    
    describe("Pruebas ignacio", () => {
        
        it("Verificamos si el titular de la tarjeta es una variable string", () =>{
            let transaccionPrueba = new TransaccionPago("Pedro Fernandez", 1234, "En espera");
            assert.equal(transaccionPrueba.esNombreTitularString(), 'string');
        })

        it("Verificamos si el titular de la tarjeta no sea una cadena vacía", () =>{
            let transaccionPrueba = new TransaccionPago("Pedro Fernandez", 1234, "En espera");
            assert.equal(transaccionPrueba.esNombreCadenaVacia(),false);
        })

        it("Verificamos si el titular de la tarjeta no sea una cadena vacía", () =>{
            let transaccionPrueba = new TransaccionPago("Pedro Fernandez", 1234, "En espera");
            assert.equal(transaccionPrueba.setFechaActual(), Date.now());
        })

        it("Verificamos que nos retorne el nombre del titular", () =>{
            let transaccionPrueba = new TransaccionPago("Pedro Fernandez", 1234, "En espera");
            assert.equal(transaccionPrueba.nombreTitular(), "Pedro");
        })

    })

    describe("Pruebas sara", () => {
        
        it("Verificamos si el titular de la tarjeta es una variable string alfabética", () =>{
            let transaccionPrueba = new TransaccionPago("Victor Nomberto", 1234, "En espera");
            assert.equal(transaccionPrueba.esNombreAlfabetico(), true);
        })

        it("Verificamos si el nro de tarjeta contiene 4 digitos", () =>{
            let transaccionPrueba = new TransaccionPago("Victor Nomberto", 1234, "En espera");
            assert.equal(transaccionPrueba.nroDigitosTarjetaTransaccion(), 4);
        })

    })

    describe("Pruebas juli", () => {
        
        it("Verificamos si el nro de tarjeta es entero", () =>{
            let transaccionPrueba = new TransaccionPago("Victor Nomberto", 1234, "En espera");
            assert.equal(transaccionPrueba.tipoIntNumeroTransaccion(), true);
        })

    })
})

describe("Pruebas unitarias Pago", () => {
    
    describe("Pruebas Juan", () => {
        
        it("Verificamos el codigo de pago es alfanumerico", () =>{
            let pagoPrueba = new Pago("ASDF1234", 1234, 5000.22, "Pendiente");
            assert.equal(pagoPrueba.codigoContieneSoloAlfanumericos(), true);
        })

        it("Verificamos si el estado de pago es pendiente como defecto", () =>{
            let pagoPrueba = new Pago("ASDF1234", 1234, 5000.22);
            assert.equal(pagoPrueba.esEstadoPendiente(), true);
        })
    })

    describe("Pruebas Franco", () => {
        
        it("Verificamos el codigo de pago tiene ocho dígitos", () =>{
            let pagoPrueba = new Pago("ASDF1234", 1234, 5000.22, "Pendiente");
            assert.equal(pagoPrueba.tieneOchoDigitosCodigoPago(), true);
        })

        it("Verificamos si el monto de pago es un tipo float", () =>{
            let pagoPrueba = new Pago("ASDF1234", 1234, 5000.22, "Pendiente");
            assert.equal(pagoPrueba.esFloatMontoPago(), true);
        })
    })
})