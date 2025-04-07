import { useInView } from "utils/isInView";
import { useTranslation } from "react-i18next";
import React from "react";
import "./style.css";
import Tools from "./tools";

interface Tool {
  data: Array<ToolsData> | null;
}

interface ToolsData {
  id: string;
  name: string;
  image: string;
  detail: string;
}

const TechStack: React.FC<Tool> = ({ data }) => {
  const [ref, isVisible] = useInView<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className={`tech-stack-container fade-section ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <h1 className="tech-stack-tool-header">{t("tools")}</h1>

      <div className="tech-stack-detail">
        {data?.map((tool) => {
          return (
            <Tools image={tool.image} name={tool.name} detail={tool.detail} />
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
