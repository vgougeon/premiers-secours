import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import StepButton from "@/components/ui/step-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

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
                <TabsList className="w-full">
                    <TabsTrigger className="grow" value="adulte">Adulte</TabsTrigger>
                    <TabsTrigger className="grow" value="enfant">Enfant</TabsTrigger>
                    <TabsTrigger className="grow" value="nourisson">Nourisson</TabsTrigger>
                </TabsList>
                <TabsContent className="flex flex-col gap-4" value="adulte">
                    <p><b>Alterner</b> <span className="text-blue-600">MANOEUVRE 1</span> et <span className="text-blue-600">MANOEUVRE 2</span> jusqu'au dégagement de la voie respiratoire</p>
                    <p>Interrompre les manœuvres de désobstruction dès :
                        <ul className="list-disc list-inside">
                            <li>L’apparition d’une toux, de cris ou de pleurs ;</li>
                            <li>La reprise de la respiration ;</li>
                            <li>Le rejet du corps étranger.</li>
                            <li className="text-red-600">La perte de connaissance, <Link className="text-blue-700 underline" href={'/etouffement/reanimation'}>cliquez ici</Link> </li>
                        </ul>
                    </p>
                    <h3>Manoeuvre 1</h3>
                    <p className="optional"><b>Penchez</b> la victime vers l'avant, enchainez <b>5</b>
                        {' '}

                        <Popover>
                            <PopoverTrigger className="text-blue-700 underline">claques</PopoverTrigger>
                            <PopoverContent>
                                <p>Coup donné avec le plat de la main.</p>
                            </PopoverContent>
                        </Popover>
                        {/* <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger className="text-blue-700 underline">claques</TooltipTrigger>
                        <TooltipContent>
                            <p>Coup donné avec le plat de la main.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider> */}
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
                        {/* <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger className="text-blue-700 underline">claques</TooltipTrigger>
                        <TooltipContent>
                            <p>Coup donné avec le plat de la main.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider> */}
                        {' '}
                        dans le dos, assez puissante pour provoquer un rejet.<br />
                    </p>
                    <img src="/etouffement/manoeuvre-2.png" alt="Manoeuvre 2" className="max-h-64 object-contain rounded-lg bg-zinc-200" />
                </TabsContent>
                <TabsContent value="enfant"></TabsContent>
                <TabsContent value="nourisson"></TabsContent>
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
