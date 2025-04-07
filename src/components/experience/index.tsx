import { useInView } from "utils/isInView";
import { useTranslation } from "react-i18next";
import React from "react";
import "./style.css";
import dayjs from "dayjs";

interface ExperiencProps {
  data: Array<ExperienceData> | null;
  currrentLanguage: "th" | "en";
}

interface projectData {
  name: {
    th: string;
    en: string;
  };
  job_tools: {
    th: string;
    en: string;
  };
  detail: {
    th: string;
    en: string;
  };
}

interface ExperienceData {
  id: string;
  name: {
    th: string;
    en: string;
  };
  image: string;
  job_position: string;
  join_date: string;
  end_date: string;
  projects: projectData[] | null;
}

const Experience: React.FC<ExperiencProps> = ({ data, currrentLanguage }) => {
  const [ref, isVisible] = useInView<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className={`experience-container fade-section ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <h1 className="experience-header">{t("experience")}</h1>

      <div className="experience-detail">
        {data?.map((exp) => {
          return (
            <div
              style={{
                padding: "0px 20px",
                textAlign: "left",
                marginTop: 25,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <b style={{ fontSize: "clamp(18px, 2vw + 6px, 24px)" }}>
                    {exp.name[currrentLanguage]}
                  </b>
                  <div
                    style={{
                      fontSize: "clamp(16px, 2vw + 4px, 20px)",
                      color: "#C5C5C5",
                    }}
                  >
                    {exp.job_position}
                  </div>
                </div>
                <div
                  className="experience-working-date"
                  style={{
                    fontSize: "clamp(16px, 2vw + 4px, 20px)",
                  }}
                >
                  {dayjs(exp.join_date, "YYYY-MM-DD").format("YYYY")}
                  {exp.join_date !== exp.end_date
                    ? !exp.end_date
                      ? " - Present"
                      : ` - ${dayjs(exp.end_date, "YYYY-MM-DD").format("YYYY")}`
                    : ""}
                </div>
              </div>
              {exp?.projects?.map((project) => {
                return (
                  <div
                    className="experience-working-date"
                    style={{
                      padding: "8px 0px",
                    }}
                  >
                    <div>
                      {project?.name[currrentLanguage]}
                      {project?.detail[currrentLanguage] !== ""
                        ? project?.name[currrentLanguage]
                          ? ` (${project?.detail[currrentLanguage]}) `
                          : project?.detail[currrentLanguage]
                        : " "}
                    </div>
                    <span style={{ color: "white" }}>
                      {project?.job_tools[currrentLanguage]
                        ? ` ${t("with")} ${
                            project?.job_tools[currrentLanguage]
                          }`
                        : ""}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
