function TestimonialCard({ name, feedback, avatar }) {
  const cardStyle = {
    flex: "1",
    minWidth: "250px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "20px",
  };

  const avatarStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    marginBottom: "15px",
    objectFit: "cover",
  };

  const nameStyle = {
    fontWeight: "600",
    marginBottom: "10px",
    color: "#1e3a8a",
  };

  const feedbackStyle = {
    fontSize: "16px",
    color: "#374151",
    lineHeight: "1.5",
  };

  return (
    <div style={cardStyle}>
      <img src={avatar} alt={name} style={avatarStyle} />
      <div style={nameStyle}>{name}</div>
      <div style={feedbackStyle}>{feedback}</div>
    </div>
  );
}

export default TestimonialCard;

