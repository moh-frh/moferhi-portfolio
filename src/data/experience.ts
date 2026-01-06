import { experiences as dataAnalystExperiences } from "@/profiles/data-analyst/data/experience";
import { experiences as javaStackExperiences } from "@/profiles/java-stack/data/experience";
import { isJavaStack } from "./_selectProfile";

export const experiences = isJavaStack() ? javaStackExperiences : dataAnalystExperiences;
