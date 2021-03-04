import React from "react";

export const ProviderDetail = ({ title, data }) => {
  return (
    <div className="provider-detail">
      <div className="title">{title}</div>
      <div className="data-container flex wrap">
        {data.map((d, idx) => (
          <div key={`${d}//${idx}`} className="data">{d}</div>
        ))}
      </div>
    </div>
  );
};
