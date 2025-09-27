function HeroSection() {
  const heroStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px 80px",
    backgroundColor: "#f3f4f6",
    flexWrap: "wrap",
    gap: "30px",
  };

  const textStyle = {
    flex: "1",
    minWidth: "300px",
  };

  const headlineStyle = {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#1e3a8a",
  };

  const subTextStyle = {
    fontSize: "18px",
    marginBottom: "30px",
    lineHeight: "1.6",
    color: "#374151",
  };

  const buttonStyle = {
    padding: "12px 25px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

//   const imageStyle = {
//     flex: "1",
//     minWidth: "300px",
//     maxWidth: "500px",
//     borderRadius: "10px",
//   };

  return (
    <section style={heroStyle}>
      <div style={textStyle}>
        <h1 style={headlineStyle}>Achieve Your Dream IELTS Score</h1>
        <p style={subTextStyle}>
          Join our comprehensive IELTS program designed to improve your
          Speaking, Writing, Reading, and Listening skills. Learn from
          expert trainers and take mock tests for better results.
        </p>
        <button style={buttonStyle}>Join Now</button>
      </div>
      <div>
        {/* <img
          src="https://via.placeholder.com/450x300.png?text=IELTS+Banner"
          alt="IELTS Banner"
          style={imageStyle}
        /> */}
      </div>
    </section>
  );
}

export default HeroSection;
