export default function EmailForm() {
  return (
    <form action="https://formspree.io/f/xrgwlelp" method="POST">
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
        <textarea
          className="email-info email-text"
          placeholder="Message"
          name="Message"
          required
        />
        <div className="send-div">
          <button type="submit">Send</button>
        </div>
      </div>
    </form>
  );
}
