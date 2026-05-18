const Projects = () => {
  const projects = [
    
    {
      title: "HVAC Management System",
      description:
        "Developed a responsive HVAC management platform for handling customer requests, service tracking, and workflow management with modern UI design and optimized performance.",
      tech: "React.js | Spring Boot | MySQL | REST APIs",
      link: "https://github.com/Tarak517/hvac-project",
      video: "/my-portfolio/Alpha.mp4"
    },
{
      title: "ASVMall – Seller Management Application",
      description:
        "Developed a full-stack seller-focused application with complete CRUD functionalities. Built REST APIs in Spring Boot, connected a responsive React.js frontend, implemented MySQL with JPA/Hibernate, and designed a seller dashboard for product management.",
      tech: "Java | Spring Boot | React.js | MySQL | REST APIs",
      link: "https://github.com/Tarak517/asv-mall-seller",
      image: "/my-portfolio/AsvMallHomepage.jpg"
    },
    {
  title: "Clothify – E-Commerce Fashion Platform",
  description:
    "Developed a responsive e-commerce fashion platform with modern UI design, product listings, category-based browsing, shopping cart functionality, and smooth user experience across devices.",
  tech: "React.js | Tailwind CSS | JavaScript | Vite",
  link: "https://github.com/Tarak517/clothify",
  image: "/my-portfolio/homePage.jpg"
},

   {
  title: "Air Canvas – Digital Drawing Using Hand Movements",
  description:
    "Implemented an Air Canvas system using OpenCV, MediaPipe, and NumPy to draw digitally using hand gestures. Published in Industrial Engineering Journal (ISSN 0970-2555), Volume 53, Issue 5, May 2024.",
  tech: "Python | OpenCV | MediaPipe | NumPy",
  link: "https://github.com/Tarak517/air-canvas"
},

  {
  title: "Book Author Suggestion Bot",
  description:
    "Built a Telegram bot using NLP techniques to recommend authors based on user preferences.",
  tech: "Python | NLP | Telegram Bot",
  link: ""
}
  ];

  return (
    <div className="min-h-screen px-6 pt-32 flex flex-col items-center bg-gray-50">
      <h1
        className="text-4xl font-bold mb-12"
        style={{ color: "#031273" }}
      >
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
        {projects.map((project) => (
          <div
  key={project.title}
  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
>
  
  {/* IMAGE */}
  {project.image && !project.video && (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-56 object-cover"
    />
  )}

  {/* VIDEO */}
  {project.video && (
    <video
      controls
      className="w-full h-56 object-cover"
    >
      <source src={project.video} type="video/mp4" />
    </video>
  )}

  <div className="p-6">
    <h2
      className="text-2xl font-bold mb-2"
      style={{ color: "#031273" }}
    >
      {project.title}
    </h2>

    <p className="text-gray-700 mb-3">
      {project.description}
    </p>

    <p className="font-semibold mb-4">
      Tech: {project.tech}
    </p>

    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#031273" }}
        className="font-semibold hover:text-[#B69803]"
      >
        View Project →
      </a>
    )}
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default Projects;