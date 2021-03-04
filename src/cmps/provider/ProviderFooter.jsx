import React from "react";
import { ProviderDetail } from "./ProviderDetail";

export const ProviderFooter = ({
  provider,
  profileShown,
  onToggleProfileShown,
  onClickSendMsg,
}) => {
  return (
    <footer className="provider-footer flex space-between wrap">
      <aside>
        <ProviderDetail title="Specialties:" data={provider.topSpecialties} />
        {profileShown && (
          <>
            <ProviderDetail
              title="More Specialties:"
              data={provider.otherSpecialties}
            />
            <ProviderDetail title="Languages:" data={provider.languages} />
          </>
        )}
      </aside>
      <aside className="actions flex column">
        <button className="view-profile" onClick={onToggleProfileShown}>
          {profileShown ? "Hide Profile" : "View Profile"}
        </button>
        <button className="send-msg" onClick={onClickSendMsg}>
          Send Message
        </button>
      </aside>
    </footer>
  );
};
