import { twMerge } from "tailwind-merge";

export default function StepButton({ title, description }) {
    return (
        <button
            className={twMerge(
                "bg-white w-full shadow border border-zinc-200 text-black rounded-lg py-3 px-5 text-left flex flex-col",
                "hover:bg-blue-700 hover:text-white",
            )}
        >
            <span className="text-xl font-bold">{title}</span>
            {description && <span>{description}</span>}
        </button>
    );
}