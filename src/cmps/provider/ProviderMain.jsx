import React from "react";
import { useImg } from "../../hooks/useImg";

export const ProviderMain = ({ provider, profileShown }) => {
  const { handleImgError } = useImg();

  return (
    <main className="flex align-start wrap">
      <div className="img-container">
        <img src={provider.imageName} onError={handleImgError} alt="" />
      </div>
      <div className="about flex column">
        <h3>
          {provider.firstName} {provider.lastName}
        </h3>
        <h4>{provider.clinicName}</h4>
        <p className={`biography ${profileShown ? "biography-shown" : ""}`}>
          {provider.biography}
        </p>
      </div>
      <div className="location">
        <p>{provider.address}</p>
        <p>
          {provider.city}, {provider.state}
        </p>
        <p>
          {provider.zipCode}, {provider.country}
        </p>
      </div>
    </main>
  );
};
