import { ReactNode } from "react";
import { format } from "date-fns";

interface CardTopProps {
    icon: ReactNode;
    countryName: string;
    countryAcronym: string;
}


const date = format(new Date(), 'dd/MM/yyyy');

export function CardTop({ icon, countryName, countryAcronym }: CardTopProps) {

    return (
        <div className="flex items-center gap-5">
            <div className="text-8xl">
                {icon}
            </div>

            <div>
                <div className="text-2xl font-semibold">
                    {countryName}, {countryAcronym}
                </div>

                <div>
                    {date}
                </div>
            </div>

        </div>
    )
}