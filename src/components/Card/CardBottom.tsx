import { BsEye, BsThermometer, BsWater, BsWind } from 'react-icons/bs'
import { TbTemperatureCelsius } from 'react-icons/tb'


interface CardBottomProps {
    visibility: number;
    feels_like: number;
    humidity: number;
    wind: number;
}

export function CardBottom({ visibility, feels_like, humidity, wind }: CardBottomProps) {
    return (
        <div className='max-w-sm mx-auto flex flex-col gap-6'>
            <div className='flex justify-around'>
                <div className='flex items-center gap-2'>
                    <div className='text-xl'>
                        <BsEye />
                    </div>

                    <div>
                        Visibility:
                        <span className='ml-2'>
                            {visibility} km
                        </span>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='text-xl'>
                        <BsThermometer />
                    </div>

                    <div className='flex'>
                        Feels like:
                        <span className='flex items-center ml-3'>
                            {feels_like} <TbTemperatureCelsius size={24} />
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex justify-around'>
                <div className='flex items-center gap-2'>
                    <div className='text-xl'>
                        <BsWater />
                    </div>

                    <div>
                        Humidity:
                        <span className='ml-2'>
                            {humidity} %
                        </span>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='text-xl'>
                        <BsWind />
                    </div>

                    <div>
                        Wind:
                        <span className='ml-3'>
                            {wind} km/h
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}