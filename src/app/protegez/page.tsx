import Figure from "@/components/ui/figure";
import StepButton from "@/components/ui/step-button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Protégez</h1>
      {/* <div className="flex gap-2 p-2 border shadow">
        <h3>Consciente</h3>
        <span></span>
      </div> */}
      <p><b>Protégez</b> la victime et les tiers. <b>Supprimez</b> si possible la source du danger, et <b>dégagez</b> la victime si elle est encore en situation de danger réel, immédiat et non contrôlable</p>


      <div className="grid grid-cols-2 w-full gap-2">
        <div className="col-span-2">
          <Figure id={1} description="Supprimer danger et isoler" />
        </div>
        <Figure id={2} description="Traction par les poignets" />
        <Figure id={3} description="Traction par les chevilles" />
      </div>

      <Link href={'/alert'}>
        <StepButton title={'C\'est fait'} description={'Vous avez dégagé la victime d\'un danger immédiat non contrôlable'} />
      </Link>
    </div>
  );
}
