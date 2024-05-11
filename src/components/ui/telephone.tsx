import { twMerge } from "tailwind-merge";

export default function Telephone({ number, name, className }) {
    return <a href={'tel:' + number} className={twMerge("rounded-lg text-white h-20 px-2 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg bg-opacity-80 hover:bg-opacity-100", className)}>
        <span className="font-semibold text-2xl">{number}</span>
        <span className="text-xs text-center">{name}</span>
    </a>
}