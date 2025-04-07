import React from "react";
import { useTranslation } from "react-i18next";

import "./style.css";
import { useInView } from "utils/isInView";

interface AboutMeProps {
  data: {
    id: string;
    created_at: string;
    updated_at: string;
    name: {
      th: string;
      en: string;
    };
    job_position: {
      th: string;
      en: string;
    };
    detail: {
      th: string;
      en: string;
    };
  } | null;
  currrentLanguage: "th" | "en";
}

const AboutMe: React.FC<AboutMeProps> = ({ data, currrentLanguage }) => {
  const { t } = useTranslation();

  const [ref, isVisible] = useInView<HTMLDivElement>();

  const imageUrl: string =
    "https://charakorn-public-images.s3.ap-southeast-1.amazonaws.com/profile-image/image.jpg";

  return (
    <div
      ref={ref}
      className={`about-me-container fade-section ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <img
        src={imageUrl}
        alt="profile_image"
        className="about-me-image-profile"
      />
      <b>
        <h1 className="about-me-full-name">{data?.name[currrentLanguage]}</h1>
      </b>
      <div className="about-me-job-position">
        {data?.job_position[currrentLanguage]}
      </div>
      <div className="about-me-detail">
        <span>{data?.detail[currrentLanguage]}</span>
      </div>

      <a
        target="_blank"
        href={t("download-cv-url")}
        className="about-me-cv-download-btn"
        rel="noreferrer"
      >
        {t("download-cv")}
      </a>
    </div>
  );
};

export default AboutMe;
