import resume from "../assets/files/Resume for website.pdf";

export default function Contact() {
  return (
    <div className="contact-div">
      <div className="contact-item">
        If you have any questions or would like to discuss future opportunities,
        please send me a message.
      </div>
      <div className="contact-item">Currently based in Canada</div>
      <div className="contact-item">
        <a href={resume} target="_blank">
          See Resume
        </a>
      </div>
    </div>
  );
}
