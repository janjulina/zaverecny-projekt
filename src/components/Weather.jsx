import { useState, useEffect } from 'react'
import './weather.css'

const API_KEY = import.meta.env.VITE_API_KEY

export function Weather({ city }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&units=metric&appid=${API_KEY}`)
            const json = await response.json()
            setData(json)
        }
        getData()
    }, [city])

    if (data === null) {
        return <p>Načítám předpověď...</p>
    }

    return (
        <div className="weather-row">
            <div className="weather-container">
                <h1>{city}</h1>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
                <h2>{data.main.temp.toFixed(1)} &deg;C</h2>
                <p>Rychlost větru {data.wind.speed.toFixed(0)} m/s</p>
                <p>Nejnižší teplota: {data.main.temp_min.toFixed(1)} &deg;C</p>
                <p>Nejvyšší teplota: {data.main.temp_max.toFixed(1)} &deg;C</p>
            </div>
            <div className="weather-container">
                <h3>Další informace</h3>
                <p>Vlhkost: {data.main.humidity} %</p>
                <p>Tlak: {data.main.pressure} hPa</p>
                <p>Oblačnost: {data.clouds.all} %</p>
                <p>Pocitová teplota: {data.main.feels_like.toFixed(1)} &deg;C</p>
                 <img
                className="info-icon"
                src="https://cdn-icons-png.flaticon.com/128/728/728093.png"
            />
            </div>
        </div>
    )
}
