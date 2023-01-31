import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

export function Card({ children }: CardProps) {
    return (
        <div className='w-full max-w-md bg-black/20 min-h-[584px] text-white backdrop-blur-2xl rounded-4xl py-12 px-6'>
            {children}
        </div>
    )
}