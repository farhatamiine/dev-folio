import React from "react";
import EducationForm from "../_components/EducationForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function EducationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Education</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <Tabs defaultValue="educations" className="space-y-6">
        <TabsList>
          <TabsTrigger value="educationForm">Add Education</TabsTrigger>
          <TabsTrigger value="educations">My Educations</TabsTrigger>
        </TabsList>
        <TabsContent value="educationForm">
          <EducationForm />
        </TabsContent>
        <TabsContent value="educations">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
