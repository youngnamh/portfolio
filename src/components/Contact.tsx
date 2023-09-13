import resume from "../assets/files/Resume for website.pdf";
import EmailForm from "./EmailForm";

export default function Contact() {
  return (
    <div className="contact-div">
      <div className="contact-item">
        If you have any questions, or would like to discuss future
        opportunities,
        <br /> please send me a message.
      </div>
      <EmailForm />
      <div className="contact-item"></div>
      <div className="contact-item">Currently based in Canada</div>
      <div className="contact-item">
        <a href={resume} target="_blank" className="resume-anchor">
          View Resume
        </a>
      </div>
    </div>
  );
}
