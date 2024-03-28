import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    image: v.string(),
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_tokenIdentifier", ["tokenIdentifier"]),

  profile: defineTable({
    bio: v.string(),
    username: v.string(),
    userId: v.id("users"),
  }).index("by_user", ["userId"]),

  project: defineTable({
    title: v.string(),
    description: v.string(),
    technologies: v.array(v.string()),
    projectUrl: v.string(),
    githubUrl: v.string(),
    thumbnail: v.id("_storage"),
    userId: v.id("users"),
  }).index("by_user", ["userId"]),
});
