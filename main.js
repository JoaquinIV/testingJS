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
    setFechaActual(){
        return this.fechaActualTransacción;
    }
    
}

module.exports = { 
    TransaccionPago, 
};

