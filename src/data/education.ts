import { education as dataAnalystEducation } from "@/profiles/data-analyst/data/education";
import { education as javaStackEducation } from "@/profiles/java-stack/data/education";
import { isJavaStack } from "./_selectProfile";

export const education = isJavaStack() ? javaStackEducation : dataAnalystEducation;
