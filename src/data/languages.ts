import { languages as dataAnalystLanguages } from "@/profiles/data-analyst/data/languages";
import { languages as javaStackLanguages } from "@/profiles/java-stack/data/languages";
import { isJavaStack } from "./_selectProfile";

export const languages = isJavaStack() ? javaStackLanguages : dataAnalystLanguages;
