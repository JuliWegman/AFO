import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../componentes/header.js';
import Footer from '../componentes/footer.js';
import '../css/oficinaEnEspecial.css'

function OficinaEnEspecial() {
  const [oficina, setOficina] = useState({});

  useEffect(() => {
    axios.get('/oficina/1')
    .then(res=>{setOficina(res.data)})
  }, []);

  return (
    <div className='TODO'>
      <Header/>
      <div className='Container'>
          <div className='Cont-I'>
              <h2>{oficina.calle}</h2>
          </div>
          <div className='Cont-D'>
            <p>HHHHHHHHH</p>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
export default OficinaEnEspecial