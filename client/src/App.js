import React from 'react'
import OficinaEnEspecial from './views/oficinaEnEspecial.js';
import Home from "./views/Home.js";
import { createClient } from '@supabase/supabase-js';
const BDconfig={
    key:process.env.KEY_SUPABASE ||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJieWp0a2N0ZXN0ZGRmenJreHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTYxNzMsImV4cCI6MjAzMjk5MjE3M30.7tVPa4prqRVWLhuISTg97e1eulZv09UqD-p5Pca4nx8"
    ,url:process.env.URL_SUPABASE ||"https://bbyjtkctestddfzrkxug.supabase.co"
  }
  const base=createClient(BDconfig.url,BDconfig.key)

function App() {
  return (
    <div id="todo">
      <Home BD={base}/>  
        </div>
    )
}
export default App