import { useLanguageStore } from "../hooks/use-langauge";
import ru from "../locales/ru.json";

const messages = { ru };

export function t(key) {
  const { locale } = useLanguageStore.getState();
  const keys = key.split("."); // Masalan: "header.a1"
  return (
    keys.reduce((obj, currentKey) => obj?.[currentKey], messages[locale]) || key
  );
}
