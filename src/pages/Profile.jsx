const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 gap-12">

      {/* LEFT BOX */}
      <div
        className="shadow-xl rounded-2xl w-full md:w-96 text-center flex flex-col border border-gray-200"
        style={{ minHeight: "520px", backgroundColor: "#031273" }}
      >
        {/* TOP CONTENT */}
        <div className="p-6">
          {/* Profile Photo */}
          <img 
              src="/my-portfolio/tarak.jpg" 
              alt="Tarak" 
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4"
            />


          {/* Name */}
          <h1 className="text-3xl font-bold text-[#B69803] mb-1">
            TARAKA RAMA RAO J
          </h1>
          <p className="text-gray-300 font-light mb-2">[He/Him]</p>

          {/* Role */}
          <span className="font-semibold text-white">
            Java Full Stack Developer
          </span>
        </div>

        {/* SOCIAL LINKS — BOTTOM BOX */}
        <div className="mt-auto w-full py-4 rounded-b-2xl" style={{ backgroundColor: "#031F8F" }}>
          <div className="flex justify-center gap-6 text-white text-lg">
            <a 
              href="https://www.linkedin.com/in/taraka-rama-rao-9855b5265/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#B69803] transition-colors duration-300"
            >
              LinkedIn
            </a>

            <a 
              href="mailto:jampanitarak62@gmail.com" 
              className="hover:text-[#B69803] transition-colors duration-300"
            >
              Gmail
            </a>

            <a 
              href="https://github.com/Tarak517" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#B69803] transition-colors duration-300"
            >
              GitHub
            </a>

           <a 
              href="/my-portfolio/tarak's resume_fullsatck.pdf" 
              download
              className="hover:text-[#B69803] transition-colors duration-300"
              >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT ABOUT SECTION */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl font-bold text-[#031273] mb-4">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          As an aspiring <span className="font-semibold text-black">Java Full Stack Developer</span> specializing in building efficient, scalable, and smooth web applications using
          <span className="font-semibold"> Spring Boot</span>, 
          <span className="font-semibold"> React.js</span> and
          <span className="font-semibold"> MySQL</span>. I enjoy creating friendly UI, optimized backend logic, and contributing to meaningful projects.
        </p>
      </div>

    </div>
  );
};

export default Profile;
