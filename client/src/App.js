import React,{useState,useEffect} from 'react'
import axios from 'axios'


function App() {
  const [oficinas, setOficinas] = useState([]);

  useEffect(() => {
    axios.get('/apiAFO')
    .then(res=>{setOficinas(res.data.oficina)})
  }, []);

  return (
    <div>
      <h2>{oficinas}</h2>
    </div>
  )
}

export default App