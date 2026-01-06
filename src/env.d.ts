/// <reference types="vite/client" />

// NOTE: This file should not be edited
// see https://vitejs.dev/guide/env-and-mode.html for more information.

interface ImportMetaEnv {
  readonly VITE_APP_URL?: string;
  readonly VITE_ACTIVE_PROFILE?: "data-analyst" | "java-stack";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "@/env.mjs" {
  export const env: {
    APP_URL: string;
    ACTIVE_PROFILE: "data-analyst" | "java-stack";
  };
}
