import StepButton from "@/components/ui/step-button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Reconnaissance</h1>
      <p className="font-semibold">Réaction rapide :</p>
      <Link href={'/etouffement'}>
        <StepButton title={'Étouffement'} description={'La personne s\'étouffe: elle ne peut ni crier, ni tousser, ni émettre un son, l\'obstruction de la voie respiration est complète'} />
      </Link>
      <Link href={'/arret-cardiaque'}>
        <StepButton title={'Arrêt cardiaque'} description={'Le coeur de la personne A MODIFIER'} />
      </Link>
      <p className="font-semibold">La personne ne respire plus :</p>
      <Link href={'/arret-cardiaque'}>
        <StepButton title={'Arrêt cardiaque'} description={'La personne n\'a plus de pouls'} />
      </Link>
    </div>
  );
}
