

import {useState, useEffect} from 'react'

const API_KEY = import.meta.env.VITE_API_KEY

export function Weather ({city}) {

    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},&units=metric&appid=${API_KEY}`)
            const json = await response.json()
            setData(json)
        }
        getData()

    }, [city])
        
        
    
    return (
            
            <>
                {
                    data === null ? (
                        <p>Načítám předpověď...</p>
                    ) : (
                        <div>
                            <h1>{city}</h1>
                            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
                            <h2>{data.main.temp.toFixed(1)} &deg;C</h2>
                            <p>Rychlost větru {data.wind.speed.toFixed(0)} m/s</p>
                            
                            
                        </div>
                    )
                }
            </>
    )
}

