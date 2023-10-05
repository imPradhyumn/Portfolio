import React, { useState, useRef } from "react";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sendMail from "../../feautres/sendMail";
import "./css/contact-form.css";
import { EmailJSResponseStatus } from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });

  const formRef: any = useRef();

  let isEmailSent = false;
  const throttle = async (callback: Function) => {
    const sendPseudoBtn: any = document.getElementById(
      "sent-pseudo-btn"
    ) as HTMLElement;

    const sendBtn: any = document.getElementById("send-btn") as HTMLElement;

    if (isEmailSent) return;

    let response: EmailJSResponseStatus = await callback(formRef);
    // console.log(response);
    if (response.status != 200) {
      alert("Error " + response.status);
      return;
    }

    sendPseudoBtn.style.width = "100%";
    isEmailSent = true;

    setTimeout(() => {
      isEmailSent = false;
      sendPseudoBtn.style.width = "0%";
    }, 3000);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    let value = e.currentTarget.value;
    // console.log(value);
    if ((inputName == "fname" || inputName == "lname") && value) {
      const firstChar = value[0].toUpperCase();
      value = firstChar + value.slice(1);
    }
    setFormData((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <section
      className="component-container"
      id="contact-section"
      style={{ paddingBottom: "2rem" }}
    >
      <header className="heading">
        <FontAwesomeIcon icon={faLaptopCode} className="heading-icon" />
        <h2>Get In Touch</h2>
      </header>

      <div id="contact-form-container">
        <figure id="contact-bg-container">
          <img src="/static/contact-bg/contact-bg.jpg" alt="contact-bg" />
        </figure>

        <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
          <h3>Send a Message</h3>

          <div id="form-elements">
            <div>
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleInputChange}
                className="form__field"
                placeholder="First Name"
                required={false}
                pattern={"[a-zA-Z]+"}
              ></input>
              <label htmlFor="first-name" className="form__label">
                First Name
              </label>
            </div>

            <div>
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleInputChange}
                className="form__field"
                placeholder="Last Name"
                required={false}
                pattern={"[a-zA-Z]+"}
              ></input>
              <label htmlFor="last-name" className="form__label">
                Last Name
              </label>
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form__field"
                placeholder="Email"
                required={false}
              ></input>
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>

            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form__field"
                placeholder="Phone"
                required={false}
                pattern={"[+]{0,1}[0-9]{10,12}"}
              ></input>
              <label htmlFor="phone" className="form__label">
                Phone
              </label>
            </div>

            <div id="message-box-container">
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form__field"
                placeholder="Message"
                required={false}
              ></input>
              <label htmlFor="message" className="form__label">
                Message
              </label>
            </div>
            <div id="btn-container-outer">
              <div id="btn-container-inner">
                <button
                  id="send-btn"
                  type="submit"
                  onClick={() => throttle(sendMail)}
                >
                  Send
                </button>
                <div id="sent-pseudo-btn">Sent!!</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
