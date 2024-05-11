import StepButton from "@/components/ui/step-button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>État de la personne</h1>
      <p className="font-semibold">La victime respire :</p>
      <Link href={'/consciente'}>
        <StepButton title={'Consciente'} description={'La victime respire et est capable de répondre'} />
      </Link>
      <Link href={'/inconsciente'}>
        <StepButton title={'Inconsciente'} description={'La victime respire mais ne répond pas et ne réagit pas'} />
      </Link>
      <p className="font-semibold">La victime ne respire plus :</p>
      <Link href={'/arret-cardiaque'}>
        <StepButton title={'Arrêt cardiaque'} description={'La victime n\'a plus de pouls'} />
      </Link>
    </div>
  );
}
