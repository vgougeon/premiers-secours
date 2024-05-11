import StepButton from "@/components/ui/step-button";
import Telephone from "@/components/ui/telephone";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <h1>Alertez</h1>
            {/* <div className="flex gap-2 p-2 border shadow">
        <h3>Consciente</h3>
        <span></span>
      </div> */}
            <p><b>Alertez</b> les secours ! Gardez votre calme et donnez leur:</p>
            <ul className="list-disc pl-4">
                <li>La <b>nature du problème</b></li>
                <li>La <b>localisation</b> la plus précise possible</li>
                <li>Votre <b>numéro de téléphone</b></li>
            </ul>
            <p>Gardez la communication active, et passez à la suite en cliquant sur <b>"Continuer"</b> plus bas</p>
            <div className="grid grid-cols-4 w-full gap-2">
                <Telephone number={18} name={'Pompiers'} className={'bg-red-600'} />
                <Telephone number={15} name={'SAMU'} className={'bg-blue-700'} />
                <Telephone number={112} name={'Numéro européen'} className={'bg-cyan-600'} />
                <Telephone number={114} name={'Numéro textuel'} className={'bg-zinc-600'} />
            </div>

            <Link href={'/etat'}>
                <StepButton title={'Continuer'} description={'L\'appel est en cours, ou quelqu\'un d\'autre s\'en occupe.'} />
            </Link>
        </div>
    );
}
