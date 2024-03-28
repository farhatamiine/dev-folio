"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
interface EducationFormData {
  degree: string;
  fieldOfStudy: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
}

const EducationForm = () => {
  const { register, handleSubmit } = useForm<EducationFormData>();

  const onSubmit = (data: EducationFormData) => {
    // Handle form submission and upload data to the database
    console.log(data);
  };

  return (
    <div className="space-y-6">
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <Input
            type="text"
            placeholder="Degree"
            {...register("degree", { required: true })}
          />
          <Input
            type="text"
            placeholder="Field of Study"
            {...register("fieldOfStudy", { required: true })}
          />
          <Input
            type="text"
            placeholder="Institution"
            {...register("institution", { required: true })}
          />
          <div className="flex space-x-4">
            <Input
              type="date"
              placeholder="Start Date"
              {...register("startDate", { required: true })}
            />
            <Input
              type="date"
              placeholder="End Date"
              {...register("endDate", { required: true })}
            />
          </div>
          <Textarea
            placeholder="Description"
            {...register("description", { required: true })}
          />
          <Button type="submit" className="w-1/4" variant="default">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;
