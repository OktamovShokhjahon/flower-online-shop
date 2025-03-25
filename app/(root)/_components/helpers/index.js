export const styles = {
  active:
    "active:opacity-[0.65] transition-all duration-400 ease-linear cursor-pointer active:scale-[0.95]",
  hover:
    "hover:opacity-[0.65] transition-all duration-200 ease-linear hover:text-MainYellow cursor-pointer",
};

export const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function translateToEnglish(text) {
  const cyrillicToLatinMap = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "Yo",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "Kh",
    Ц: "Ts",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Shch",
    Ъ: "",
    Ы: "Y",
    Ь: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };

  return text
    .split("")
    .map((char) => cyrillicToLatinMap[char] || char)
    .join("");
}

export function generateSlug(text) {
  const translatedText = translateToEnglish(text);

  return translatedText
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const toggleFunction = (setState, id) => {
  setState((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, isActive: !item.isActive }
        : { ...item, isActive: false }
    )
  );
};

// export const toggleFunction2 = (
//     setState,
//     id
// ) => {
//     setState(prev =>
//         prev.map(item =>
//             item.id === id ? { ...item, isActive: !item.isActive } : item
//         )
//     );
// };

export const formatPhoneNumber = (phone) => {
  if (phone.startsWith("7")) {
    return phone.replace(
      /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
      "+7 ($2) $3-$4-$5"
    );
  }
  if (phone.startsWith("1")) {
    return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "+1 ($2) $3-$4");
  }
  return phone;
};

export function truncateTitle(title) {
  const middleIndex = Math.floor(title.length / 2);
  const start = title.slice(0, middleIndex - 2);
  const end = title.slice(middleIndex + 3);
  return `${start}...${end}`;
}

export const formatPrice = (price) => {
  return new Intl.NumberFormat("ru-RU", {
    currency: "RUB",
  })
    .format(price)
    .replace(/\s/g, " ");
};

export const addFieldActive = (array) => {
  return array.map((item) => {
    return { ...item, isActive: false };
  });
};

export const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex gap-1">
      {Array.from({ length: totalStars }, (_, i) => (
        <img
          key={i}
          src={i < rating ? "/images/fill.svg" : "/images/empty.svg"}
          alt={i < rating ? "Filled Star" : "Empty Star"}
          style={{ width: "20px" }}
        />
      ))}
    </div>
  );
};
