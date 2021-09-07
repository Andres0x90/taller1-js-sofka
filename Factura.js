class Factura
{
    constructor(nombre, inventario)
    {
        this.nombre = nombre;
        this.inventario = inventario;
        this.items = []
    }

    addItem(item)
    {
        this.items.push(item);
    }

    getPrecioTotal()
    {
        let total = 0;

        this.items.forEach((element) => 
        {
            total += element.getPrecioTotal();
        });

        return total;
    }

    loadItems()
    {
        this.items.forEach((element, i) =>
        {
            let cantidadesPositivas = true;

            switch(typeof element)
            {
                case "Electrodomestico":
                    cantidadesPositivas = this.inventario.removeElectrodomestico();
                break;
                case "Televisor":
                    cantidadesPositivas = this.inventario.removeTelevisor();
                break;

                case "Nevera":
                    cantidadesPositivas = this.inventario.removeElectrodomestico();
                break;
            }

            if (!cantidadesPositivas)
                break;
        });

        return cantidadesPositivas;
    }

    printFactura()
    {
        let printedFactura = {nombre: this.nombre};
        let printedItems = [];

        this.items.forEach((element, i) =>
        {

            switch(typeof element)
            {
                case "Electrodomestico":
                    printedItems.push(
                        {
                            producto: "Electrodomestico",
                            procedencia: element.getPrecedencia(),
                            consumo: element.getConsumo(),
                            precio: element.getPrecioTotal()
                        });                
                break;
                case "Televisor":
                    printedItems.push(
                        {
                            producto: "Televisor",
                            procedencia: element.getPrecedencia(),
                            consumo: element.getConsumo(),
                            tamano: element.getTamano(),
                            tdt: element.getTdt(),
                            precio: element.getPrecioTotal()
                        });
                    
                break;

                case "Nevera":
                    printedItems.push(
                        {
                            producto: "Nevera",
                            procedencia: element.getPrecedencia(),
                            consumo: element.getConsumo(),
                            capacidad: element.getCapacidad(),
                            precio: element.getPrecioTotal()
                        });
                break;
            }
        });
        
        printedFactura.items = printedItems;
    }
}