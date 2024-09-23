import React,{useState,useEffect} from 'react'
 import axios                   from 'axios'
import Logo                       from '../componentes/logo.js';
import Modal                      from '../componentes/Modal.js';
import Fotos                      from '../componentes/Fotos.js';
import ubicacionImg               from '../logo/ubicacion.png';
import Ubicacion                  from '../componentes/ubicacion.js';
import area                       from '../logo/area.png';
import sillas                     from '../logo/silla.png';
import ambientes                  from '../logo/ambientes.png';
import '../css/oficinaEnEspecial.css'
import Footer from '../componentes/footer.js';


var IDvendedor=1;
const IDusuario=3;



 

function OficinaEnEspecial({IdOficina,setHamburguesa,splideFoto,setSplideFoto,popUpMensaje,setPopUpMensaje,usuario}) {
  const [oficina, setOficina] = useState({});
  const [fotoOficina, setFotoOficina] = useState([""]);
  const [duracion, setDuracion] = useState("");
  const [vendedor, setVendedor] = useState({});
  const [localidad, setLocalidad] = useState("");
  const [barrio, setBarrio] = useState({});
  const [abierto,setAbierto]=useState(false)


  async function PostMensaje(contenido,mail,telefono){
    axios.post('/mensaje',{
      "id_enviador":usuario.id_usuario,
      "id_receptor":IDvendedor,
      "contenido":contenido,
      "mail":mail,
      "telefono":telefono,
      "fecha":new Date(Date.now())
    })
 }
  useEffect(() => {
    async function getData(){
      const res1=await axios.get('/oficina/'+IdOficina)
      setOficina(res1.data);
      setLocalidad(res1.data.localidad);
      setBarrio({nombre:res1.data.barrio});
      setDuracion(res1.data.duracion);

      const res2= await axios.get('/oficina/'+IdOficina+'/fotos')
      setFotoOficina(res2.data);

      const res3=await axios.get('/usuario/' + IDvendedor)
      setVendedor(res3.data);

      setAbierto(true)
    }

    getData()
    setHamburguesa(false)

  }, []);

  if (!abierto) return <div>Cargando</div>
  return (
    <>
    <div className='capa' id='capa1' onClick={()=>{setPopUpMensaje(false);setSplideFoto(false);const cap=document.getElementById("capa1"); cap.style.visibility='hidden';const scroll=document.getElementsByTagName("body");scroll[0].style.overflowY="auto"}}></div>

    <Fotos open={splideFoto} fotos={fotoOficina} />
    <Modal open={popUpMensaje} close={()=>{setPopUpMensaje(false);const cap=document.getElementById("capa1"); cap.style.visibility='hidden'}} children={
      <div className='popUp'>
        <div className='mensaje'>
          <form className="formularioMail">
            <label className="form-label">Escriba su mensaje</label>
            <div className='contForm'>
            <input id="inputMail" className='inputDatos' type='email' defaultValue={usuario.mail} required/>
            <input id="inputTelefono" className='inputDatos' type='tel' defaultValue={usuario.telefono} required/>
            <textarea id='inputPopUpMensaje' name="myTextarea" placeholder="Ingrese su mensaje" cols="20" rows="10" minlength="10" maxlength="500" required></textarea>
            </div>
            <div className='boton-V'>
            <a href='#header'><button  onClick={()=>{
                PostMensaje(document.getElementById("inputPopUpMensaje").value,document.getElementById("inputMail").value,document.getElementById("inputTelefono").value);
                setPopUpMensaje(false);const cap=document.getElementById("capa1"); cap.style.visibility='hidden'
                
            }}>Enviar</button></a>
          </div>
          </form>
          
        </div>
        <div></div>
      </div>
    }/>

    <div>
      <div className='Container'>
          <div className='Cont-I'>
            {oficina.personas>1?
            <h2>Oficina en {oficina.calle} {oficina.altura}, {barrio.nombre} para {oficina.personas} Personas</h2>:
            <h2>Oficina en {oficina.calle} {oficina.altura}, {barrio.nombre} para una persona</h2>}
              <div className='fotoOfi'>
              <a href='#header'><img src={fotoOficina[0].contenido} alt="oficina" onClick={()=>{setSplideFoto(true);const cap=document.getElementById("capa1"); cap.style.visibility='visible';const scroll=document.getElementsByTagName("body");scroll[0].style.overflowY="hidden" }}/></a>
                <div className='circulo'>
                  <h2>🡢</h2>
                </div>
              </div>
              <h3>{oficina.descripcion}</h3>
          </div>
          <div className='Cont-D'>
            {fotoOficina.length>1 &&
              <div className='Fotos'>
                <div className='foto'>
                <a href='#header'><img src={fotoOficina[1].contenido} alt="foto oficina" onClick={()=>{setSplideFoto(true);const cap=document.getElementById("capa1"); cap.style.visibility='visible';const scroll=document.getElementsByTagName("body");scroll[0].style.overflowY="hidden"}} /></a>
                </div>
                {fotoOficina.length>2 &&
                  <div className='foto'>
                    <a href='#header'><img src={fotoOficina[2].contenido} alt="foto oficina" onClick={()=>{setSplideFoto(true);const cap=document.getElementById("capa1"); cap.style.visibility='visible';const scroll=document.getElementsByTagName("body");scroll[0].style.overflowY="hidden"}}/></a>
                  </div>}
                        {fotoOficina.length-3>0 &&
                          <div className='fotoDifu'>
                            <a href='#header'><img src={fotoOficina[3].contenido} alt="foto oficina" onClick={()=>{setSplideFoto(true);const cap=document.getElementById("capa1"); cap.style.visibility='visible';const scroll=document.getElementsByTagName("body");scroll[0].style.overflowY="hidden"}}/></a>
                            <h2>+{fotoOficina.length-3}</h2>
                          </div>

                        }

                </div>
            }
           
            <div className='Card2'>
              <div className='contactar'>
                <div className='datosUser'>
                  <img src={vendedor.foto} alt="foto vendedor"/>
                  <div className='texto'>
                    <h3>{vendedor.nombre} {vendedor.apellido}</h3>
                    <h4>{localidad}</h4>
                  </div>
                </div>
                <button className='boton-N' onClick={()=>{setPopUpMensaje(true);const cap=document.getElementById("capa1"); cap.style.visibility='visible';const scroll=document.getElementsByTagName("body");scroll[0].style.overflowY="hidden"}}><a href='#header'>Contactar</a></button>
              </div>
            </div>
            <div className='Card'>
              <div className='alquilar'>
                <h2>${oficina.precio} ARS Por {duracion} </h2>
                <button className='boton-R'>Alquilar</button>
              </div>
              <div className='datos'>
                <div className='Area'>
                  <Logo img = {area}/>
                  <h4>{oficina.tamaño}m²</h4>
                </div>
                <div className='Ambientes'>
                  <Logo img ={ambientes}/>
                  <h4>{oficina.ambientes} Ambientes</h4>
                </div>
                <div className='Escritorio'>
                  <Logo img = {sillas}/>
                  <h4>{oficina.sillas} Sillas</h4>
                </div>

                <div className='mas'>
                  <h4>Ver Mas🡣</h4>
                </div>
              </div>
              <div className='ubicacion'>
                <Ubicacion img = {ubicacionImg}/>
              </div>
            </div>
          </div>
      </div>
      

    </div>
    <div className='footerEnEspecial'>
            <Footer/>
            </div>
    </>
  )
}
export default OficinaEnEspecial