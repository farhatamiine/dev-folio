"use client";
import React from "react";
import ExperienceForm from "./_components/ExperienceForm";
import EducationForm from "./_components/EducationForm";
import UserProfileForm from "./_components/UserProfileForm";
import PortfolioForm from "./_components/PortfolioForm";
import ProjectForm from "./_components/ProjectForm";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./_components/SidebarNav";
import { ProfileCard } from "@/components/generated/profile-card";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface usernameProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}
function PersonalInfoPage({ params, children }: usernameProps) {
  const profile = useQuery(api.user.getUserProfile);

  console.log(profile);

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
        <ProfileCard
          bio={profile?.bio}
          image={profile?.image}
          username={profile?.name}
        />
        <UserProfileForm />
      </div>
    </div>
  );
}

export default PersonalInfoPage;
