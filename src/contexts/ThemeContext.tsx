import { createContext, useContext, useState } from "react";

export type Theme = "Light" | "Dark";

type ThemeContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(
  themeContext: React.Context<ThemeContext | null>
) {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("useThemeContext has to be within ThemeContextProvider...");
  } else {
    return context;
  }
}
