import React ,{useEffect, useState} from "react";
import "../css/home.css"
import lupa from "../logo/lupa.jpg"
import Logo from "../componentes/logo.js";

const FotosOficinas=[{contenido:"https://i.ibb.co/0sV4Lc7/images.jpg"},{contenido:"https://i.ibb.co/882k2cN/download.jpg"},{contenido:"https://i.ibb.co/0qHxTzD/images.jpg"},{contenido:"https://www.eloficial.ec/wp-content/uploads/2020/08/portada-arq-dis.png"}]



const Home = ({setHamburguesa,BD,usuario,setUsuario}) => {
    const [oficinas,setOficinas]=useState([""])
    const [fotoOficinas,setFotoOficina]=useState([""])

        useEffect(()=>{
            async function fetchData(){
                const res1=await BD.from('oficina').select('id_oficina,tamaño,sillas,baños,ambientes,armarios,calle,altura,computadoras,personas,localidad:id_localidad(nombre),barrio:id_barrio(nombre),usuario:id_usuario(nombre,apellido,mail),precio,duracion:id_duracion(tiempo),descripcion').range(0,4).order('id_oficina',{ascending:true})
                setOficinas(res1.data)
                // oficinas.forEach(async (oficina)=>{
                //     const foto=await BD.from('foto').select().eq('id_oficina',oficina.id_oficina)

                //     setFotoOficina([...fotoOficinas, foto.data[0]])
                // })
            }

          fetchData();

          setHamburguesa()
        },[])
    return(
        <div>
            <div className="buscador">
                <div className="busqueda">
                    <input type="text" name="busqueda" placeholder ="  Busca según sus preferencias"></input>
                    <div className="ciruclo"></div>
                </div>
                <div className="opciones">
                    <div className="custom-select">
                        <div className="select-selected">Fecha</div>
                            <div className="select-items select-hide">
                            </div>
                        <div className="select-selected">Ubicacion</div>
                            <div className="select-items select-hide">
  
                            </div>
                        <div className="select-selected">Precio</div>
                            <div className="select-items select-hide">
                                
                            </div>
                        <div className="select-selected">Ambientes</div>
                            <div className="select-items select-hide">
                                
                            </div>
                        <div className="select-selected">Mas Filtros</div>
                            <div className="select-items select-hide">
                                
                            </div>
                    </div>
                </div>
            </div>
            <div className="container">
                    <div className="fila">
                        <div className="oficina">
                            <img src={FotosOficinas[0].contenido} alt="fotoOficina1"/>
                        </div>
                        <div className="oficina">
                        <img src={FotosOficinas[1].contenido} alt="fotoOficina1"/>
                        </div>
                        <div className="oficina">
                        <img src={FotosOficinas[2].contenido} alt="fotoOficina1"/>
                        </div>
                        <div className="oficina">
                        <img src={FotosOficinas[3].contenido} alt="fotoOficina1"/>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="oficina">
                            <img src={FotosOficinas[0].contenido} alt="fotoOficina1"/>
                        </div>
                        <div className="oficina">
                        <img src={FotosOficinas[1].contenido} alt="fotoOficina1"/>
                        </div>
                        <div className="oficina">
                        <img src={FotosOficinas[2].contenido} alt="fotoOficina1"/>
                        </div>
                        <div className="oficina">
                        <img src={FotosOficinas[3].contenido} alt="fotoOficina1"/>
                        </div>
                    </div>  
            </div>
        </div>
    )
}
export default Home;