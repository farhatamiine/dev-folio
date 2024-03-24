"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ExperienceFormData {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

const ExperienceForm = () => {
  const { register, handleSubmit } = useForm<ExperienceFormData>();

  const onSubmit = (data: ExperienceFormData) => {
    // Handle form submission and upload data to the database
    console.log(data);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Add Experience</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <Input
          type="text"
          placeholder="Job Title"
          {...register("jobTitle", { required: true })}
        />
        <Input
          type="text"
          placeholder="Company"
          {...register("company", { required: true })}
        />
        <div className="flex space-x-4">
          <Input
            type="date"
            placeholder="Start Date"
            {...register("startDate", { required: true })}
          />
          <Input
            type="date"
            placeholder="End Date (leave blank if currently working)"
            {...register("endDate")}
          />
        </div>
        <Textarea
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <Button type="submit" variant="default">
          Save
        </Button>
      </form>
    </div>
  );
};

export default ExperienceForm;
