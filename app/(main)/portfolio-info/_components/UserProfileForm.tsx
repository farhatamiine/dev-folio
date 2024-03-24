"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UserFormData {
  name: string;
  bio: string;
  profilePicture: FileList | null;
}

const UserProfileForm = () => {
  const { register, handleSubmit } = useForm<UserFormData>();

  const onSubmit = (data: UserFormData) => {
    // Handle form submission and upload data to the database
    console.log(data);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <Input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <Textarea placeholder="Bio" {...register("bio", { required: true })} />
        <Input
          type="file"
          placeholder="Profile Picture"
          {...register("profilePicture")}
        />
        <Button type="submit" variant="default">
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserProfileForm;
