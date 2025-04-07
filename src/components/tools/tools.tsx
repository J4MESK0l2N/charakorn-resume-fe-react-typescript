import React from "react";

interface ToolPros {
  image: string;
  name: string;
  detail: string;
}

const Tools: React.FC<ToolPros> = ({ image, name, detail = "" }) => {
  return (
    <div style={{ cursor: "pointer", padding: 5 }}>
      <img alt={name} src={image} height={60} className="image-tools" />
      <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
        <b style={{ fontSize: "clamp(16px, 2vw + 6px, 22px)" }}>{name}</b>
        <div
          style={{
            marginTop: -10,
            color: "#8491A0",
            fontSize: "clamp(12px, 2vw + 2px, 14px)",
          }}
        >
          {detail}
        </div>
      </div>
    </div>
  );
};

export default Tools;
