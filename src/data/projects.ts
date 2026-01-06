import { projectsData as dataAnalystProjectsData } from "@/profiles/data-analyst/data/projects";
import { projectsData as javaStackProjectsData } from "@/profiles/java-stack/data/projects";
import { isJavaStack } from "./_selectProfile";

export const projectsData = isJavaStack() ? javaStackProjectsData : dataAnalystProjectsData;
