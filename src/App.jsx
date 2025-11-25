import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Profile from "./pages/Profile.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
  <Route path="/" element={<Profile />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

    </>
  );
}

export default App;
