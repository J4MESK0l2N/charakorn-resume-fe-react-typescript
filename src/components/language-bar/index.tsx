import React from "react";

import ThaiIcon from "assets/images/png/thai-icon.png";
import EngIcon from "assets/images/png/eng-icon.jpg";

import { useTranslation } from "react-i18next";

interface LanguageBarProps {
  setCurrentLanguage: React.Dispatch<React.SetStateAction<"th" | "en">>;
}

const LanguageBar: React.FC<LanguageBarProps> = ({ setCurrentLanguage }) => {
  const { i18n } = useTranslation();

  const switchLang = (lang: "en" | "th") => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 15,
        position: "fixed",
        right: 20,
        top: 20,
        zIndex: 99,
        cursor: "pointer",
      }}
    >
      <img
        src={ThaiIcon}
        width={35}
        alt="thai-lang"
        onClick={() => switchLang("th")}
      />
      <img
        src={EngIcon}
        width={35}
        alt="eng-lang"
        onClick={() => switchLang("en")}
      />
    </div>
  );
};

export default LanguageBar;
