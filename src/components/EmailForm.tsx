import { useForm, ValidationError } from "@formspree/react";
import "../styles/content.css";

export default function EmailForm() {
  const [state, handleSubmit] = useForm("xrgwlelp");

  if (state.succeeded) {
    return <p>Thanks for the message!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="email-div">
        <input
          type="text"
          className="email-info"
          placeholder="Name"
          name="Name"
          required
        />
        <input
          type="email"
          className="email-info"
          placeholder="Email"
          name="Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="email-info email-text"
          placeholder="Message"
          name="Message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="send-div">
          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
