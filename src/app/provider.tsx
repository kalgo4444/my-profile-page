import { Theme } from "@radix-ui/themes";
import type { ReactNode } from "react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <Theme accentColor='gray' appearance="light">{children}</Theme>;
}
