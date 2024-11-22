import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../css/formPublicar.css';

function FormPublicar ({subirOficina,mensaje}) {
    const localidad=1
    const [calle,setCalle]=useState("")
    const [altura,setAltura]=useState("")
    const [piso,setPiso]=useState("")
    const [cantidadPersonas,setCantidadPersonas]=useState(0)
    const [descripcion,setDescripcion]=useState("")
    const [tamaño,setTamaño]=useState(0)
    const [escritorio,setEscritorio]=useState(0)
    const [baños,setBaños]=useState(0)
    const [ambientes,setAmbientes]=useState(0)
    const [armarios,setArmarios]=useState(0)
    const [computadoras,setComputadoras]=useState(0)
    const [barrio,setBarrio]=useState(1)
    const [sillas,setSillas]=useState(1)



    const [pagina,setPagina]=useState(1)
    

    const handleSubmit=()=>{
        const oficina={piso:piso,tamaño:tamaño,escritorio:escritorio,baños:baños,ambientes:ambientes,armarios:armarios,calle:calle,altura:altura,computadoras:computadoras,descripcion:descripcion,personas:cantidadPersonas,id_localidad:localidad,id_barrio:barrio}
        subirOficina(oficina)
    }

    return (
        <div className="ContainerForm">
            <div className="textoForm">
                {pagina>1&&<h2 onClick={()=>setPagina(pagina-1)} style={{cursor:"pointer"}}>&lt;</h2>}
                {pagina===1&& <Link to={"/"}><h2>&lt;</h2></Link>}

                <h2>Pone en alquiler tu oficina</h2>
            </div>

            <div className="formularios">
                {pagina===1?
                    <>
                        
                        <select className="input-field" onChange={(e)=>setBarrio(e.target.value)}>
                            {[{nombre:"Palermo",id:1}, {nombre:"Recoleta",id:2}].map((barrio) => (
                                <option
                                    value={barrio.id}
                                    className="custom-checkbox"
                                >{barrio.nombre}</option>
                                
                            ))}
                        </select>
                        <input
                            type="text"
                            id="calle"
                            value={calle}
                            className="input-field"
                            placeholder="Calle"
                            onChange={(e) => setCalle(e.target.value)}
                            required
                        />                
                        <input
                            className="input-field"
                            type="number"
                            id="altura"
                            value={altura}
                            placeholder="Altura"
                            onChange={(e) => setAltura(e.target.value)}
                            required
                            />  
                        <input
                            type="text"
                            id="Piso/Departamento"
                            value={piso}
                            className="input-field"
                            placeholder="Piso/Departamento (Opcional)"
                            onChange={(e) => setPiso(e.target.value)}
                        />
                        
                        <input
                            type="text"
                            id="Descripcion"
                            value={descripcion}
                            className="input-field"
                            placeholder="Añade una Descripcion..."
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                        <button className="submit-btn" onClick={()=>{setPagina(2)}}>Siguiente</button>

                    </>
                    :pagina===2?
                    <>
                    <div className="inputNumero">
                        <label htmlFor="Tamaño">tamaño (en m2):</label>
                        <input
                            type="number"
                            id="Tamaño"
                            placeholder="Tamaño"
                            value={tamaño}
                            onChange={(e) => setTamaño(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputNumero">

                        <label htmlFor="cantPersonas">personas:</label>
                        <input
                            type="number"
                            id="cantPersonas"
                            value={cantidadPersonas}
                            placeholder="Cantidad de Personas Que Entran"
                            onChange={(e) => setCantidadPersonas(e.target.value)}
                            required
                        />
                        </div>

                    <div className="inputNumero">
                        <label htmlFor="escritorios">escritorios:</label>
                        <input
                            type="number"
                            id="escritorios"
                            value={escritorio}
                            placeholder="Escritorios"
                            onChange={(e) => setEscritorio(e.target.value)}
                            required
                        />
                        </div>

                        <div className="inputNumero">
                        <label htmlFor="baños">baños:</label>
                        <input
                            type="number"
                            id="baños"
                            value={baños}
                            placeholder="Baños"
                            onChange={(e) => setBaños(e.target.value)}
                            required
                        />
                        </div>

                        <div className="inputNumero">
                        <label htmlFor="armarios">armarios:</label>
                        <input
                            type="number"
                            id="armarios"
                            value={armarios}
                            placeholder="Armarios"
                            onChange={(e) => setArmarios(e.target.value)}
                            required
                        />
                        </div>
                        <div className="inputNumero">
                        <label htmlFor="ambientes">ambientes:</label>
                        <input
                            type="number"
                            id="ambientes"
                            value={ambientes}
                            placeholder="ambientes"
                            onChange={(e) => setAmbientes(e.target.value)}
                            required
                        />
                        </div>

                        <div className="inputNumero">
                        <label htmlFor="computadoras">computadoras:</label>
                        <input
                            type="number"
                            id="computadoras"
                            value={computadoras}
                            placeholder="computadoras"
                            onChange={(e) => setComputadoras(e.target.value)}
                            required
                        />
                        </div>

                        <div className="inputNumero">
                        <label htmlFor="sillas">sillas:</label>
                        <input
                            type="number"
                            id="sillas"
                            value={sillas}
                            placeholder="sillas"
                            onChange={(e) => setSillas(e.target.value)}
                            required
                        />
                        </div>
                        <button className="submit-btn" onClick={()=>{setPagina(3)}}>Siguiente</button>

                    </>
                    :pagina===3&&
                    <>
                        
                        <button type="submit" className="submit-btn" onClick={handleSubmit}>Subir</button>
                        <h2>{mensaje}</h2>
                    </>
                }
            </div>
        </div>
    );
};

export default FormPublicar;
