function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1e3a8a", 
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const menuStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>IELTS Institute</div>
      <div style={menuStyle}>
        <a href="#features" style={linkStyle}>Features</a>
        <a href="#testimonials" style={linkStyle}>Testimonials</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
