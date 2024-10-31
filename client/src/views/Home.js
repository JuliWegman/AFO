import React, { useEffect, useState } from "react";
import "../css/home.css";
import Footer from "../componentes/footer.js";
import { Link } from 'react-router-dom';
import axios from "axios";
import Filtros from "../componentes/filtros.js";

const Barrios = [{ barrio: "Caballito" }, { barrio: "Recoleta" }];
const Duraciones = [{ duracion: "Día" },{ duracion: "Mes" },{ duracion: "Semana" },   { duracion: "Año" }];
const limit = 9;

const Home = ({ setIDoficina, setHamburguesa, usuario, setUsuario }) => {
    const [oficinas, setOficinas] = useState([]); 
    const [next, setNext] = useState();
    const [previous, setPrevious] = useState([]);
    const [link, setLink] = useState(`/oficina?limit=${limit}&offset=0`);
    const [abierto, setAbierto] = useState(false);
    const [cantidad, setCantidad] = useState(0);
    const [pagina, setPagina] = useState(1);
    const [params,setParams]=useState({})
    const [ticker,setTicker]=useState(1)
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get(link);
                setOficinas(res.data.data || []);
                setNext(res.data.paginacion.nextPage);
                setCantidad(res.data.paginacion.total);
                setAbierto(true);
            } catch (error) {
                console.error("Error al obtener datos:", error.response.data);
                setOficinas([]); 
            }
        }

        getData();
        setHamburguesa();
    }, [link,ticker]);

    const handleApplyFilters = (appliedFilters) => {
    
        // Construimos la URL solo con parámetros válidos
            setParams(new URLSearchParams({
            limit,
            offset: 0,
            ...(appliedFilters.max_precio && { max_precio: appliedFilters.max_precio }),
            ...(appliedFilters.min_precio && { min_precio: appliedFilters.min_precio }),
            ...(appliedFilters.ambientes && appliedFilters.ambientes !== "0" && { ambientes: appliedFilters.ambientes }),
            ...(appliedFilters.id_duracion && appliedFilters.id_duracion.length > 0 && { id_duracion: appliedFilters.id_duracion }), 
            ...(appliedFilters.barrio && appliedFilters.barrio.length > 0 && { barrio: appliedFilters.barrio }),
            ...(appliedFilters.fecha_inicio && { fecha_inicio: appliedFilters.fecha_inicio }),
            ...(appliedFilters.fecha_fin && { fecha_fin: appliedFilters.fecha_fin }),
        }).toString())
        console.log(`URL ES: /oficina?${params}`);
        setLink(`/oficina?${params}`);
        setPagina(1);
        setPrevious([]);
        setTicker(ticker+1)
    };
    
    
    
    function Siguiente() {
        if (limit * pagina < cantidad) {
            setPagina(pagina + 1);
            setPrevious([...previous, link]);
            setLink(next+params);
        }
    }

    function Anterior() {
        if (previous.length > 0) {
            const newLink = previous[previous.length - 1];
            setLink(newLink);
            setPrevious(previous.slice(0, previous.length - 1));
            setPagina(pagina - 1);
        }
    }

    if (!abierto) return null;

    return (
        <div>
            <div className="container">
                <div className="filtros">
                    <Filtros onApplyFilters={handleApplyFilters} />
                </div>
                <div className="containerDerecha">
                    <div className="filaa">
                        {oficinas.length > 0 ? ( // Verifica si hay oficinas antes de mapear
                            oficinas.map(ofi => (
                                <div className="oficina" key={ofi.id_oficina} onClick={() => { setIDoficina(ofi.id_oficina) }}>
                                    <Link to='/oficina'>
                                        <img src={ofi.foto} alt="fotoOficina1" />
                                        <div className="info">
                                            <h3>${ofi.precio} Por {Duraciones[ofi.id_duracion - 1].duracion}</h3>
                                            <p>{ofi.calle} {ofi.altura}, {Barrios[0].barrio}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No se encontraron oficinas.</p> // Mensaje si no hay oficinas
                        )}
                    </div>
                    <div className="containerBoton">
                        <div className="pagination">
                            {previous.length > 0 ? (
                                <button className="arrow-button prev" id="1" aria-label="Anterior" onClick={Anterior}>&lt;</button>
                            ) : (
                                <button className="arrow-button prev disabled" id="1" aria-label="Anterior" disabled>&lt;</button>
                            )}
                            {limit * pagina < cantidad ? 
                                <button className="arrow-button next" id="2" aria-label="Siguiente" onClick={Siguiente}>&gt;</button>
                                :
                                <button className="arrow-button next disabled" id="2" aria-label="Siguiente" disabled>&gt;</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
