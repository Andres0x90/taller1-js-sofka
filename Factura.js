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

    unLoadItems()
    {
        let cantidadesPositivas = true;

        this.items.forEach((element, i) =>
        {
            if(element.constructor === Electrodomestico)
                cantidadesPositivas = this.inventario.removeElectrodomestico(element);
            else if (element.constructor === Televisor)
                cantidadesPositivas = this.inventario.removeTelevisor(element);
            else
                cantidadesPositivas = this.inventario.removeNevera(element);
        

            if (!cantidadesPositivas)
                return cantidadesPositivas;
        });

        return cantidadesPositivas;
    }

    printFactura()
    {
        let printedFactura = [{nombre: this.nombre}];
        let printedItems = [];

        this.items.forEach((element, i) =>
        {
            if(element.constructor === Electrodomestico)
            {
                    printedItems.push(
                        {
                            producto: "Electrodomestico",
                            procedencia: element.getProcedencia(),
                            consumo: element.getConsumo(),
                            precio: element.getPrecioTotal()
                        });    
            }
            else if (element.constructor === Televisor)
            {            
                    printedItems.push(
                        {
                            producto: "Televisor",
                            procedencia: element.getProcedencia(),
                            consumo: element.getConsumo(),
                            tamano: element.getTamano(),
                            tdt: element.getTdt(),
                            precio: element.getPrecioTotal()
                        });
            }
            else
            {
                printedItems.push(
                    {
                        producto: "Nevera",
                        procedencia: element.getProcedencia(),
                        consumo: element.getConsumo(),
                        capacidad: element.getCapacidad(),
                        precio: element.getPrecioTotal()
                    });

            }
        });
        
        printedFactura.push(printedItems);
        printedFactura.push({precioTotal:this.getPrecioTotal()})
        return printedFactura;
    }
}