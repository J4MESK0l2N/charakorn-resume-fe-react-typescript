import { useEffect, useState } from "react";
import LanguageBar from "components/language-bar";
import AboutMe from "components/about-me";
import i18next from "./i18n";
import Tools from "components/tools";
import Experience from "components/experience";
import Contact from "components/contact";

import "./App.css";
import "./i18n";
interface AboutMeData {
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
  email: string;
  phone_number: string;
  address: string;
}

interface ToolsData {
  id: string;
  name: string;
  image: string;
  detail: string;
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
  projects: projectData[];
}

const App: React.FC = () => {
  const [aboutMe, setAboutMe] = useState<AboutMeData | null>(null);
  const [tools, setTools] = useState<ToolsData[] | null>(null);
  const [experience, setExperience] = useState<ExperienceData[] | null>(null);
  let language =
    i18next.language === "th" || i18next.language === "en"
      ? i18next.language
      : "th";

  const [currrentLanguage, setCurrentLanguage] = useState<"th" | "en">(
    language as "th" | "en"
  );

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}/profile`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resp: AboutMeData[] = await response.json();

    setAboutMe(resp[0]);
    getToolsData();
  };

  const getToolsData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}/tools`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resp: ToolsData[] = await response.json();

    setTools(resp);
    getExperience();
  };

  const getExperience = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}/organizations`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let resp: ExperienceData[] = await response.json();

    resp = resp.reverse();

    setExperience(resp);
  };

  return (
    <div className="app-container">
      <LanguageBar setCurrentLanguage={setCurrentLanguage} />
      <AboutMe currrentLanguage={currrentLanguage} data={aboutMe} />
      <Tools data={tools} />
      <Experience currrentLanguage={currrentLanguage} data={experience} />
      <Contact currrentLanguage={currrentLanguage} data={aboutMe} />
    </div>
  );
};

export default App;
