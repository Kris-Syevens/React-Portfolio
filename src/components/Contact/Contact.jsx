import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_job9r4r",
        "template_h5049op",
        form.current,
        "9LFb-QebuCoVqzYVs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kris@syevens.com</h5>
            <a href="mailto:kris@syevens.com" target="_blank" rel="noreferrer">
              Send An Email
            </a>
          </article>
          <article className="contact__option">
            <FaTwitter className="contact__option-icon" />
            <h4>Direct Message</h4>
            <h5>@kris_syevens</h5>
            <a
              href="https://twitter.com/kris_syevens"
              target="_blank"
              rel="noreferrer"
            >
              DM Via Twitter
            </a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>Direct Message</h4>
            <h5>@syevens</h5>
            <a
              href="https://www.linkedin.com/in/syevens/"
              target="_blank"
              rel="noreferrer"
            >
              DM Via LinkedIn
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
