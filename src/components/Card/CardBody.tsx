import { ReactNode } from "react";
import { TbTemperatureCelsius } from 'react-icons/tb'

interface CardTopProps {
    temp: number;
    weatherDescription: string;
}


export function CardBody({ temp, weatherDescription }: CardTopProps) {

    return (
        <div className="my-20">


            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center">
                    <div className="text-9xl leading-none font-light">
                        {temp}
                    </div>

                    <div className="text-4xl">
                        <TbTemperatureCelsius />
                    </div>
                </div>

                <div className="capitalize">
                    {weatherDescription}
                </div>
            </div>
        </div>
    )
}