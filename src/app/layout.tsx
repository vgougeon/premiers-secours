import { Switch } from "@/components/ui/switch";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Raleway } from "next/font/google";
import { twMerge } from 'tailwind-merge';
import "./globals.css";
const LayoutBreadcrumb = dynamic(() => import("@/components/blocks/breadcrumb"));

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
        <div className="max-w-5xl w-full px-5 relative">
          <div className="flex gap-2 items-center py-4">
            <Switch />
            <span className="font-semibold">Situation de détresse</span>
          </div>
          <LayoutBreadcrumb />
          {children}
        </div>
      </body>
    </html>
  );
}
