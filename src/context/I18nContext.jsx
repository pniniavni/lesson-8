import { createContext, useContext, useState } from "react";

export const I18nContext = createContext({
  language: "he",
  setLanguage: () => {},
});

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState("he");

  return (
    <I18nContext value={{ language, setLanguage }}>
      {children}
    </I18nContext>
  );
}

export function useI18nContext() {
  return useContext(I18nContext);
}