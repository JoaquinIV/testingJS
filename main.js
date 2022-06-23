// from datetime import datetime

class TransaccionPago{
    
    constructor(nombreTitularTransaccion,digitosTarjetaTransaccion,estadoTransaccion){
        this.nombreTitularTransaccion = nombreTitularTransaccion;
        this.digitosTarjetaTransaccion = digitosTarjetaTransaccion;
        this.fechaActualTransacción = Date.now();
        this.estadoTransaccion = estadoTransaccion;     
    }

    //IGNA
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

    //SARA
    esNombreAlfabetico(){
        return /^[a-zA-Z()]+$/.test(this.nombreTitularTransaccion.split(" ").join(""));
    }
    nroDigitosTarjetaTransaccion(){
        return this.digitosTarjetaTransaccion.toString().length;
    }

    //JULI
    tipoIntNumeroTransaccion(){
     return Number.isInteger(this.digitosTarjetaTransaccion);
    }
    
}

class Pago{
    // clientePago: aca va la instancia de cliente

    constructor(codigoPago,nroFactura,montoPago,estadoPago = "Pendiente"){
        this.codigoPago = codigoPago;
        this.nroFactura = nroFactura;
        this.montoPago = montoPago;
        this.estadoPago = estadoPago;
        this.fechaCreacionPago = Date.now();
    }

    //JUAN
    codigoContieneSoloAlfanumericos(){
        return /^[0-9A-Za-z]+$/.test(this.codigoPago);
    }
    
    esEstadoPendiente(){
        return this.estadoPago == "Pendiente"
    }
   

}


    

module.exports = { 
    TransaccionPago, 
    Pago,
};

