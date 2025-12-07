const Skills = () => {
  const skillCategories = [
    { category: "Languages", skills: ["Java", "JavaScript", "SQL", "HTML", "CSS"] },
    { category: "Backend", skills: ["Spring Boot", "JPA", "REST APIs"] },
    { category: "Frontend", skills: ["React.js", "Bootstrap", "Tailwind"] },
    { category: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
    { category: "Tools", skills: ["Git", "Postman", "VS Code", "IntelliJ"] },
    { category: "Cloud", skills: ["AWS", "Firebase"] },
    { category: "Version Control", skills: ["GitHub", "GitLab"] },
  ];

  return (
    <div className="min-h-screen px-6 pt-32 flex flex-col items-center bg-gray-50">
      {/* Section Title */}
      <h1 className="text-4xl font-bold mb-4" style={{ color: "#031273" }}>My Skills</h1>

      {/* Description */}
      <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl">
        I am proficient in a wide range of technologies and tools required for building modern web applications. 
        From backend development to frontend design, database management. I continuously expand my skill set to deliver robust and scalable solutions.
      </p>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {skillCategories.map(({ category, skills }) => (
          <div key={category} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#031273" }}>{category}</h2>
            <ul className="space-y-1 text-gray-700">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
