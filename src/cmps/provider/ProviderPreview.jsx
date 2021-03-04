import React, { useContext, useState } from "react";
import { ProviderFooter } from "./ProviderFooter";
import { ProviderMain } from "./ProviderMain";
import { ProviderContext } from "../../App";

export const ProviderPreview = ({ provider }) => {
  const [profileShown, setProfileShown] = useState(false);
  const providerContext = useContext(ProviderContext);

  function onToggleProfileShown(ev) {
    ev.stopPropagation();
    setProfileShown((prev) => !prev);
  }

  function onClickSendMsg(ev) {
    ev.stopPropagation();
    providerContext.setCurrProvider(provider);
  }

  return (
    <article className="provider" onClick={onToggleProfileShown}>
      <ProviderMain provider={provider} profileShown={profileShown} />
      <ProviderFooter
        provider={provider}
        profileShown={profileShown}
        onToggleProfileShown={onToggleProfileShown}
        onClickSendMsg={onClickSendMsg}
      />
    </article>
  );
};
