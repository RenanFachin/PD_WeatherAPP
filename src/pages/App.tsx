import { useState, useEffect } from 'react'

// icons
import { IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm, IoMdSearch } from 'react-icons/io'
import { BsCloudHaze2Fill, BsCloudDrizzleFill } from 'react-icons/bs'
import { TbMist } from 'react-icons/tb'

import { api } from '../services/api'
import { Loader } from '../components/Loader'
import { Card } from '../components/Card/Card'
import { CardTop } from '../components/Card/CardTop'
import { CardBody } from '../components/Card/CardBody'
import { CardBottom } from '../components/Card/CardBottom'

const APIKey = import.meta.env.VITE_API_KEY

interface WeatherAPIData {
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    tempo_min: number
  },
  name: string;
  sys: {
    country: string;
  },
  weather: Array<{
    main: string;
    description: string;
  }>,
  visibility: number;
  wind: {
    speed: number;
  }
}




export function App() {


  const [data, setData] = useState<WeatherAPIData | null>(null)
  const [location, setLocation] = useState('São paulo')

  // fetch api data
  useEffect(() => {
    api.get(`/weather?q=${location}&units=metric&lang=pt_br&appid=${APIKey}`).then(res => {
      setData(res.data)
    })
  }, [location])

  console.log(data)

  // Renderizando um componente de loading enquanto os dados não são retornados da API
  if (!data) {
    return (
      <Loader />
    )
  }


  let icon
  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy />;
      break;
    case 'Clear':
      icon = <IoMdSunny />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill />;
      break;
    case 'Snow':
      icon = <IoMdSnow />;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
    case 'Mist':
      icon = <TbMist />
      break;
  }

  const temperatureInCelcius = parseInt(data.main.temp.toFixed(0))
  const formatedFeelsLikeInCelcius = parseInt(data.main.feels_like.toFixed(0))
  const parsedVisibility = data.visibility / 1000


  return (
    <div className='w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0'>
      <form></form>
      form

      <Card>
        <div>
          <CardTop
            icon={icon}
            countryName={data.name}
            countryAcronym={data.sys.country}
          />



          <CardBody
            temp={temperatureInCelcius}
            weatherDescription={data.weather[0].description}
          />


          <CardBottom
            visibility={parsedVisibility}
            feels_like={formatedFeelsLikeInCelcius}
            humidity={data.main.humidity}
            wind={data.wind.speed}
          />
        </div>
      </Card>
    </div>


  )
}

