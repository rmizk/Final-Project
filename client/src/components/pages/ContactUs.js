import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const { users } = useSelector((state) => state.reducer);

  // console.log(users);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6tr4nly",
        "template_5gidzdm",
        form.current,
        "user_rcBdzpZbWr7IuOOlIjCiE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Message envoyer :) ");
  };

  return (
    <div className="background">
      <div className="signup-box">
        <h2>Contactez nous</h2>

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="">Nom et Prénom</label>
          <input type="text" name="nom_prénom" />

          <label htmlFor="">Email</label>
          <input type="email" name="email" />

          <label htmlFor="">Message</label>
          <input type="text" name="message" className="champ" />

          <input type="submit" value="envoyer" />
        </form>
      </div>

    </div>
  );
};

export default ContactUs;
