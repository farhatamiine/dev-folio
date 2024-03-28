"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

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
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Portfolio</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <div className="w-full">
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
    </div>
  );
};

export default PortfolioForm;
