'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
const routes = {
    "etouffement": { name: "Étouffement", url: "/etouffement" },
    "obstruction-complete": { name: "Obstruction complète", url: "/etouffement/obstruction-complete" },
    "obstruction-partielle": { name: "Obstruction partielle", url: "/etouffement/obstruction-partielle" },
    "arret-cardiaque": { name: "Arrêt cardiaque", url: "/arret-cardiaque" },
    "reconnaissance": { name: "Reconnaissance", url: "/" },
    "reanimation": { name: "Réanimation", url: "/etouffement/reanimation" },
}

export default function LayoutBreadcrumb() {


    const router = usePathname();
    const items = ['reconnaissance', ...router.split('/').filter(Boolean)];
    console.log(router)
    return (
        <Breadcrumb className="py-2 mb-3">
            <BreadcrumbList>
                {items.map((item, index) => <>
                    {index === items.length - 1 &&
                        <BreadcrumbPage key={index}>
                            {routes[item]?.name || item}
                        </BreadcrumbPage>
                    }
                    {index < items.length - 1 &&
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink href={routes[item].url}>{routes[item]?.name || item}</BreadcrumbLink>
                        </BreadcrumbItem>
                    }
                    <BreadcrumbSeparator />
                </>)}


            </BreadcrumbList>
        </Breadcrumb>
    )
}