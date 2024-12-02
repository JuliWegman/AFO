import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/formPublicar.css';

function FormPublicar({ subirOficina, mensaje }) {
  const localidad = 1;
  const [calle, setCalle] = useState("");
  const [altura, setAltura] = useState("");
  const [piso, setPiso] = useState("");
  const [cantidadPersonas, setCantidadPersonas] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [tamaño, setTamaño] = useState(0);
  const [escritorio, setEscritorio] = useState(0);
  const [baños, setBaños] = useState(0);
  const [ambientes, setAmbientes] = useState(0);
  const [armarios, setArmarios] = useState(0);
  const [computadoras, setComputadoras] = useState(0);
  const [barrio, setBarrio] = useState(1);
  const [sillas, setSillas] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [pagina, setPagina] = useState(1);

  const [selectedDuration, setSelectedDuration] = useState(null);

  const handleSelectDuration = (duration) => {
    setSelectedDuration(duration);
  };

  const handleSubmit = () => {
    const oficina = {
      piso,
      tamanio : tamaño,
      escritorio,
      banios:baños,
      ambientes,
      armarios,
      calle,
      altura,
      computadoras,
      descripcion,
      sillas,
      precio,
      id_duracion:selectedDuration,
      personas: cantidadPersonas,
      id_localidad: localidad,
      id_barrio: barrio,
    };
    subirOficina(oficina);
  };



    return (
        <div className="ContainerForm">
            <div className="flecha">
                {pagina>1&&<h2 onClick={()=>setPagina(pagina-1)} style={{cursor:"pointer"}}>&lt;</h2>}
                {pagina===1&& <Link to={"/"}><h2>&lt;</h2></Link>}

                
            </div>

            <div className="formularios">
                {pagina===1?
                    <>
                    <div className="textoForm">
                    <h2>Pone en alquiler tu oficina</h2>
                    </div>
                        
                        <select className="input-field" onChange={(e)=>setBarrio(Number.parseInt(e.target.value))}>
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
                            type="number"
                            id="altura"
                            value={altura}
                            className="inputAltura"
                            placeholder="Altura"
                            onChange={(e) => setAltura(Number.parseInt(e.target.value))}
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
                    
                    <div className="textoForm">
                    <h2>¿Como esta equipada tu oficina?</h2>
                    </div>
                    <div className="inputNumero">
                        <label htmlFor="Tamaño">Tamaño (en m2):</label>
                        <input
                            min = "0"
                            type="number"
                            id="Tamaño"
                            placeholder="Tamaño"
                            value={tamaño}
                            onChange={(e) => setTamaño(Number.parseInt(e.target.value))}
                            required
                        />
                    </div>
                    <div className="inputNumero">

                        <label htmlFor="cantPersonas">Personas:</label>
                        <input
                            type="number"
                            id="cantPersonas"
                            value={cantidadPersonas}
                            placeholder="Cantidad de Personas Que Entran"
                            onChange={(e) => setCantidadPersonas(Number.parseInt(e.target.value))}
                            required
                        />
                        </div>

                    <div className="inputNumero">
                        <label htmlFor="escritorios">Escritorios:</label>
                        <input
                            type="number"
                            id="escritorios"
                            value={escritorio}
                            placeholder="Escritorios"
                            onChange={(e) => setEscritorio(Number.parseInt(e.target.value))}
                            required
                        />
                        </div>

                        <div className="inputNumero">
                        <label htmlFor="baños">Baños:</label>
                        <input
                            type="number"
                            id="baños"
                            value={baños}
                            placeholder="Baños"
                            onChange={(e) => setBaños(Number.parseInt(e.target.value))}
                            required
                        />
                        </div>

                        <div className="inputNumero">
                        <label htmlFor="armarios">Armarios:</label>
                        <input
                            type="number"
                            id="armarios"
                            value={armarios}
                            placeholder="Armarios"
                            onChange={(e) => setArmarios(Number.parseInt(e.target.value))}
                            required
                        />
                        </div>
                        <div className="inputNumero">
                        <label htmlFor="ambientes">Ambientes:</label>
                        <input
                            type="number"
                            id="ambientes"
                            value={ambientes}
                            placeholder="ambientes"
                            onChange={(e) => setAmbientes(Number.parseInt(e.target.value))}
                            required
                        />
                        </div>

                        <div className="inputNumero">
                        <label htmlFor="computadoras">Computadoras:</label>
                        <input
                            type="number"
                            id="computadoras"
                            value={computadoras}
                            placeholder="computadoras"
                            onChange={(e) => setComputadoras(Number.parseInt(e.target.value))}
                            required
                        />
                        </div>

                        <div className="inputNumero">
                        <label htmlFor="sillas">Sillas:</label>
                        <input
                            type="number"
                            id="sillas"
                            value={sillas}
                            placeholder="sillas"
                            onChange={(e) => {setSillas(Number.parseInt(e.target.value));console.log(sillas);}}
                            required
                        />
                        </div>
                        <button className="submit-btn" onClick={()=>{setPagina(3)}}>Siguiente</button>

                    </>
                    :pagina===3&&
                    <>
                         <div className="formularios">
        {pagina === 3 && (
          <>
            <div className="textoForm">
              <h2>Tiempo en alquiler</h2>
            </div>

            <div className="duration-options">
              {['Día', 'Mes', 'Semana', 'Año'].map((label, index) => {
                const value = index + 1; 
                return (
                  <div
                    key={value}
                    className={`duration-option ${selectedDuration === value ? 'selected' : ''}`}
                    onClick={() => handleSelectDuration(value)}
                  >
                    {label}
                  </div>
                );
              })}
            </div> 
            <label className="textoPrecio" htmlFor="Precio">Precio</label>
            <div className="contPrecio">  
              <div className="inputNumero2"> 
                        <input
                            type="number"
                            id="Precio"
                            placeholder="$"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            required
                        />
              </div>
              {selectedDuration === 1 ? 
              <div className="TextoDuracion">
                <h3>Por Día</h3>
              </div>: selectedDuration === 2 ? <div className="TextoDuracion">
                <h3>Por Mes</h3>
              </div> : selectedDuration === 3 ? <div className="TextoDuracion">
                <h3>Por Semana</h3>
              </div> :  selectedDuration === 4 ?<div className="TextoDuracion">
                <h3>Por Año</h3>
              </div> : <h3> </h3>}
            </div>
          
        
            
            <button type="submit" className="submit-btn" onClick={handleSubmit}>Finalizar</button>
            
            <h2>{mensaje}</h2>
          </>
        )}
      </div>
                    </>
                }
            </div>
        </div>
    );
};

export default FormPublicar;
