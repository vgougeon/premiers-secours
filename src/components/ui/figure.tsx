export default function Figure({ id, description }) {
    return <div className="bg-zinc-100 rounded-lg h-16 flex items-center justify-center flex-col">
        <span className="font-semibold">Figure {id}</span>
        <span className="text-xs">{description}</span>
    </div>
}