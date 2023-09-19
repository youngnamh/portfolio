import EmailForm from "./EmailForm";

export default function Contact() {
  const wantForm = false;

  const includeForm = () => {
    if (wantForm) {
      return (
        <>
          <EmailForm />
          <div className="contact-item"></div>
          <div className="contact-item"></div>
        </>
      );
    }
  };

  return (
    <div className="contact-div">
      <div className="contact-item" style={{ fontSize: "1.5rem" }}>
        If you have any questions, or would like to discuss future
        opportunities,
        <br /> please feel free to send me an email or reach out on any of my
        social media accounts.
        {includeForm()}
      </div>
    </div>
  );
}
