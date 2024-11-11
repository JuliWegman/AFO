import React from "react";
import '../css/formPublicar.css';

const formPublicar = () => {
    return (
        <div className="ContainerForm">
            <div className="textoForm">
                <h2>&lt;</h2>
                <h2>Pone en alquiler tu oficina</h2>
            </div>
            <div className="formularios">
                <input type="text" placeholder="Nombre y Apellido" className="input-field" required />
                <input type="text" placeholder="Provincia" className="input-field" required/>
                <input type="text" placeholder="Calle" className="input-field" required/>
                <input type="text" placeholder="Altura" className="input-field" required/>
                <input type="text" placeholder="Piso/Departamento (Opcional)" className="input-field" />
                <input type="text" placeholder="Cantidad de Personas que entran" className="input-field" required/>
                <input placeholder="Añade una descripción..." className="input-field"></input>
                <button type="submit" className="submit-btn">Siguiente</button>
            </div>
        </div>
    );
};

export default formPublicar;
