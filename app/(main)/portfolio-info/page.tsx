import React from "react";
import ExperienceForm from "./_components/ExperienceForm";
import EducationForm from "./_components/EducationForm";
import UserProfileForm from "./_components/UserProfileForm";
import PortfolioForm from "./_components/PortfolioForm";
import ProjectForm from "./_components/ProjectForm";

interface usernameProps {
  params: {
    username: string;
  };
}

function DashboardPage({ params }: usernameProps) {
  return (
    //generate a dashboard for each username
    <div>
      <h2 className="font-bold text-2xl">Portfolio Information</h2>
      <div className="space-y-8">
        <UserProfileForm />
        <PortfolioForm />
        <ProjectForm />
        <ExperienceForm />
        <EducationForm />
      </div>
    </div>
  );
}

export default DashboardPage;
