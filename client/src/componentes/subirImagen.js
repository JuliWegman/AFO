import React, { useState } from "react";
import '../css/subirImagen.css';

const SubirImagen = () => {
    const [imagen, setImagen] = useState(null);

    // Manejar la selección de la imagen
    const manejarCambio = (e) => {
        const archivo = e.target.files[0];
        if (archivo) {
            setImagen(URL.createObjectURL(archivo)); // Crear una URL temporal para la imagen seleccionada
        }
    };

    // Función para abrir el explorador de archivos al hacer clic en el contenedor
    const abrirExplorador = () => {
        document.getElementById("input-imagen").click();
    };

    return (
        <div className="container-subir-imagen" onClick={abrirExplorador}>
            {/* Solo mostrar el texto si no se ha seleccionado una imagen */}
            {!imagen && (
                <div className="subirTexto">
                    <h2>Pulsa aquí para subir una imagen</h2>
                </div>
            )}

            {/* Input oculto para seleccionar la imagen */}
            <input
                type="file"
                accept="image/*"
                onChange={manejarCambio}
                className="input-imagen"
                id="input-imagen"
            />

            {/* Previsualización de la imagen seleccionada */}
            {imagen && (
                <div className="previsualizacion-imagen">
                    <img src={imagen} alt="Imagen seleccionada" className="imagen-prevista" />
                </div>
            )}
        </div>
    );
};

export default SubirImagen;
