class Producto {
    constructor(rubro, marca, codigo, talle, precio) {
        this.rubro = rubro;
        this.marca = marca;
        this.codigo = codigo;
        this.talle = talle;
        this.precio = precio;
    }
}

const arrayProductos = [];

function carga() {
    let rubro = prompt("rubro");
    let marca = prompt("marca");
    let codigo = prompt("codigo");
    let talle = prompt("talle");
    let precio = prompt("precio");
    let producto = new Producto(rubro, marca, codigo, talle, precio);
    arrayProductos.push(producto);
}

function eliminarProducto() {
    let codigo = prompt("Ingrese el código del producto para eliminarlo");
    let producto = arrayProductos.find((producto) => producto.codigo === codigo);

    if (producto) {
        let indice = arrayProductos.indexOf(producto);
        arrayProductos.splice(indice, 1);
        console.log("Producto eliminado correctamente.");
    } else {
        console.log("El código ingresado no está en la base de datos.");
        alert("El código ingresado no está en la base de datos.")
    }
}

function filtrarProducto() {
    let busquedaFiltrado = (prompt("Ingrese el rubro del producto que desea buscar"));
    let filtrado = arrayProductos.filter((producto) => producto.rubro.includes(busquedaFiltrado));
    console.log(filtrado);
}

function repetir() {
    const preguntaSeguir = prompt("Presione:\n1 - Para cargar un producto.\n2 - Para eliminar un producto.\n3 - Para buscar un producto.\n4 - Para finalizar.");
    if (preguntaSeguir === "1") {
        carga();
        repetir();
    } else if (preguntaSeguir === "2") {
        eliminarProducto();
        repetir();
    }
    else if (preguntaSeguir === "3") {
        filtrarProducto();
        repetir();
    }
    else if (preguntaSeguir === "4") {
        console.log(arrayProductos)
    }
    else {
        alert("opcion no correcta");
        repetir();
    }
}

repetir();











