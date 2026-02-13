function Contact() {
  return (
    <section className="contact-page">
      <h1 className="contact-page-title">Contact Us</h1>

      <div className="contact-page-cards">
        {/* PHONE */}
        <div className="contact-page-card">
          <div className="icon">📞</div>
          <h3>Phone</h3>
          <p>
            <a href="tel:+918301959266" className="contact-link">
              +91 83019 59266
            </a>
          </p>
        </div>

        {/* EMAIL */}
        <div className="contact-page-card">
          <div className="icon">✉️</div>
          <h3>Email</h3>
          <p>
            <a
              href="mailto:capri.diagnostics@gmail.com"
              className="contact-link"
            >
              capri.diagnostics@gmail.com
            </a>
          </p>
        </div>

        {/* ADDRESS */}
        <div className="contact-page-card">
          <div className="icon">📍</div>
          <h3>Address</h3>
          <p>
            <a
              href="https://maps.app.goo.gl/dQPudT4Kq9s8cjwN7?g_st=ic"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Capricorn Diagnostics, TMC 28/524/8, New No: 36/6507, JOSES TOWER,
              Swimming Pool Road, North Bus Stand, Chembukkavu P.O,
              Thrissur – 680020, Kerala, India
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

