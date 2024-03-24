import React from "react";
import ExperienceForm from "./_components/ExperienceForm";
import EducationForm from "./_components/EducationForm";
import UserProfileForm from "./_components/UserProfileForm";
import PortfolioForm from "./_components/PortfolioForm";
import ProjectForm from "./_components/ProjectForm";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./_components/SidebarNav";

interface usernameProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}
function PersonalInfoPage({ params, children }: usernameProps) {
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
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoPage;
