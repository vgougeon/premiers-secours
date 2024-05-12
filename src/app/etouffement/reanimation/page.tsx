import Reanimation from "@/components/blocks/reanimation";

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <h1>Réanimation après perte de connaissance lors de l'étouffement</h1>
            <p>La personne a perdu connaissance, <b>elle ne respire plus et son coeur ne bat plus</b></p>

            {/* <Link href={'/etouffement/obstruction-complete'}><StepButton
                title={'L\'obstruction est devenue complète'}
                description={'La personne ne peut ni crier, ni tousser, ni émettre un son, l\'obstruction de la voie respiration est complète'}
            />
            </Link> */}
            <Reanimation />

        </div>
    );
}
