import StepButton from "@/components/ui/step-button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Arrêt cardiaque</h1>
      <p className="font-semibold">Le coeur de la victime s'est arrêté</p>
      <Link href={'/etat'}>
        <StepButton title={'Consciente'} description={'La victime respire et est capable de répondre'} />
      </Link>
      <Link href={'/etat'}>
        <StepButton title={'Inconsciente'} description={'La victime respire mais ne répond pas et ne réagit pas'} />
      </Link>
      <p className="font-semibold">La victime ne respire plus :</p>
      <Link href={'/etat'}>
        <StepButton title={'Arrêt cardiaque'} description={'La victime n\'a plus de pouls'} />
      </Link>
    </div>
  );
}
