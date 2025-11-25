import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      form,
      process.env.REACT_APP_EMAILJS_PUBLIC
    )
    .then(
      () => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      },
      (error) => {
        alert("Something went wrong: " + error.text);
        setLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-32">
      <h1 className="text-4xl font-bold mb-10">Contact Me</h1>
      <form
        className="w-full max-w-xl flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-3 border rounded h-40"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
