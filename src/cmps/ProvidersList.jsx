import React from "react";
import { ProviderPreview } from "./provider/ProviderPreview";

export const ProvidersList = ({ data }) => {
  return (
    <section className="providers-list container">
      {data.map((p) => {
        return <ProviderPreview provider={p} key={p.id} />;
      })}
    </section>
  );
};
