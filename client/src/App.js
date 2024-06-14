import React,{useState,useEffect} from 'react'
import axios from 'axios'


function App() {
  const [oficinas, setOficinas] = useState([]);

  useEffect(() => {
    axios.get('/oficina?limit=1&offset=0')
    .then(res=>{setOficinas(res.data.Oficinas[0].calle); })
  }, []);

  return (
    <div>
      <header/>
      <h2>{oficinas}</h2>
      <footer/>
    </div>
  )
}

export default App