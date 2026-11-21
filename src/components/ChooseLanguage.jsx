import { useI18nContext } from "../context/I18nContext";

const languages = [
  { code: "he", label: "עברית" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

export default function ChooseLanguage() {
  const { setLanguage } = useI18nContext();

  return (
    <select onChange={(e) => setLanguage(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}