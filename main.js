let inventario = new Inventario();
let factura = new Factura("Andres Mauricio Cano", inventario);

let producto;
let procedencia;
let consumo;

document.getElementById("producto").addEventListener("change", function()
{
    producto  = document.getElementById("producto").value;

    document.getElementById("televisorOptions").
    setAttribute("hidden", "true");
    document.getElementById("neveraOptions").
    setAttribute("hidden", "true");

    switch(producto)
    {
        case "televisor":
            document.getElementById("televisorOptions").
            removeAttribute("hidden");
        break;
        case "nevera":
            document.getElementById("neveraOptions").
            removeAttribute("hidden");
        break;
    }
});

document.getElementById("addItem").addEventListener("click", function(){
    
    producto  = document.getElementById("producto").value;
    procedencia = document.getElementById("procedencia").value;
    consumo = document.getElementById("consumo").value;

    switch(producto)
    {
        case "electrodomestico":
            inventario.addElectrodomestico(
                new Electrodomestico(consumo, procedencia)
            );
        break;
        case "televisor":
            let tamano = parseInt(document.getElementById("tamano").value);
            let tdt = document.getElementById("tdt").value == "true";

            inventario.addTelevisor(
                new Televisor(consumo,procedencia, tamano, tdt)
            );
        break;
        case "nevera":
            let capacidad = parseInt(document.getElementById("capacidad").value);
            inventario.addNevera(
                new Nevera(consumo, procedencia, capacidad)
            );
        break;
    }

    alert("Producto insertado correctamente en el inventario :D");

});

document.getElementById("addItemFactura").addEventListener("click", function()
{
    producto  = document.getElementById("producto").value;
    procedencia = document.getElementById("procedencia").value;
    consumo = document.getElementById("consumo").value;

    switch(producto)
    {
        case "electrodomestico":
            factura.addItem(
                new Electrodomestico(consumo, procedencia)
            );
        break;
        case "televisor":
            let tamano = parseInt(document.getElementById("tamano").value);
            let tdt = document.getElementById("tdt").value == "true";

            factura.addItem(
                new Televisor(consumo,procedencia, tamano, tdt)
            );
        break;
        case "nevera":
            let capacidad = parseInt(document.getElementById("capacidad").value);
            factura.addItem(
                new Nevera(consumo, procedencia, capacidad)
            );
        break;
    }
});

document.getElementById("facturar").addEventListener("click", function()
{
    if (factura.unLoadItems())
    {
        alert("Factura creada e impresa correctamente. Mirar la consola");
        console.log(factura.printFactura());
    }
    else
    {
        alert("Error al crear la facura. Revise el inventario y seleccione productos disponibles");
        alert("Vuelva a rellenar la lista de items");
        factura.items = [];
    }

    console.log(inventario.getElectrodomesticos());
    console.log(inventario.getTelevisores());
    console.log(inventario.getNeveras());
});