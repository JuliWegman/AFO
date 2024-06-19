import React,{useState,useEffect} from 'react'
import axios from 'axios'


function App() {
  const [oficina, setOficina] = useState({});

  useEffect(() => {
    axios.get('/oficina/1')
    .then(res=>{setOficina(res.data)})
  }, []);

  return (
    <div>
      <header/>
      <h2>{oficina.calle}</h2>
      <footer/>
    </div>
  )
}
export default App