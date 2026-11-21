import { useEffect, useState } from "react";
import { useI18nContext } from "../context/I18nContext";
import { translate } from "../utils/translate";

export default function GreetingCard({ greeting }) {
  const { language } = useI18nContext();
  const [text, setText] = useState(greeting);

  useEffect(() => {
    let cancelled = false;

    translate(greeting, "he", language).then((result) => {
      if (!cancelled) setText(result);
    });

    return () => {
      cancelled = true;
    };
  }, [greeting, language]);

  return <div className="greeting-card">{text}</div>;
}