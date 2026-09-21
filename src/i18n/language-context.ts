import { createContext } from "react";
import { translations, Language } from "./translations";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en | typeof translations.nl;
}

// A safe default keeps the app rendering even if a component mounts
// outside the provider (e.g. during hot module reloads in development).
export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});
