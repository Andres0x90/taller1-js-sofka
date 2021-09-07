 class Televisor extends Electrodomestico {

     constructor(consumo, procedencia, tamano, tdt) {
        super(consumo,procedencia);
        this.tamano, this.precioTamano, this.precioTdt;
        this.tdt = false;
        this.tamano = tamano;
        this.tdt = tdt;

        this.setPrecioTamano(this.tamano);
        this.setPrecioTdt(this.tdt);
        this.setPrecioTotal();
    }

    getTamano()
    {
        return this.tamano;
    }

    getTdt()
    {
        return this.tdt;
    }

     getPrecioTamano() {
        return this.precioTamano;
    }

     getPrecioTdt() {
        return this.precioTdt;
    }

    setPrecioTamano(tamano){
        if (tamano > 40){
            this.precioTamano = super.getPrecioTotal()*0.3;
        } else {
            this.precioTamano = 0;
        }
    }
    setPrecioTdt(tdt) {
        if (this.tdt) {
            this.precioTdt = 250000;
        } else {
            this.precioTdt = 0;
        }
    }
    setPrecioTotal() {
        if (this.precioTamano === undefined || this.precioTdt === undefined)
            this.precioTotal = this.getPrecioConsumo() + this.getPrecioProcedencia();
        else
            this.precioTotal = this.getPrecioConsumo() + this.getPrecioProcedencia() + 
            this.precioTamano + this.precioTdt;
    }

}