import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export default function Reanimation() {
    return (<div className="flex flex-col gap-4">
        <Tabs defaultValue="adulte">
            <TabsList className="w-full mb-4">
                <TabsTrigger className="grow" value="adulte">Adulte</TabsTrigger>
                {/* <TabsTrigger className="grow" value="enfant">Enfant</TabsTrigger> */}
                <TabsTrigger className="grow" value="nourisson">Nourisson</TabsTrigger>
            </TabsList>
        </Tabs>
    </div>)
}