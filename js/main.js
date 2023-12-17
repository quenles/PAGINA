const productos = [


    {
        "id": "abrigo-01",
        "titulo": "Cuaderno 01",
        "imagen": "./img/cuadernos/01.jpg",
        "categoria": {
            "nombre": "Cuadernos",
            "id": "cuadernos"
        },
        "precio": 7
    },
    {
        "id": "abrigo-02",
        "titulo": "Cuaderno 02",
        "imagen": "./img/cuadernos/02.jpg",
        "categoria": {
            "nombre": "Cuadernos",
            "id": "cuadernos"
        },
        "precio": 7
    },
    {
        "id": "abrigo-03",
        "titulo": "Cuaderno 03",
        "imagen": "./img/cuadernos/03.jpg",
        "categoria": {
            "nombre": "cuadernos",
            "id": "cuadernos"
        },
        "precio": 6
    },
    {
        "id": "abrigo-04",
        "titulo": "Cuaderno 04",
        "imagen": "./img/cuadernos/04.jpg",
        "categoria": {
            "nombre": "cuadernos",
            "id": "cuadernos"
        },
        "precio": 4
    },
    {
        "id": "abrigo-05",
        "titulo": "Cuaderno 05",
        "imagen": "./img/cuadernos/05.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "cuadernos"
        },
        "precio": 5
    },
    {
        "id": "camiseta-01",
        "titulo": "Crayones 01",
        "imagen": "./img/camisetas/01.jpg",
        "categoria": {
            "nombre": "Crayones",
            "id": "camisetas"
        },
        "precio": 12
    },
    {
        "id": "camiseta-02",
        "titulo": "Crayones 02",
        "imagen": "./img/camisetas/02.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 19
    },
    {
        "id": "camiseta-03",
        "titulo": "Crayones 03",
        "imagen": "./img/camisetas/03.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 9
    },
    {
        "id": "camiseta-04",
        "titulo": "Crayones 04",
        "imagen": "./img/camisetas/04.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 10
    },
    {
        "id": "camiseta-05",
        "titulo": "Crayones 05",
        "imagen": "./img/camisetas/05.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 8
    },
    {
        "id": "camiseta-06",
        "titulo": "Crayones 06",
        "imagen": "./img/camisetas/06.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 14
    },
    {
        "id": "camiseta-07",
        "titulo": "Crayones 07",
        "imagen": "./img/camisetas/07.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 11
    },
    {
        "id": "camiseta-08",
        "titulo": "Crayones 08",
        "imagen": "./img/camisetas/08.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 10
    },
    {
        "id": "pantalon-01",
        "titulo": "Lapiz Mongol",
        "imagen": "./img/pantalones/01.jpg",
        "categoria": {
            "nombre": "Lapiceros",
            "id": "pantalones"
        },
        "precio": 2
    },
    {
        "id": "pantalon-02",
        "titulo": "Lapicero Bic",
        "imagen": "./img/pantalones/02.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 6
    },
    {
        "id": "pantalon-03",
        "titulo": "Lapicero 03",
        "imagen": "./img/pantalones/03.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 3
    },
    {
        "id": "pantalon-04",
        "titulo": "Lapicero 04",
        "imagen": "./img/pantalones/04.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 4
    },
    {
        "id": "pantalon-05",
        "titulo": "lapiz 05",
        "imagen": "./img/pantalones/05.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 5
    }
];



const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">Q${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
    generarPDFProductos(productosElegidos);
}

function generarPDFProductos(productos) {
    const options = {
        margin: 10,
        filename: 'lista_productos.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    const btnGenerarPDF = document.getElementById('btnGenerarPDF');
btnGenerarPDF.addEventListener('click', function() {
    // Obtener los productos (puedes obtenerlos de tu fuente de datos)
    const productosElegidos = obtenerProductos();

    // Llamar a la función cargarProductos con los productos
    cargarProductos(productosElegidos);
});

function obtenerProductos() {
    // Aquí deberías implementar la lógica para obtener los productos
    // Puedes obtenerlos de una fuente de datos, una API, etc.
    // Por ahora, solo retornaré un conjunto de productos de ejemplo.
    return [
        { id: 1, titulo: 'Producto 1', precio: 50, imagen: 'imagen1.jpg' },
        { id: 2, titulo: 'Producto 2', precio: 75, imagen: 'imagen2.jpg' },
        // ... otros productos
    ];
}

    // Crear un elemento div temporal para el contenido de los productos
    const contenidoProductos = document.createElement('div');
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">Q${producto.precio}</p>
            </div>
        `;
        contenidoProductos.append(div);
    });

    // Generar el PDF
    html2pdf()
        .from(contenidoProductos)
        .set(options)
        .outputPdf(pdf => {
            // Descargar el PDF
            const a = document.createElement('a');
            a.href = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
            a.download = 'lista_productos.pdf';
            a.click();
        });
}



botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}