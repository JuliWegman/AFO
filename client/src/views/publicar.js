import React,{useState} from "react";
 import axios from "axios";
import '../css/publicar.css';
import FormPublicar from "../componentes/formPublicar";
import SubirImagen from "../componentes/subirImagen";
import { Link ,useNavigate} from "react-router-dom";


const Publicar = ({usuario}) => { 
    const [imagen, setImagen] = useState(null);
    const [mensaje,setMensaje]=useState("")
    const navigate=useNavigate()

    async function subirOficina(oficina){

        oficina.id_usuario=Number.parseInt(usuario.id_usuario)
        oficina.imagen=imagen;
        if (oficina.calle==="" || oficina.piso==='' ||oficina.descripcion==="") {
            setMensaje("FALTAN CAMPOS")
            return 0;
        }else if(oficina.imagen==null){
            setMensaje("FALTAN SUBIR UNA IMAGEN")
            return 0;
        }else{
            console.log(oficina);
            
            const res1=await axios.post("/oficina",oficina);
            alert("Oficina subida")
            navigate("/HomePro")
        }

    }
    return (
        <div className="ContainerPublicar">
            <div className="formPublicar">
                <FormPublicar  subirOficina={subirOficina} mensaje={mensaje}/> 
            </div>
            <div className="SubirImagen">
                <SubirImagen imagen={imagen} setImagen={setImagen}/> 
            </div>
        </div>
    );
};

export default Publicar;
