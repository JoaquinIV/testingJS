
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

    })
})

// #NACHO
//     def test_titularTarjetaString(self):
//         self.assertTrue(TransaccionPago("Pedro Fernandez", 1234, "En espera").esNombreTitularString())

//     #NACHO
//     def test_titularTarjetaCadenaVacia(self):
//         self.assertFalse(TransaccionPago("Pedro Fernandez", 1234, "En espera").esNombreCadenaVacia())

//     #NACHO
//     def test_fechaActualTransaccion(self):
//         self.assertEqual(TransaccionPago("Pedro Fernandez", 1234, "En espera").fechaActualTransaccion, datetime.today())