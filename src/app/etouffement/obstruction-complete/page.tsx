import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import StepButton from "@/components/ui/step-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <h1>Etouffement</h1>
            <span className="font-bold text-lg text-red-600">A NE FAIRE QU'EN CAS D'OBSTRUCTION COMPLÈTE DE LA VOIE RESPIRATOIRE</span>
            {/* <ul className="list-disc list-inside">
                <li>La personne ne peut ni crier, ni tousser, ni émettre un son</li>
                <li>L'obstruction de la voie respiration est complète</li>
            </ul> */}

            <Tabs defaultValue="adulte">
                <TabsList className="w-full mb-4">
                    <TabsTrigger className="grow" value="adulte">Adulte</TabsTrigger>
                    <TabsTrigger className="grow" value="enfant">Enfant</TabsTrigger>
                    <TabsTrigger className="grow" value="nourisson">Nourisson</TabsTrigger>
                </TabsList>
                <div className="flex flex-col gap-4 pb-4">
                    <p><b>Alterner</b> <span className="text-blue-600">MANOEUVRE 1</span> et <span className="text-blue-600">MANOEUVRE 2</span> jusqu'au dégagement de la voie respiratoire</p>
                    <p>Interrompre les manœuvres de désobstruction dès :</p>
                    <ul className="list-disc list-inside">
                        <li>L’apparition d’une toux, de cris ou de pleurs ;</li>
                        <li>La reprise de la respiration ;</li>
                        <li>Le rejet du corps étranger.</li>
                        <li className="text-red-600">La perte de connaissance, <Link className="text-blue-700 underline" href={'/etouffement/reanimation'}>cliquez ici</Link> </li>
                    </ul>
                </div>
                <TabsContent className="flex flex-col gap-4 mt-0" value="adulte">
                    <h3>Manoeuvre 1</h3>
                    <p className="optional"><b>Penchez</b> la victime vers l'avant, enchainez <b>5</b>
                        {' '}
                        <Popover>
                            <PopoverTrigger className="text-blue-700 underline">claques</PopoverTrigger>
                            <PopoverContent>
                                <p>Coup donné avec le plat de la main.</p>
                            </PopoverContent>
                        </Popover>
                        {' '}
                        dans le dos <b>(entre les deux omoplates)</b>, assez puissante pour provoquer un rejet. <b>Soutenez</b> la personne pour qu'elle ne tombe pas.<br />
                    </p>
                    <img src="/etouffement/manoeuvre-1.png" alt="Manoeuvre 1" className="max-h-64 object-contain rounded-lg bg-zinc-200" />
                    <h3>Manoeuvre 2</h3>
                    <p className="optional">Enchainez <b>5</b>
                        {' '}
                        <Popover>
                            <PopoverTrigger className="text-blue-700 underline">compressions thoraciques</PopoverTrigger>
                            <PopoverContent>
                                <p>Voir l'illustration ci-dessous</p>
                            </PopoverContent>
                        </Popover>
                        {' '}
                        dans le dos, assez puissante pour provoquer un rejet.<br />
                    </p>
                    <img src="/etouffement/manoeuvre-2.png" alt="Manoeuvre 2" className="max-h-64 object-contain rounded-lg bg-zinc-200" />
                </TabsContent>
                <TabsContent className="flex flex-col gap-4 mt-0" value="enfant">
                    <h3>Manoeuvre 1</h3>
                    <p className="optional"><b>Penchez</b> la l'enfant vers l'avant, appuyé contre votre genou, puis enchainez <b>5</b>
                        {' '}
                        <Popover>
                            <PopoverTrigger className="text-blue-700 underline">claques</PopoverTrigger>
                            <PopoverContent>
                                <p>Coup donné avec le plat de la main.</p>
                            </PopoverContent>
                        </Popover>
                        {' '}
                        dans le dos <b>(entre les deux omoplates)</b>, assez puissante pour provoquer un rejet.<br />
                    </p>
                    <img src="/etouffement/manoeuvre-1-enfant.jpg" alt="Manoeuvre 1" className="max-h-64 w-full object-contain rounded-lg bg-zinc-200" />
                    <h3>Manoeuvre 2</h3>
                    <p className="optional">Enchainez <b>5</b>
                        {' '}
                        <Popover>
                            <PopoverTrigger className="text-blue-700 underline">compressions thoraciques</PopoverTrigger>
                            <PopoverContent>
                                <p>Voir l'illustration ci-dessous</p>
                            </PopoverContent>
                        </Popover>
                        {' '}
                        assez puissante pour provoquer un rejet.<br />
                    </p>
                    <div className="grid grid-cols-7 gap-4 items-center">
                        <img src="/etouffement/manoeuvre-2-enfant-1.jpg" alt="Manoeuvre 2 étape 1" className="max-h-64 object-contain rounded-lg bg-zinc-200 col-span-3" />
                        <FaArrowRight className="mx-auto" />
                        <img src="/etouffement/manoeuvre-2-enfant-2.jpg" alt="Manoeuvre 2 étape 2" className="max-h-64 object-contain rounded-lg bg-zinc-200 col-span-3" />
                    </div>
                </TabsContent>
                <TabsContent className="flex flex-col gap-4 mt-0" value="nourisson">
                    <h3>Manoeuvre 1</h3>
                    <p className="optional"><b>Stabilisez</b> le bébé le long de votre bras, tête vers le bas, penché légèrement en avant, puis enchainez <b>5</b>
                        {' '}
                        <Popover>
                            <PopoverTrigger className="text-blue-700 underline">claques</PopoverTrigger>
                            <PopoverContent>
                                <p>Coup donné avec le plat de la main.</p>
                            </PopoverContent>
                        </Popover>
                        {' '}
                        dans le dos <b>(entre les deux omoplates)</b> pour provoquer un rejet.<br />
                    </p>
                    <img src="/etouffement/manoeuvre-1-nourisson.gif" alt="Manoeuvre 1" className="max-h-64 w-full object-contain rounded-lg bg-zinc-200" />
                    <h3>Manoeuvre 2</h3>
                    <p className="optional">Enchainez <b>5</b>
                        {' '}
                        <Popover>
                            <PopoverTrigger className="text-blue-700 underline">compressions thoraciques</PopoverTrigger>
                            <PopoverContent>
                                <p>Voir l'illustration ci-dessous</p>
                            </PopoverContent>
                        </Popover>
                        {' '}
                        avec 2 doigts au niveau du sternum pour provoquer un rejet.<br />
                    </p>
                    <img src="/etouffement/manoeuvre-2-nourisson.png" alt="Manoeuvre 2 étape 1" className="max-h-64 object-contain rounded-lg bg-zinc-200 col-span-3" />
                </TabsContent>
            </Tabs>

            <h3>Perte de connaissance</h3>
            <p>Si la personne perd connaissance, accompagnez la au sol, alertez immédiatement les secours, et <b className="text-red-600">entreprenez une réanimation cardio-pulmonaire</b></p>
            <Link href={'/etouffement/reanimation'}><StepButton
                title={'Débuter la réanimation cardio-pulmonaire'}
                description={'La victime est inconsciente et ne respire pas. Vous avez alerté les secours.'}
            />
            </Link>
        </div>
    );
}
