import { useTranslation } from "react-i18next";
import React from "react";

import AddressIcon from "assets/images/png/address-icon.png";
import PhoneIcon from "assets/images/png/cell-phone-icon.png";
import EmailIcon from "assets/images/png/email-icon.png";

import "./style.css";

interface ContactProps {
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
    email: string;
    phone_number: string;
    address: string;
  } | null;
  currrentLanguage: "th" | "en";
}

const Contact: React.FC<ContactProps> = ({ data, currrentLanguage }) => {
  const { t } = useTranslation();

  console.log("data :>> ", data);

  return (
    <div className={`contact-container`}>
      <div className="contact-content">
        <h1 className="contact-header" style={{ marginBottom: 10 }}>
          {t("contact")}
        </h1>
        <div style={{ padding: "0px 20px" }}>
          <div className="contact-detail" style={{ color: "#8491A0" }}>
            {data?.detail[currrentLanguage]}
          </div>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              gap: 15,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                fontSize: "clamp(12px, 2vw + 4px, 16px)",
              }}
            >
              <img src={AddressIcon} width={20} alt="address" />
              <div>{data?.address}</div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                fontSize: "clamp(12px, 2vw + 4px, 16px)",
              }}
            >
              <img src={PhoneIcon} width={20} alt="phone" />
              <div>{data?.phone_number}</div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                fontSize: "clamp(12px, 2vw + 4px, 16px)",
              }}
            >
              <img src={EmailIcon} width={20} alt="phone" />
              <div>{data?.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
