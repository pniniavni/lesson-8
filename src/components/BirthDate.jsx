import { useEffect, useState } from "react";
import { useI18nContext } from "../context/I18nContext";
import { translate } from "../utils/translate";

const locales = { he: "he-IL", en: "en-US", fr: "fr-FR" };

export default function BirthDate({ birthDate }) {
  const { language } = useI18nContext();
  const [congrats, setCongrats] = useState("מזל טוב! אתה בן");
  const [dateLabel, setDateLabel] = useState("תאריך הלידה שלך הוא:");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const t1 = await translate("מזל טוב! אתה בן", "he", language);
      const t2 = await translate("תאריך הלידה שלך הוא:", "he", language);
      if (!cancelled) {
        setCongrats(t1);
        setDateLabel(t2);
      }
    }
    load();

    return () => {
      cancelled = true;
    };
  }, [language]);

  const age = new Date().getFullYear() - birthDate.getFullYear();

  return (
    <p>
      {congrats} {age}. {dateLabel}{" "}
      {birthDate.toLocaleDateString(locales[language])}
    </p>
  );
}