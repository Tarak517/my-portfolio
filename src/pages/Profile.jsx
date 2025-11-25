const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 gap-12">

      {/* LEFT BOX */}
      <div
        className="bg-blue-100 shadow-xl rounded-2xl w-full md:w-96 text-center border border-gray-200 flex flex-col"
        style={{ minHeight: "520px" }}
      >

        {/* TOP CONTENT */}
        <div className="p-6">
          <img
            src="/tarak.jpg"
            alt="Profile"
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4"
          />

          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            TARAKA RAMA RAO J
          </h1>
          <p className="text-gray-500 font-light">
            [He/Him]
          </p>

          <p className=" font-light">
            Java Full Stack Developer
          </p>
        </div>

        {/* SOCIAL LINKS — FULL WIDTH BACKGROUND */}
        <div className="mt-auto bg-white w-full py-4 rounded-b-2xl">
          <div className="flex justify-center gap-6 text-black text-lg font-light">

            <a href="https://linkedin.com" target="_blank" className="hover:underline">
              LinkedIn
            </a>

            <a href="mailto:jampanitarak62@gmail.com" className="hover:underline">
              Gmail
            </a>

            <a href="https://github.com" target="_blank" className="hover:underline">
              GitHub
            </a>

            <a href="/tarak resume_fullstack.pdf" download className="hover:underline">
              Resume
            </a>

          </div>
        </div>
      </div>

      {/* RIGHT ABOUT SECTION */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>

        <p className="text-lg text-gray-700 leading-relaxed font-light">
          I am a dedicated <span className="font-semibold text-blue-600">Java Full Stack Developer</span>
          specializing in building efficient, scalable, and user-friendly web applications using
          <span className="font-semibold"> Spring Boot</span>,
          <span className="font-semibold"> React.js</span>, and
          <span className="font-semibold"> MySQL</span>. I enjoy creating clean UI,
          optimized backend logic, and contributing to meaningful projects.
        </p>
      </div>

    </div>
  );
};

export default Profile;
