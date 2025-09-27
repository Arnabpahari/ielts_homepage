function Footer() {
  const footerStyle = {
    backgroundColor: "#1e3a8a",
    color: "#fff",
    padding: "40px 80px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    minWidth: "200px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginBottom: "10px",
  };

  const headingStyle = {
    fontWeight: "600",
    marginBottom: "15px",
    fontSize: "18px",
  };

  return (
    <footer style={footerStyle} id="contact">
      <div style={columnStyle}>
        <div style={headingStyle}>IELTS Institute</div>
        <p>© 2025 IELTS Institute. All rights reserved.</p>
      </div>
      <div style={columnStyle}>
        <div style={headingStyle}>Links</div>
        <a href="#features" style={linkStyle}>Features</a>
        <a href="#testimonials" style={linkStyle}>Testimonials</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
      <div style={columnStyle}>
        <div style={headingStyle}>Contact</div>
        <p>Email: info@ieltsabcdinstitute.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
    </footer>
  );
}

export default Footer;

