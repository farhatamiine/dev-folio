import React from "react";
import ExperienceForm from "../_components/ExperienceForm";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExperinecePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Experience</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <Tabs defaultValue="experience" className="space-y-6">
        <TabsList>
          <TabsTrigger value="experienceForm">Add Experience</TabsTrigger>
          <TabsTrigger value="experience">My Experiences</TabsTrigger>
        </TabsList>
        <TabsContent value="experienceForm">
          <ExperienceForm />
        </TabsContent>
        <TabsContent value="experience">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
