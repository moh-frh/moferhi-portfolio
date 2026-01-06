import { hobbies as dataAnalystHobbies } from "@/profiles/data-analyst/data/hobbies";
import { hobbies as javaStackHobbies } from "@/profiles/java-stack/data/hobbies";
import { isJavaStack } from "./_selectProfile";

export const hobbies = isJavaStack() ? javaStackHobbies : dataAnalystHobbies;
