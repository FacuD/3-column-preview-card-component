let columna_seleccionada = 0

const columnas = document.querySelectorAll(".columnas")  // [sedans, suvs, luxury]

columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function() {
        cambiarColumna(indice)
    })
})

function cambiarColumna(indice) {
    columnas[columna_seleccionada].classList.remove("seleccionada")
    columnas[indice].classList.add("seleccionada")
    columna_seleccionada = indice
}