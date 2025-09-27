import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
  const sectionStyle = {
    padding: "50px 80px",
    backgroundColor: "#f3f4f6",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  };

  const testimonials = [
    {
      name: "Richard Johnson",
      feedback: "The IELTS coaching here helped me improve my speaking score tremendously!",
      avatar: "/images/richard.jpeg",
    },
    {
      name: "Rajesh Kumar",
      feedback: "Mock tests and personalized feedback made a huge difference in my preparation.",
      avatar: "/images/rajesh.jpeg",
    },
    {
      name: "Sophia Lee",
      feedback: "AI Band Score feature was really insightful and saved me a lot of time.",
      avatar: "/images/sophia.jpeg",
    },
  ];

  return (
    <section style={sectionStyle} id="testimonials">
      {testimonials.map((t, index) => (
        <TestimonialCard
          key={index}
          name={t.name}
          feedback={t.feedback}
          avatar={t.avatar}
        />
      ))}
    </section>
  );
}

export default TestimonialsSection;
