import React from "react";

const certificates = [
  { id: 1, name: "Certified in Java Full Stack Developer", file: "asvmall.jpg" },
  { id: 2, name: "Air Canvas: A Touchless Canvas Certification of Publications", file: "aircanvas.jpg" },
  { id: 3, name: "Certification on Presentation", file: "aircanvas2.jpg" },
  { id: 4, name: "DevOps Certificate", file: "devops.jpg" },
  { id: 5, name: "Trainee Machine Learning", file: "indianservers.jpg" },
];

const Certificates = () => {
  return (
    <div style={{ padding: "120px 20px 20px", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", color: "#021945", fontWeight: "bold", marginBottom: "40px" }}>
        My Certificates
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>
        {certificates.map((cert) => (
          <div
            key={cert.id}
            style={{
              width: "100%",
              maxWidth: "600px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            {/* Use import.meta.env.BASE_URL for public folder */}
            <img
              src={`${import.meta.env.BASE_URL}${cert.file}`}
              alt={cert.name}
              style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "15px" }}
            />
            <p style={{ fontWeight: "bold", color: "#021945", fontSize: "1rem" }}>{cert.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
