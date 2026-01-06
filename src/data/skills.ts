import { skillCategories as dataAnalystSkillCategories } from "@/profiles/data-analyst/data/skills";
import { skillCategories as javaStackSkillCategories } from "@/profiles/java-stack/data/skills";
import { isJavaStack } from "./_selectProfile";

export const skillCategories = isJavaStack() ? javaStackSkillCategories : dataAnalystSkillCategories;
