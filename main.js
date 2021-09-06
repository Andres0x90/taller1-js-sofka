let tv = new Nevera("c", "nacional", 300);

let inventario = new Inventario();

console.log(tv.getPrecioTotal());

inventario.addNevera(tv);

console.log(inventario.getElectrodomesticos());
console.log(inventario.getTelevisores());
console.log(inventario.getNeveras());