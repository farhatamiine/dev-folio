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
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
        <UserProfileForm />
      </div>
    </div>
  );
}

export default PersonalInfoPage;
