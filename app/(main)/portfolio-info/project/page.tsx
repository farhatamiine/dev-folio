import React from "react";
import ProjectForm from "../_components/ProjectForm";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ProjectCard } from "@/components/generated/project-card";
import { DataTable } from "@/components/ui/data-table";
import { Project, columns } from "@/components/tables/project-table/columns";

async function getData(): Promise<Project[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      title: "E-commerce Website",
      description: "An online store for buying and selling products.",
      githubUrl: "https://github.com/example/ecommerce",
      projectUrl: "https://example.com/ecommerce",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "An application for managing tasks and to-do lists.",
      githubUrl: "https://github.com/example/task-manager",
      projectUrl: "https://example.com/task-manager",
      technologies: ["Angular", "Firebase"],
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      title: "Blogging Platform",
      description: "A platform for creating and sharing blog posts.",
      githubUrl: "https://github.com/example/blog-platform",
      projectUrl: "https://example.com/blog-platform",
      technologies: ["Vue.js", "Django", "PostgreSQL"],
      thumbnail: "https://via.placeholder.com/150",
    },
  ];
}

export default async function ProjectPage() {
  const data = await getData();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Projects</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList>
          <TabsTrigger value="projectForm">Add Project</TabsTrigger>
          <TabsTrigger value="projects">My Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="projectForm">
          <ProjectForm />
        </TabsContent>
        <TabsContent value="projects">
          <p className="text-lg text-muted-foreground">List of your projects</p>
          <Separator className="my-4" />
          <DataTable columns={columns} data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
