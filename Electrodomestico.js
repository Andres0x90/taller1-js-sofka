class Electrodomestico {
    

    constructor(consumo, procedencia)
    {
        this.precioConsumo = 0;
        this.precioProcedencia = 0;
        this.precioTotal = 0;
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.setPrecioConsumo(this.consumo);
        this.setPrecioProcedencia(this.procedencia);
        this.setPrecioTotal();
    }

    getConsumo()
    {
        return this.consumo;
    }

    getPrecioConsumo() {
        return this.precioConsumo;
    }

    getProcedencia()
    {
        return this.procedencia;
    }

    getPrecioProcedencia() {
        return this.precioProcedencia;
    }

    getPrecioTotal() {
        return this.precioTotal;
    }

    setPrecioConsumo(consumo){
        switch (consumo.toLowerCase()) {
            case "a":{
                this.precioConsumo = 450000;
                break;
            }
            case "b":{
                this.precioConsumo = 350000;
                break;
            }
            case "c":{
                this.precioConsumo = 250000;
                break;
            }
            default:{
                this.precioConsumo = 0;
                break;
            }
        }
    }
    setPrecioProcedencia(procedencia){
        switch (procedencia.toLowerCase()) {
            case "nacional":{
                this.precioProcedencia = 250000;
                break;
            }
            case "importado":{
                this.precioProcedencia = 350000;
                break;
            }
            default:{
                this.precioProcedencia = 0;
                break;
            }
        }
    }
    setPrecioTotal(){
        this.precioTotal = this.precioConsumo + this.precioProcedencia;
    }

}

