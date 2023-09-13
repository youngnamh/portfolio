import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-div">
      <div className="footer-links-div">
        <div>
          <a
            href="https://www.linkedin.com/in/youngnamh/"
            target="_blank"
            className="footer-icon"
          >
            <i className="devicon-linkedin-plain footer-icon"></i>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/youngnamh"
            target="_blank"
            className="footer-icon"
          >
            <i className="devicon-github-original footer-icon"></i>
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        © Copyright {currentYear}, Youngnam Hlady
      </div>
    </div>
  );
}
