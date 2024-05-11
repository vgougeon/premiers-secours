import StepButton from "@/components/ui/step-button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <h1>Obstruction partielle</h1>
            <p>L'obstruction n'étant que <b>partielle</b>, laissez la personne tousser, incitez la à le faire afin de rejeter le corps étranger.</p>
            <p><b>Soyez attentif</b>, si l'obstruction devient complète, vous devrez agir, cliquez ci-dessous</p>

            <Link href={'/etouffement/obstruction-complete'}><StepButton
                title={'L\'obstruction est devenue complète'}
                description={'La personne ne peut ni crier, ni tousser, ni émettre un son, l\'obstruction de la voie respiration est complète'}
            />
            </Link>


        </div>
    );
}
