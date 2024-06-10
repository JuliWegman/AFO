import React,{useState,useEffect} from 'react'

function App() {
  const [oficinas, setOficinas] = useState([]);

  useEffect(() => {
    const fetchOficinas = async () => {
      try {
        const response = await fetch('http://localhost:5000/apiAFO');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setOficinas(data.oficina);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOficinas();
  }, []);

  return (
    <div>
      <h2>{oficinas}</h2>
    </div>
  )
}

export default App