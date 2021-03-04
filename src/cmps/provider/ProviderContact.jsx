import React, { useState } from "react";
import { useImg } from "../../hooks/useImg";

export const ProviderContact = ({ provider, onCloseContact }) => {
  const { handleImgError } = useImg();
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange({ target }) {
    if (target.name === "message") {
      const wordCount = target.value.split(" ").length;
      if (wordCount > 99) return;
    }
    setContactDetails((prev) => ({ ...prev, [target.name]: target.value }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    onCloseContact();
  }

  return (
    <>
      <div className="screen" onClick={onCloseContact}></div>
      <section className="provider-contact">
        <header className="flex align-center">
          <img src={provider.imageName} alt="" onError={handleImgError} />
          <h3>
            Send a message to {provider.firstName} {provider.lastName}
          </h3>
        </header>
        <main className="flex align-center">
          <form className="flex column" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={contactDetails.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            <input
              type="text"
              name="email"
              value={contactDetails.email}
              onChange={handleChange}
              placeholder="Your email"
            />
            <input
              type="text"
              name="phone"
              value={contactDetails.phone}
              onChange={handleChange}
              placeholder="Your phone"
            />
            <textarea
              name="message"
              placeholder="Message (up to 200 words)"
              value={contactDetails.message}
              onChange={handleChange}
              rows="5"
            ></textarea>
            <button>Send Message</button>
          </form>
          <div className="txt">
            <p>Don't be shy.</p>
            <p>
              Our Myndlift providers are here to help you and are pleased to
              hear from you.
            </p>
            <p>
              Feel free to ask what you want but keep it short, 200 words or
              less, this is just an initial contact.
            </p>
            <p>Remember to double check your email and phone number</p>
          </div>
        </main>
      </section>
    </>
  );
};
