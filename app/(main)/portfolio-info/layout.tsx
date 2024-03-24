"use client";
import { ReactNode } from "react";
import { SidebarNav } from "./_components/SidebarNav";
import { Separator } from "@/components/ui/separator";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/portfolio-info/profile",
  },
  {
    title: "Portfolio",
    href: "/portfolio-info/portfolio",
  },
  {
    title: "Project",
    href: "/portfolio-info/project",
  },
  {
    title: "Experience",
    href: "/portfolio-info/experience",
  },
  {
    title: "Education",
    href: "/portfolio-info/education",
  },
];

export default function PersonalInfoLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    //generate a dashboard for each username
    <div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">
            Portfolio Information
          </h2>
          <p className="text-muted-foreground">
            Manage your portfolio settings and your preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
