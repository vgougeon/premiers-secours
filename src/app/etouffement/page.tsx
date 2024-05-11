import StepButton from "@/components/ui/step-button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Étouffement</h1>
      <p className="font-semibold">
        Si la personne ne peut ni tousser, ni émettre un son
      </p>
      <Link href={'/etouffement/obstruction-complete'}>
        <StepButton title={'Obstruction complète'} description={'La personne ne peut ni tousser, ni émettre un son'} />
      </Link>
      <p className="font-semibold">
        Si la personne tousse, choisissez <b>"obstruction partielle".</b>
      </p>
      <Link href={'/etouffement/obstruction-partielle'}>
        <StepButton title={'Obstruction partielle'} description={'La personne tousse,'} />
      </Link>
    </div>
  );
}
