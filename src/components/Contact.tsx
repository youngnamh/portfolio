import resume from "../assets/files/Resume for website.pdf";

export default function Contact() {
  return (
    <div className="contact-div">
      <div className="contact-item">
        If you have any questions, or would like to discuss future
        opportunities,
        <br /> please send me a message.
      </div>
      <form>
        <div className="email-div">
          <input
            type="text"
            className="email-info"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="email-info"
            placeholder="Email"
            required
          />
          <textarea
            className="email-info email-text"
            placeholder="Message"
            required
          />
          <div className="send-div">
            <button type="submit">Send</button>
          </div>
        </div>
      </form>
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
