"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProjectFormData {
  title: string;
  description: string;
  technologies: string;
  projectUrl: string;
  githubUrl: string;
  thumbnail: FileList | null;
}

const ProjectForm = () => {
  const { register, handleSubmit } = useForm<ProjectFormData>();

  const onSubmit = (data: ProjectFormData) => {
    // Handle form submission and upload data to the database
    console.log(data);
  };

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-4">Add Project</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <Input
          type="text"
          placeholder="Project Title"
          {...register("title", { required: true })}
        />
        <Textarea
          placeholder="Project Description"
          {...register("description", { required: true })}
        />
        <Input
          type="text"
          placeholder="Technologies (comma-separated)"
          {...register("technologies", { required: true })}
        />
        <Input
          type="text"
          placeholder="Project URL"
          {...register("projectUrl", { required: true })}
        />
        <Input
          type="text"
          placeholder="GitHub URL"
          {...register("githubUrl", { required: true })}
        />
        <Input type="file" placeholder="Thumbnail" {...register("thumbnail")} />
        <Button type="submit" className="w-1/4" variant="default">
          Save
        </Button>
      </form>
    </div>
  );
};

export default ProjectForm;
