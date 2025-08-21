import { useState } from 'react'
import './App.css'

import { Weather } from './components/Weather'

function App() {
  const [city, setCity] = useState('Praha')

  return (
    <>
    <div className="city-select-container">
    <label htmlFor="city" className="city-select-label">Vyber město:</label>
     <select value={city} onChange={(event) => setCity(event.target.value)}>
      <option>Praha</option>
      <option>Brno</option>
      <option>Ostrava</option>
      <option>Sydney</option>
      <option>Bukurešť</option>
      <option>Valencia</option>
      <option>Bratislava</option>
      <option>Košice</option>

     </select>
     </div>
      
     <Weather city={city}/>
    </>
  )
}

export default App
