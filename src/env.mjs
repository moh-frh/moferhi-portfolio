export const env = {
  APP_URL: import.meta.env.VITE_APP_URL ?? "http://localhost:3000",
  ACTIVE_PROFILE:
    import.meta.env.VITE_ACTIVE_PROFILE === "java-stack" ? "java-stack" : "data-analyst",
};