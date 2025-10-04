"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState, lazy, Suspense } from "react";

// Lazy load the Toaster component to reduce initial bundle size
const Toaster = lazy(() => import("@/components/ui/toaster").then(mod => ({ default: mod.Toaster })));

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div suppressHydrationWarning>
          {children}
          <Suspense fallback={null}>
            <Toaster />
          </Suspense>
        </div>
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
