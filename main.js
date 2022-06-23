// from datetime import datetime

class TransaccionPago{
    
    constructor(nombreTitularTransaccion,digitosTarjetaTransaccion,estadoTransaccion){
        this.nombreTitularTransaccion = nombreTitularTransaccion;
        this.digitosTarjetaTransaccion = digitosTarjetaTransaccion;
        this.fechaActualTransacción = Date.now();
        this.estadoTransaccion = estadoTransaccion;     
    }

    //Nacho
    esNombreTitularString(){
        return typeof(this.nombreTitularTransaccion);
    }
    esNombreCadenaVacia(){
        return this.nombreTitularTransaccion.length == 0;
    }
    nombreTitular(){
        return this.nombreTitularTransaccion.split(" ")[0]
    }
    setFechaActual(){
        return this.fechaActualTransacción;
    }

    // SARA
    esNombreAlfabetico(){
        return /^[a-zA-Z()]+$/.test(this.nombreTitularTransaccion.split(" ").join(""));
    }
    nroDigitosTarjetaTransaccion(){
        return this.digitosTarjetaTransaccion.toString().length;
    }

    // JULI
    tipoIntNumeroTransaccion(){
     return Number.isInteger(this.digitosTarjetaTransaccion);
    }
    
}

module.exports = { 
    TransaccionPago, 
};

