"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PortfolioFormData {
  name: string;
  description: string;
  theme: string;
}
const PortfolioForm = () => {
  const { register, handleSubmit } = useForm<PortfolioFormData>();

  const onSubmit = (data: PortfolioFormData) => {
    // Handle form submission and upload data to the database
    console.log(data);
  };

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-4">Create Portfolio</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <Input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <Textarea
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <Input
          type="text"
          placeholder="Theme"
          {...register("theme", { required: true })}
        />
        <Button type="submit" className="w-1/4" variant="default">
          Save
        </Button>
      </form>
    </div>
  );
};

export default PortfolioForm;
