import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
import { games, admins, users } from "./models/auth";

export * from "./models/auth";

export const insertGameSchema = createInsertSchema(games).omit({ id: true });
export type InsertGame = z.infer<typeof insertGameSchema>;

export const createAdminSchema = createInsertSchema(admins).pick({
  email: true,
  passwordHash: true,
});
