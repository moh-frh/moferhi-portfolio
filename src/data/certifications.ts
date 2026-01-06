import { certifications as dataAnalystCertifications } from "@/profiles/data-analyst/data/certifications";
import { certifications as javaStackCertifications } from "@/profiles/java-stack/data/certifications";

import { isJavaStack } from "./_selectProfile";

export const certifications = isJavaStack() ? javaStackCertifications : dataAnalystCertifications;
