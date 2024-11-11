import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/publicar.css';
import { Link } from "react-router-dom";
import FormPublicar from "../componentes/formPublicar";
import SubirImagen from "../componentes/subirImagen";

const limit = 9;
const user = 1;  
const Duraciones = [{ duracion: "Día" }, { duracion: "Mes" }, { duracion: "Semana" }, { duracion: "Año" }];
const Barrios = [{ barrio: "Caballito" }, { barrio: "Recoleta" }];

const Publicar = ({ setIDoficina }) => {  
    const [oficinas, setOficinas] = useState([]); 
    const [link, setLink] = useState(`/oficina?limit=${limit}&offset=0&id_usuario=${user}`);
    
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get(link);
                const oficinasFiltradas = res.data.data.filter(ofi => ofi.id_usuario === user); 
                setOficinas(oficinasFiltradas); 
            } catch (error) {
                console.error("Error al obtener datos:", error.response?.data);
                setOficinas([]);  
            }
        }

        getData();  

    }, [link]);  
    
    return (
        <div className="ContainerPublicar">
            <div className="formPublicar">
                <FormPublicar /> 
            </div>
            <div className="SubirImagen">
                <SubirImagen /> 
            </div>
        </div>
    );
};

export default Publicar;
