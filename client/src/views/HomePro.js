import React, { useEffect, useState } from "react";
import "../css/homePro.css";
import Footer from "../componentes/footer.js";
import { Link } from 'react-router-dom';
import axios from "axios";
import Filtros from "../componentes/filtros.js";


const HomePro = ({setIDoficina, setHamburguesa, usuario,}) => {
    const [oficinas, setOficinas] = useState([]); 
    return(
    <div>
        <div className="COntainer">
            <h1 className="titulo">Tus Oficinas</h1>
            <button className="publicar">Publicar Oficina</button>
        </div>
    </div>
    )
}

export default HomePro