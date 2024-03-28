import { ConvexError, v } from "convex/values";
import {
  MutationCtx,
  QueryCtx,
  internalMutation,
  mutation,
  query,
} from "./_generated/server";
import { Id } from "./_generated/dataModel";

export const createUser = internalMutation({
  args: {
    tokenIdentifier: v.string(),
    name: v.string(),
    image: v.string(),
  },
  async handler(ctx, args) {
    await ctx.db.insert("users", {
      tokenIdentifier: args.tokenIdentifier,
      name: args.name,
      image: args.image,
    });
  },
});

export const createUserProfile = mutation({
  args: {
    bio: v.string(),
    username: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx, {});

    const existingProfile = await ctx.db
      .query("profile")
      .filter((q) => q.eq(q.field("userId"), user._id))
      .first();

    if (existingProfile) {
      // Update the existing profile
      await ctx.db.patch(existingProfile._id, {
        bio: args.bio,
        username: args.username,
      });
    } else {
      // Create a new profile
      const newProfile = {
        bio: args.bio,
        username: args.username,
        userId: user._id,
      };
      await ctx.db.insert("profile", newProfile);
    }
  },
});

export const updateUser = internalMutation({
  args: { tokenIdentifier: v.string(), name: v.string(), image: v.string() },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) =>
        q.eq("tokenIdentifier", args.tokenIdentifier)
      )
      .first();

    if (!user) {
      throw new ConvexError("no user with this token found");
    }

    await ctx.db.patch(user._id, {
      name: args.name,
      image: args.image,
    });
  },
});

export const getCurrentUser = query({
  args: {},
  async handler(ctx) {
    const identity = await ctx.auth.getUserIdentity();

    const user = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) =>
        q.eq("tokenIdentifier", identity?.tokenIdentifier ?? "")
      )
      .first();

    if (!user) {
      throw new ConvexError("no user with this token found");
    }
    return user;
  },
});

export const getUserProfile = query({
  handler: async (ctx) => {
    const user = await getCurrentUser(ctx, {});
    const profile = await ctx.db
      .query("profile")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .first();

    const profiles = {
      name: profile?.username,
      image: user?.image,
      bio: profile?.bio,
    };

    return profiles;
  },
});
