
const assert = require('assert');
const {TransaccionPago} = require('./main');

describe("Pruebas unitarias TransaccionPago", () => {
    
    describe("Pruebas ignacio", () => {
        
        it("Verificamos si el titular de la tarjeta es una variable string", () =>{
            let transaccionPrueba = new TransaccionPago("Pedro Fernandez", 1234, "En espera");
            assert.equal(transaccionPrueba.esNombreTitularString(), 'string')
        })

        it("Verificamos si el titular de la tarjeta no sea una cadena vacía", () =>{
            let transaccionPrueba = new TransaccionPago("Pedro Fernandez", 1234, "En espera");
            assert.equal(transaccionPrueba.esNombreCadenaVacia(),false)
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