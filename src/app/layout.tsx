import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Switch } from "@/components/ui/switch";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { twMerge } from 'tailwind-merge';
import "./globals.css";

const raleway = Raleway({ subsets: ["latin-ext"], variable: '--raleway', weight: ["200", "300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Premiers secours",
  description: "Guide de premiers secours",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="fr">
      <body className={twMerge(raleway.className, "bg-white flex pt-5 justify-center min-h-screen pb-10")}>
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-blue-50 to-white select-none"></div>
        <div className="max-w-xl w-full px-5 relative">
          <div className="flex gap-2 items-center py-4">
            <Switch />
            <span className="font-semibold">Situation de détresse</span>
          </div>
          <Breadcrumb className="py-2 mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Étouffement</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Obstruction complète</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          {children}
        </div>
      </body>
    </html>
  );
}
