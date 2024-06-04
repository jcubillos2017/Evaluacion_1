const detalleimagenes = {
    imagen1: {
        titulo: "Pintura1",
        Descripcion: "pintura acuarela abstracta, La imagen se libera de los derechos de autor bajo Creative Commons CC0.",
        ano: "2024",
        autor: "Juan Perez",
        Precio: "$1.000.000"
    },
    imagen2: {
        titulo: "Pintura2",
        Descripcion: "pintura acuarela abstracta, La imagen se libera de los derechos de autor bajo Creative Commons CC0.",
        ano: "2024",
        autor: "Juan Perez",
        Precio: "$1.000.000",
    },
    imagen3: {
        titulo: "Pintura3",
        Descripcion: "pintura acuarela abstracta, La imagen se libera de los derechos de autor bajo Creative Commons CC0.",
        ano: "2024",
        autor: "Juan Perez",
        Precio: "$1.000.000",
    },
    imagen4: {
        titulo: "Pintura4",
        Descripcion: "pintura acuarela abstracta, La imagen se libera de los derechos de autor bajo Creative Commons CC0.",
        ano: "2024",
        autor: "Juan Perez",
        Precio: "$1.000.000",
    },
    imagen5: {
        titulo: "Pintura5",
        Descripcion: "pintura acuarela abstracta, La imagen se libera de los derechos de autor bajo Creative Commons CC0.",
        ano: "2024",
        autor: "Juan Perez",
        Precio: "$1.000.000",
    },
    imagen6: {
        titulo: "Pintura6",
        Descripcion: "pintura acuarela abstracta, La imagen se libera de los derechos de autor bajo Creative Commons CC0.",
        ano: "2024",
        autor: "Juan Perez",
        Precio: "$1.000.000",
    },
    imagen7: {
        titulo: "Pintura7",
        Descripcion: "pintura acuarela abstracta, La imagen se libera de los derechos de autor bajo Creative Commons CC0.",
        ano: "2024",
        autor: "Juan Perez",
        Precio: "$1.000.000",
    },
    imagen8: {
        titulo: "Pintura8",
        Descripcion: "pintura acuarela abstracta, La imagen se libera de los derechos de autor bajo Creative Commons CC0.",
        ano: "2024",
        autor: "Juan Perez",
        Precio: "$1.000.000",
    }
}

function seleccionimagen(e) {
    console.log("seleccionarimagenes", e)
    const detalleimagen = detalleimagenes[e]
    console.log({ detalleimagen })

    const titulo = detalleimagen.titulo
    const Descripcion = detalleimagen.Descripcion
    const Ano = detalleimagen.ano
    const Autor = detalleimagen.autor
    const Precio = detalleimagen.Precio

    modificartextomodal(titulo, Descripcion, Ano, Autor, Precio)
    abrirmodal()

}

function abrirmodal() {
    document.getElementById("modal-galeria").classList.add('visible')


}

function cerrarmodal() {
    document.getElementById("modal-galeria").classList.remove('visible')
}

function modificartextomodal(titulo, Descripcion, Ano, Autor, Precio) {
    document.getElementById("tituloimagenseleccionada").innerText = titulo
    document.getElementById('descripcionimagen').innerText = Descripcion
    document.getElementById('annoimagen').innerText = Ano
    document.getElementById("autorimagen").innerText = Autor
    document.getElementById("precioimagen").innerText = Precio

}

function borrarimagen(imagenID) {
    const elemento = document.getElementById(imagenID)
    elemento.remove()
}


