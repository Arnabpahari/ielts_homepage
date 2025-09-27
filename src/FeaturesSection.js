import FeatureCard from "./FeatureCard";

function FeaturesSection() {
  const sectionStyle = {
    padding: "50px 80px",
    backgroundColor: "#f9fafb",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  };

  const features = [
    {
      title: "Speaking Practice",
      description: "Improve your fluency and confidence with expert feedback.",
      icon: "🗣️",
    },
    {
      title: "Mock Tests",
      description: "Take full-length mock tests to track your progress.",
      icon: "📝",
    },
    {
      title: "AI Band Score",
      description: "Get instant scoring and insights using AI technology.",
      icon: "🤖",
    },
    {
      title: "Personalized Coaching",
      description: "Tailored sessions based on your strengths and weaknesses.",
      icon: "🎯",
    },
  ];

  return (
    <section style={sectionStyle} id="features">
      {features.map((feat, index) => (
        <FeatureCard
          key={index}
          title={feat.title}
          description={feat.description}
          icon={feat.icon}
        />
      ))}
    </section>
  );
}

export default FeaturesSection;
