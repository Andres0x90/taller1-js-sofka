class Nevera extends Electrodomestico{

    constructor(consumo, procedencia, capacidad) {

        super(consumo, procedencia);
        this.capacidad = capacidad;
        this.precioCapacidad = 0;
        this.setPrecioCapacidad(this.capacidad);
        this.setPrecioTotal();
    }

    getCapacidad()
    {
        return this.capacidad;
    }

    getPrecioCapacidad() {
        return this.precioCapacidad;
    }

    setPrecioCapacidad(capacidad) {
        if (this.capacidad > 120){
            this.capacidadExtra = 0; 
            let incremento = 0;
            this.capacidadExtra = Math.floor((this.capacidad - 120) / 10);
            for (let i = 0; i < this.capacidadExtra; i++) {
                incremento += 0.05;
            }
            this.precioCapacidad = this.getPrecioTotal() * incremento;
        } else {
            this.precioCapacidad = 0;
        }
    }
    setPrecioTotal(){
        if (this.precioCapacidad === undefined)
            this.precioTotal = this.getPrecioConsumo() + this.getPrecioProcedencia();
        else
            this.precioTotal = this.getPrecioConsumo() + this.getPrecioProcedencia() + 
            this.precioCapacidad;
    }




}