import { env } from "@/env.mjs";

export type ActiveProfile = "data-analyst" | "java-stack";

export const activeProfile = (): ActiveProfile => env.ACTIVE_PROFILE;

export const isJavaStack = (): boolean => env.ACTIVE_PROFILE === "java-stack";
