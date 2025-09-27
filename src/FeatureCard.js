function FeatureCard({ title, description, icon }) {
  const cardStyle = {
    flex: "1",
    minWidth: "220px",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "40px",
    marginBottom: "15px",
    color: "#1e3a8a",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#1e3a8a",
  };

  const descStyle = {
    fontSize: "16px",
    color: "#374151",
    lineHeight: "1.5",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={iconStyle}>{icon}</div>
      <div style={titleStyle}>{title}</div>
      <div style={descStyle}>{description}</div>
    </div>
  );
}

export default FeatureCard;
